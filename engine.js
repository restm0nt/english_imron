/* ============================================================
   engine.js — all the logic. You never edit this.
   Reads the weeks registered via registerWeek() and builds the
   whole experience: lessons, exercises, flashcards, quiz,
   dictation, progress, spaced review, search, click-to-translate.
   Everything runs offline; progress is saved in the browser.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- tiny helpers ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  var esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };
  var norm = function (s) {
    return String(s == null ? "" : s).toLowerCase()
      .replace(/[.,!?;:"'`’“”]/g, "")
      .replace(/\s+/g, " ").trim();
  };
  var shuffle = function (a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  /* ---------- data ---------- */
  var WEEKS = (window.EC.weeks || []).slice().sort(function (a, b) {
    return (a.week || 0) - (b.week || 0);
  });
  // flat dictionary for click-to-translate + search
  var DICT = {};   // norm(en) -> {en, pron, ipa, ru, uz, pos}
  function addToDict(w) {
    if (!w || !w.en) return;
    var k = norm(w.en);
    if (!DICT[k]) DICT[k] = w; // first definition wins (course vocab preferred order)
  }
  WEEKS.forEach(function (wk) {
    (wk.lessons || []).forEach(function (ls) {
      (ls.vocab || []).forEach(addToDict);
    });
  });
  (window.EC.extraWords || []).forEach(addToDict);

  function findWeek(n) {
    for (var i = 0; i < WEEKS.length; i++) if (WEEKS[i].week === n) return WEEKS[i];
    return null;
  }
  function lessonOf(weekNo, dayNo) {
    var wk = findWeek(weekNo); if (!wk) return null;
    var ls = (wk.lessons || []).filter(function (l) { return l.day === dayNo; })[0];
    return ls ? { week: wk, lesson: ls } : null;
  }

  /* ---------- saved state ---------- */
  var KEY = "english_course_state_v1";
  var state = load();
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }
  state.settings = state.settings || {};
  state.progress = state.progress || {};   // "w-d" -> {lesson:bool, hw:bool}
  state.words = state.words || {};          // norm(en) -> "known" | "learning"
  function lessonKey(w, d) { return w + "-" + d; }
  function prog(w, d) {
    var k = lessonKey(w, d);
    return (state.progress[k] = state.progress[k] || {});
  }

  /* ---------- settings: theme / font / ipa ---------- */
  function applySettings() {
    document.documentElement.setAttribute("data-theme", state.settings.dark ? "dark" : "light");
    document.documentElement.style.setProperty("--fs", (state.settings.fontScale || 16) + "px");
    document.body.classList.toggle("show-ipa", !!state.settings.ipa);
  }
  applySettings();

  $("#themeBtn").onclick = function () { state.settings.dark = !state.settings.dark; save(); applySettings(); };
  $("#ipaBtn").onclick = function () { state.settings.ipa = !state.settings.ipa; save(); applySettings(); toast(state.settings.ipa ? "IPA включён" : "IPA скрыт"); };
  $("#fontUp").onclick = function () { state.settings.fontScale = Math.min(22, (state.settings.fontScale || 16) + 1); save(); applySettings(); };
  $("#fontDown").onclick = function () { state.settings.fontScale = Math.max(13, (state.settings.fontScale || 16) - 1); save(); applySettings(); };
  $("#printBtn").onclick = function () { window.print(); };

  /* ---------- toast ---------- */
  var toastT;
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove("show"); }, 1600);
  }

  /* ---------- text to speech ---------- */
  var enVoice = null;
  function pickVoice() {
    var vs = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    var en = vs.filter(function (v) { return /^en(-|_|$)/i.test(v.lang); });
    enVoice = en.filter(function (v) { return /US|GB|United|English/i.test(v.name + v.lang); })[0] || en[0] || null;
  }
  if (window.speechSynthesis) {
    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;
  }
  function speak(text) {
    if (!window.speechSynthesis) { toast("Озвучка недоступна в этом браузере"); return; }
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = (enVoice && enVoice.lang) || "en-US";
      if (enVoice) u.voice = enVoice;
      u.rate = 0.92;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  /* ---------- click-to-translate ---------- */
  // wrap word tokens in clickable spans inside a container's text nodes
  function makeClickable(container) {
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      if (!node.nodeValue || !/[A-Za-z]/.test(node.nodeValue)) return;
      var frag = document.createDocumentFragment();
      node.nodeValue.split(/(\b)/).forEach(function (piece) {
        if (/^[A-Za-z][A-Za-z'-]*$/.test(piece)) {
          var s = el("span", "w"); s.textContent = piece; frag.appendChild(s);
        } else {
          frag.appendChild(document.createTextNode(piece));
        }
      });
      node.parentNode.replaceChild(frag, node);
    });
  }
  var pop = $("#pop");
  document.addEventListener("click", function (e) {
    var w = e.target.closest && e.target.closest(".w");
    if (!w) { if (!e.target.closest(".pop")) pop.classList.remove("open"); return; }
    var entry = DICT[norm(w.textContent)];
    if (entry) {
      pop.innerHTML =
        '<div class="pen">' + esc(entry.en) +
        ' <button class="speak" style="width:28px;height:28px" data-say="' + esc(entry.en) + '">🔊</button></div>' +
        (entry.pron ? '<div class="ppron">' + esc(entry.pron) + '</div>' : '') +
        '<div class="pru">' + esc(entry.ru || "") + '</div>' +
        (entry.uz ? '<div class="puz">uz: ' + esc(entry.uz) + '</div>' : '');
    } else {
      pop.innerHTML = '<div class="pen">' + esc(w.textContent) + '</div>' +
        '<div class="miss">Нет в словаре курса</div>';
    }
    var r = w.getBoundingClientRect();
    pop.classList.add("open");
    var pw = pop.offsetWidth, ph = pop.offsetHeight;
    var left = Math.min(window.innerWidth - pw - 8, Math.max(8, r.left + window.scrollX));
    var top = r.bottom + window.scrollY + 6;
    if (top + ph > window.scrollY + window.innerHeight) top = r.top + window.scrollY - ph - 6;
    pop.style.left = left + "px"; pop.style.top = top + "px";
  });
  // delegated speak buttons (examples, vocab, popup, flashcards)
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-say]");
    if (b) { e.stopPropagation(); speak(b.getAttribute("data-say")); }
  });

  /* ============================================================
     NAVIGATION
     ============================================================ */
  var view = $("#view");
  var current = { screen: "home", week: null, day: null, tab: "lesson" };

  function buildWeekNav() {
    var nav = $("#weekNav"); nav.innerHTML = "";
    if (!WEEKS.length) {
      nav.appendChild(el("div", "empty", "Пока нет недель. Добавьте <b>weeks/week01.js</b>."));
      return;
    }
    WEEKS.forEach(function (wk) {
      var wrap = el("div");
      var btn = el("button", "week-btn");
      btn.setAttribute("aria-expanded", "false");
      btn.innerHTML =
        '<span class="week-no">' + wk.week + '</span>' +
        '<span class="week-name">' + esc(wk.title || ("Неделя " + wk.week)) +
        '<small>' + esc(wk.vocabTheme || "") + '</small></span>' +
        '<span class="chev">›</span>';
      var days = el("div", "days");
      (wk.lessons || []).slice().sort(function (a, b) { return a.day - b.day; }).forEach(function (ls) {
        var d = el("button", "day-btn");
        d.dataset.week = wk.week; d.dataset.day = ls.day;
        if (prog(wk.week, ls.day).lesson) d.classList.add("done");
        d.innerHTML = '<span class="dot"></span> День ' + ls.day +
          ' · <span style="color:var(--ink-faint);font-weight:400">' + esc(ls.grammarTitle || "") + '</span>';
        d.onclick = function () { openDay(wk.week, ls.day, "lesson"); closeSidebarMobile(); };
        days.appendChild(d);
      });
      btn.onclick = function () {
        var open = days.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      };
      wrap.appendChild(btn); wrap.appendChild(days);
      nav.appendChild(wrap);
    });
  }

  function syncNavActive() {
    document.querySelectorAll(".day-btn").forEach(function (b) {
      var on = current.screen === "day" &&
        +b.dataset.week === current.week && +b.dataset.day === current.day;
      b.classList.toggle("active", on);
      if (on) {
        var days = b.closest(".days"); if (days && !days.classList.contains("open")) {
          days.classList.add("open");
          var wb = days.previousSibling; if (wb) wb.setAttribute("aria-expanded", "true");
        }
      }
    });
    document.querySelectorAll(".day-btn").forEach(function (b) {
      b.classList.toggle("done", !!prog(+b.dataset.week, +b.dataset.day).lesson);
    });
  }

  /* ---------- screens ---------- */
  function goHome() { current = { screen: "home" }; $("#crumbs").innerHTML = "Главная"; renderHome(); syncNavActive(); window.scrollTo(0, 0); }
  function goReview() { current = { screen: "review" }; $("#crumbs").innerHTML = "Повторение"; renderReview(); syncNavActive(); window.scrollTo(0, 0); }
  function openDay(w, d, tab) {
    current = { screen: "day", week: w, day: d, tab: tab || "lesson" };
    var wk = findWeek(w);
    $("#crumbs").innerHTML = "<b>Неделя " + w + "</b> · " + esc(wk ? wk.title : "") + " · День " + d;
    renderDay(); syncNavActive(); window.scrollTo(0, 0);
  }

  /* ============================================================
     HOME / DASHBOARD
     ============================================================ */
  function allVocabCount() {
    var n = 0; WEEKS.forEach(function (w) { (w.lessons || []).forEach(function (l) { n += (l.vocab || []).length; }); });
    return n;
  }
  function countWords(kind) {
    var n = 0; for (var k in state.words) if (state.words[k] === kind) n++;
    return n;
  }
  function lessonsDone() {
    var n = 0; for (var k in state.progress) if (state.progress[k].lesson) n++;
    return n;
  }
  function totalLessons() {
    var n = 0; WEEKS.forEach(function (w) { n += (w.lessons || []).length; });
    return n;
  }

  function renderHome() {
    view.innerHTML = "";
    if (!WEEKS.length) {
      view.appendChild(el("div", "empty",
        '<div class="big">📘</div>Нет данных недель.<br>Создайте файл <b>weeks/week01.js</b> и обновите страницу.'));
      return;
    }
    var head = el("div", "page-head");
    head.innerHTML = '<div class="eyebrow">Добро пожаловать</div>' +
      '<h2>Ваш прогресс</h2>' +
      '<p>Занимайтесь понемногу каждый день. Всё сохраняется в браузере.</p>';
    view.appendChild(head);

    var known = countWords("known"), learning = countWords("learning"), total = allVocabCount();
    var done = lessonsDone(), tl = totalLessons();
    var grid = el("div", "stat-grid");
    function stat(num, cls, lab) {
      var s = el("div", "stat");
      s.innerHTML = '<div class="num ' + cls + '">' + num + '</div><div class="lab">' + lab + '</div>';
      return s;
    }
    grid.appendChild(stat(done + " / " + tl, "teal", "Уроков пройдено"));
    grid.appendChild(stat(known, "", "Слов выучено"));
    grid.appendChild(stat(learning, "amber", "Слов в работе"));
    grid.appendChild(stat(total, "", "Всего слов в курсе"));
    view.appendChild(grid);

    var pct = total ? Math.round((known / total) * 100) : 0;
    var pcard = el("div", "card");
    pcard.innerHTML = '<h3>Словарный запас <span class="tag">' + pct + '%</span></h3>' +
      '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
      '<p style="color:var(--ink-soft);margin:12px 0 0">Отмечайте слова как «выучил» на карточках или в списке слов.</p>';
    view.appendChild(pcard);

    // continue / start
    var next = nextDay();
    var cta = el("div", "card");
    cta.innerHTML = '<h3>Продолжить</h3>';
    var row = el("div", "vocab-tools");
    if (next) {
      var b = el("button", "btn primary", "▶ Неделя " + next.week + ", День " + next.day + " — " + esc(next.lesson.grammarTitle || ""));
      b.onclick = function () { openDay(next.week, next.day, "lesson"); };
      row.appendChild(b);
    }
    var rv = el("button", "btn", "↻ Повторить слова");
    rv.onclick = goReview; row.appendChild(rv);
    cta.appendChild(row);
    view.appendChild(cta);
  }

  function nextDay() {
    // first lesson not marked done; else first lesson
    var first = null;
    for (var i = 0; i < WEEKS.length; i++) {
      var ls = (WEEKS[i].lessons || []).slice().sort(function (a, b) { return a.day - b.day; });
      for (var j = 0; j < ls.length; j++) {
        if (!first) first = { week: WEEKS[i].week, day: ls[j].day, lesson: ls[j] };
        if (!prog(WEEKS[i].week, ls[j].day).lesson)
          return { week: WEEKS[i].week, day: ls[j].day, lesson: ls[j] };
      }
    }
    return first;
  }

  /* ============================================================
     DAY VIEW with subtabs
     ============================================================ */
  function renderDay() {
    var got = lessonOf(current.week, current.day);
    view.innerHTML = "";
    if (!got) { view.appendChild(el("div", "empty", "Урок не найден.")); return; }
    var L = got.lesson;

    var head = el("div", "page-head");
    head.innerHTML = '<div class="eyebrow">Неделя ' + current.week + ' · День ' + current.day + '</div>' +
      '<h2>' + esc(L.grammarTitle || "Урок") + '</h2>' +
      '<p>' + esc(got.week.vocabTheme || "") + '</p>';
    view.appendChild(head);

    var tabs = [
      ["lesson", "Урок"], ["words", "Слова"], ["practice", "Практика"],
      ["flash", "Карточки"], ["quiz", "Тест"], ["listen", "Аудио"], ["homework", "Домашка"]
    ];
    var bar = el("div", "subtabs");
    tabs.forEach(function (t) {
      var b = el("button", "subtab" + (current.tab === t[0] ? " active" : ""), t[1]);
      b.onclick = function () { current.tab = t[0]; renderDay(); window.scrollTo(0, 0); };
      bar.appendChild(b);
    });
    view.appendChild(bar);

    var body = el("div");
    view.appendChild(body);
    ({
      lesson: tabLesson, words: tabWords, practice: tabPractice,
      flash: tabFlash, quiz: tabQuiz, listen: tabListen, homework: tabHomework
    }[current.tab] || tabLesson)(body, L);
  }

  /* ---------- subtab: lesson ---------- */
  function tabLesson(body, L) {
    var g = el("div", "card");
    g.innerHTML = '<h3>Грамматика <span class="tag">объяснение</span></h3>' +
      '<div class="grammar">' + (L.grammar || "") + '</div>';
    body.appendChild(g);
    makeClickable($(".grammar", g));

    if (L.examples && L.examples.length) {
      var ex = el("div", "card");
      ex.appendChild(el("h3", null, "Примеры"));
      L.examples.forEach(function (e) {
        var row = el("div", "ex-row");
        var left = el("div");
        var en = el("div", "ex-en"); en.textContent = e.en;
        var ru = el("div", "ex-ru"); ru.textContent = e.ru || "";
        left.appendChild(en); left.appendChild(ru);
        makeClickable(en);
        var b = el("button", "speak"); b.setAttribute("data-say", e.en); b.textContent = "🔊";
        row.appendChild(b); row.appendChild(left);
        ex.appendChild(row);
      });
      body.appendChild(ex);
    }

    var done = prog(current.week, current.day).lesson;
    var foot = el("div", "vocab-tools no-print");
    var mark = el("button", "btn " + (done ? "" : "primary"), done ? "✓ Урок пройден" : "Отметить урок пройденным");
    mark.onclick = function () {
      prog(current.week, current.day).lesson = !prog(current.week, current.day).lesson;
      save(); renderDay(); syncNavActive();
      toast(prog(current.week, current.day).lesson ? "Отмечено как пройдено" : "Снято");
    };
    foot.appendChild(mark);
    var go = el("button", "btn", "Дальше: слова →");
    go.onclick = function () { current.tab = "words"; renderDay(); window.scrollTo(0, 0); };
    foot.appendChild(go);
    body.appendChild(foot);
  }

  /* ---------- subtab: words ---------- */
  function tabWords(body, L) {
    var vocab = L.vocab || [];
    var tools = el("div", "vocab-tools no-print");
    var fc = el("button", "btn primary", "▶ Учить карточками");
    fc.onclick = function () { current.tab = "flash"; renderDay(); window.scrollTo(0, 0); };
    tools.appendChild(fc);
    var sayAll = el("button", "btn", "🔊 Озвучить все");
    sayAll.onclick = function () { speakList(vocab.map(function (v) { return v.en; })); };
    tools.appendChild(sayAll);
    body.appendChild(tools);

    var list = el("div", "vlist");
    vocab.forEach(function (v) {
      var k = norm(v.en);
      var row = el("div", "vrow");
      var l = el("div", "l");
      l.innerHTML =
        '<div class="ven">' + esc(v.en) +
        (v.pos ? ' <span class="vpos">' + esc(v.pos) + '</span>' : '') + '</div>' +
        '<div><span class="vpron">' + esc(v.pron || "") + '</span> ' +
        (v.ipa ? '<span class="vipa">' + esc(v.ipa) + '</span>' : '') + '</div>' +
        '<div class="vtrans">' + esc(v.ru || "") +
        (v.uz ? ' <span class="uz">· ' + esc(v.uz) + '</span>' : '') + '</div>' +
        (v.example ? '<div class="vex">' + esc(v.example) + '</div>' : '');
      var r = el("div", "r no-print");
      var say = el("button", "speak"); say.setAttribute("data-say", v.en); say.textContent = "🔊";
      var learn = el("button", "mark learning" + (state.words[k] === "learning" ? " on" : ""), "◐");
      learn.title = "В работе";
      var know = el("button", "mark known" + (state.words[k] === "known" ? " on" : ""), "✓");
      know.title = "Выучил";
      learn.onclick = function () { setWord(k, "learning"); tabReRender(); };
      know.onclick = function () { setWord(k, "known"); tabReRender(); };
      r.appendChild(say); r.appendChild(learn); r.appendChild(know);
      row.appendChild(l); row.appendChild(r);
      list.appendChild(row);
    });
    body.appendChild(list);
  }
  function setWord(k, kind) {
    state.words[k] = (state.words[k] === kind) ? undefined : kind;
    if (!state.words[k]) delete state.words[k];
    save();
  }
  function tabReRender() { renderDay(); }

  function speakList(arr, i) {
    i = i || 0; if (i >= arr.length || !window.speechSynthesis) return;
    var u = new SpeechSynthesisUtterance(arr[i]);
    u.lang = (enVoice && enVoice.lang) || "en-US"; if (enVoice) u.voice = enVoice; u.rate = 0.9;
    u.onend = function () { speakList(arr, i + 1); };
    window.speechSynthesis.speak(u);
  }

  /* ---------- subtab: practice (exercises) ---------- */
  function tabPractice(body, L) {
    var exs = L.exercises || [];
    if (!exs.length) { body.appendChild(el("div", "empty", "В этом уроке нет упражнений.")); return; }
    var card = el("div", "card");
    card.appendChild(el("h3", null, "Упражнения"));
    exs.forEach(function (ex, i) { card.appendChild(renderExercise(ex, i + 1)); });
    var check = el("button", "btn primary no-print", "Проверить всё");
    check.style.marginTop = "8px";
    check.onclick = function () {
      var nodes = card.querySelectorAll(".exq");
      var right = 0, total = nodes.length;
      nodes.forEach(function (n) { if (n._check && n._check()) right++; });
      toast("Верно: " + right + " из " + total);
    };
    card.appendChild(check);
    body.appendChild(card);
  }

  function renderExercise(ex, n) {
    var box = el("div", "exq");
    var fb = el("div", "feedback");
    function setFb(ok) {
      fb.className = "feedback " + (ok ? "ok" : "bad");
      fb.textContent = ok ? "✓ Верно" : "✗ Попробуйте ещё";
    }

    if (ex.type === "choice") {
      box.appendChild(el("div", "prompt", '<span class="n">' + n + '</span>' + esc(ex.q)));
      var opts = el("div", "opts"); var chosen = null;
      shuffle(ex.options || []).forEach(function (o) {
        var b = el("button", "opt", esc(o));
        b.onclick = function () {
          opts.querySelectorAll(".opt").forEach(function (x) { x.classList.remove("sel"); });
          b.classList.add("sel"); chosen = o;
        };
        opts.appendChild(b);
      });
      box.appendChild(opts);
      box._check = function () {
        var ok = chosen != null && norm(chosen) === norm(ex.a);
        opts.querySelectorAll(".opt").forEach(function (x) {
          x.classList.remove("right", "wrong");
          if (norm(x.textContent) === norm(ex.a)) x.classList.add("right");
          else if (x.classList.contains("sel")) x.classList.add("wrong");
        });
        setFb(ok); return ok;
      };
    }
    else if (ex.type === "fill" || ex.type === "translate") {
      var lbl = ex.type === "translate" ? "Переведите: " : "";
      box.appendChild(el("div", "prompt", '<span class="n">' + n + '</span>' + esc(lbl) + esc(ex.q)));
      var inp = el("input", "inp"); inp.placeholder = "Ваш ответ…";
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") box._check(); });
      box.appendChild(inp);
      box._check = function () {
        var ok = norm(inp.value) === norm(ex.a);
        inp.classList.remove("right", "wrong"); inp.classList.add(ok ? "right" : "wrong");
        if (!ok) fb.innerHTML = '✗ Ответ: <b>' + esc(ex.a) + '</b>'; else { fb.textContent = "✓ Верно"; }
        fb.className = "feedback " + (ok ? "ok" : "bad");
        return ok;
      };
    }
    else if (ex.type === "order") {
      box.appendChild(el("div", "prompt", '<span class="n">' + n + '</span>Соберите предложение по порядку:'));
      var build = el("div", "answer-build");
      var placeholder = el("span", "placeholder", "нажимайте на слова ниже…");
      build.appendChild(placeholder);
      var pool = el("div", "chips");
      var picked = [];
      var words = (ex.q || "").split(/\s+/).filter(Boolean);
      shuffle(words).forEach(function (w) {
        var c = el("button", "chip", esc(w));
        c.onclick = function () {
          c.classList.add("used"); picked.push(w);
          if (placeholder.parentNode) placeholder.remove();
          var pc = el("button", "chip", esc(w));
          pc.onclick = function () { // tap to remove
            picked.splice(picked.indexOf(w), 1); pc.remove();
            c.classList.remove("used");
            if (!picked.length) build.appendChild(placeholder);
          };
          build.appendChild(pc);
        };
        pool.appendChild(c);
      });
      box.appendChild(build); box.appendChild(pool);
      box._check = function () {
        var ok = norm(picked.join(" ")) === norm(ex.a);
        if (!ok) { fb.innerHTML = '✗ Ответ: <b>' + esc(ex.a) + '</b>'; fb.className = "feedback bad"; }
        else { fb.textContent = "✓ Верно"; fb.className = "feedback ok"; }
        return ok;
      };
    }
    else if (ex.type === "match") {
      box.appendChild(el("div", "prompt", '<span class="n">' + n + '</span>Соедините английское слово с переводом:'));
      var pairs = ex.pairs || [];
      var ruOpts = shuffle(pairs.map(function (p) { return p.ru; }));
      var grid = el("div", "match-grid");
      var rows = [];
      pairs.forEach(function (p) {
        var r = el("div", "match-row");
        var sel = el("select");
        sel.appendChild(el("option", null, "— выберите —"));
        ruOpts.forEach(function (o) { var op = el("option"); op.value = o; op.textContent = o; sel.appendChild(op); });
        r.innerHTML = '<div class="en">' + esc(p.en) + '</div>';
        r.appendChild(sel);
        rows.push({ row: r, sel: sel, ru: p.ru });
        grid.appendChild(r);
      });
      box.appendChild(grid);
      box._check = function () {
        var all = true;
        rows.forEach(function (o) {
          var ok = norm(o.sel.value) === norm(o.ru);
          o.row.classList.remove("right", "wrong");
          o.row.classList.add(ok ? "right" : "wrong");
          if (!ok) all = false;
        });
        setFb(all); return all;
      };
    }
    else {
      box.appendChild(el("div", "prompt", esc(ex.q || "")));
      box._check = function () { return true; };
    }

    var btn = el("button", "btn ghost no-print", "Проверить");
    btn.style.marginTop = "8px";
    btn.onclick = function () { box._check(); };
    box.appendChild(btn);
    box.appendChild(fb);
    return box;
  }

  /* ---------- subtab: flashcards ---------- */
  function tabFlash(body, L) { runFlashcards(body, (L.vocab || []).slice(), "Карточки урока"); }

  function runFlashcards(body, deck, label) {
    if (!deck.length) { body.appendChild(el("div", "empty", "Нет слов для карточек.")); return; }
    deck = shuffle(deck);
    var idx = 0;
    var stage = el("div", "fc-stage");
    var count = el("div", "fc-count");
    var flash = el("div", "flash");
    flash.innerHTML =
      '<div class="flash-inner">' +
      '<div class="face front"></div>' +
      '<div class="face back"></div>' +
      '</div>';
    var controls = el("div", "fc-controls no-print");
    stage.appendChild(count); stage.appendChild(flash); stage.appendChild(controls);
    body.appendChild(stage);

    function render() {
      var v = deck[idx]; var k = norm(v.en);
      count.textContent = label + " · " + (idx + 1) + " / " + deck.length;
      flash.classList.remove("flipped");
      $(".face.front", flash).innerHTML =
        '<div class="big">' + esc(v.en) + '</div>' +
        '<button class="speak" data-say="' + esc(v.en) + '">🔊</button>' +
        '<div class="hint">нажмите, чтобы перевернуть</div>';
      $(".face.back", flash).innerHTML =
        (v.pron ? '<div class="pron">' + esc(v.pron) + '</div>' : '') +
        '<div class="ru">' + esc(v.ru || "") + '</div>' +
        (v.uz ? '<div class="uz">' + esc(v.uz) + '</div>' : '') +
        (v.example ? '<div class="hint">' + esc(v.example) + '</div>' : '');
      controls.innerHTML = "";
      var learn = el("button", "btn", "◐ В работе");
      learn.onclick = function () { setWord(k, "learning"); toast("В работе: " + v.en); nextCard(); };
      var know = el("button", "btn primary", "✓ Выучил");
      know.onclick = function () { setWord(k, "known"); toast("Выучено: " + v.en); nextCard(); };
      controls.appendChild(learn); controls.appendChild(know);
    }
    function nextCard() {
      if (idx < deck.length - 1) { idx++; render(); }
      else {
        stage.innerHTML = '<div class="result"><div class="score">✓</div>' +
          '<p>Колода пройдена!</p></div>';
        var again = el("button", "btn primary no-print", "Ещё раз");
        again.onclick = function () { body.innerHTML = ""; runFlashcards(body, deck, label); };
        stage.appendChild(again);
      }
    }
    flash.onclick = function (e) { if (e.target.closest("[data-say]")) return; flash.classList.toggle("flipped"); };
    render();
  }

  /* ---------- subtab: quiz ---------- */
  function tabQuiz(body, L) {
    var vocab = (L.vocab || []).slice();
    if (vocab.length < 4) { body.appendChild(el("div", "empty", "Для теста нужно минимум 4 слова.")); return; }
    var questions = buildQuiz(vocab, Math.min(10, vocab.length));
    runRun(body, questions, "Тест по словам");
  }
  function buildQuiz(vocab, count) {
    var pick = shuffle(vocab).slice(0, count);
    return pick.map(function (v, i) {
      var mode = i % 3; // 0: EN->RU choice, 1: RU->EN type, 2: EN->RU type
      if (mode === 0) {
        var wrong = shuffle(vocab.filter(function (x) { return norm(x.ru) !== norm(v.ru); }))
          .slice(0, 3).map(function (x) { return x.ru; });
        return { kind: "choice", label: "Выберите перевод", term: v.en, say: v.en,
          options: shuffle([v.ru].concat(wrong)), answer: v.ru };
      } else if (mode === 1) {
        return { kind: "type", label: "Напишите по-английски", term: v.ru, answer: v.en };
      }
      return { kind: "type", label: "Напишите перевод", term: v.en, say: v.en, answer: v.ru };
    });
  }

  function runRun(body, questions, title) {
    var i = 0, score = 0;
    var run = el("div", "run");
    body.appendChild(run);
    function render() {
      var q = questions[i];
      run.innerHTML = "";
      var prog = el("div", "progress"); prog.appendChild(el("i", null, "")); 
      $("i", prog).style.width = ((i) / questions.length * 100) + "%";
      run.appendChild(prog);
      var qbox = el("div", "qbox");
      qbox.innerHTML = '<div class="label">' + esc(q.label) + ' · ' + (i + 1) + '/' + questions.length + '</div>' +
        '<div class="term">' + esc(q.term) + (q.say ? ' <button class="speak" style="width:30px;height:30px" data-say="' + esc(q.say) + '">🔊</button>' : '') + '</div>';
      run.appendChild(qbox);
      var fb = el("div", "feedback"); fb.style.textAlign = "center";

      if (q.kind === "choice") {
        var opts = el("div", "opts"); opts.style.justifyContent = "center";
        q.options.forEach(function (o) {
          var b = el("button", "opt", esc(o));
          b.onclick = function () {
            var ok = norm(o) === norm(q.answer);
            opts.querySelectorAll(".opt").forEach(function (x) {
              x.style.pointerEvents = "none";
              if (norm(x.textContent) === norm(q.answer)) x.classList.add("right");
            });
            if (!ok) b.classList.add("wrong");
            if (ok) score++;
            fb.className = "feedback " + (ok ? "ok" : "bad");
            fb.textContent = ok ? "✓ Верно" : "Ответ: " + q.answer;
            advance();
          };
          opts.appendChild(b);
        });
        run.appendChild(opts);
      } else {
        var inp = el("input", "inp"); inp.style.margin = "0 auto"; inp.style.display = "block";
        inp.placeholder = "Ваш ответ…";
        var submit = el("button", "btn primary", "Ответить");
        submit.style.cssText = "margin:14px auto 0;display:block";
        function check() {
          var ok = norm(inp.value) === norm(q.answer);
          inp.classList.add(ok ? "right" : "wrong"); inp.disabled = true; submit.disabled = true;
          if (ok) score++;
          fb.className = "feedback " + (ok ? "ok" : "bad");
          fb.innerHTML = ok ? "✓ Верно" : "Ответ: <b>" + esc(q.answer) + "</b>";
          advance();
        }
        inp.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
        submit.onclick = check;
        run.appendChild(inp); run.appendChild(submit);
        setTimeout(function () { inp.focus(); }, 30);
      }
      run.appendChild(fb);
    }
    function advance() {
      var nx = el("button", "btn no-print", i < questions.length - 1 ? "Дальше →" : "Результат");
      nx.style.cssText = "margin:14px auto 0;display:block";
      nx.onclick = function () { if (i < questions.length - 1) { i++; render(); } else finish(); };
      run.appendChild(nx);
    }
    function finish() {
      var pct = Math.round(score / questions.length * 100);
      run.innerHTML = '<div class="result"><div class="score">' + score + '/' + questions.length + '</div>' +
        '<p>' + (pct >= 80 ? "Отлично! 🎉" : pct >= 50 ? "Неплохо, повторите слабые слова." : "Стоит повторить ещё раз.") + '</p></div>';
      var again = el("button", "btn primary no-print", "Пройти снова");
      again.style.cssText = "margin:10px auto 0;display:block";
      again.onclick = function () { body.innerHTML = ""; renderDay(); };
      run.appendChild(again);
    }
    render();
  }

  /* ---------- subtab: dictation (listen & type) ---------- */
  function tabListen(body, L) {
    var vocab = (L.vocab || []).slice();
    if (!vocab.length) { body.appendChild(el("div", "empty", "Нет слов для диктанта.")); return; }
    if (!window.speechSynthesis) { body.appendChild(el("div", "empty", "Озвучка недоступна в этом браузере.")); return; }
    var deck = shuffle(vocab).slice(0, Math.min(10, vocab.length));
    var i = 0, score = 0;
    var run = el("div", "run"); body.appendChild(run);

    function render() {
      var v = deck[i];
      run.innerHTML = "";
      var prog = el("div", "progress"); prog.appendChild(el("i")); $("i", prog).style.width = (i / deck.length * 100) + "%";
      run.appendChild(prog);
      var qbox = el("div", "qbox");
      qbox.innerHTML = '<div class="label">Аудио-диктант · ' + (i + 1) + '/' + deck.length + '</div>' +
        '<div class="term">🎧</div>';
      run.appendChild(qbox);
      var play = el("button", "btn no-print", "🔊 Повторить");
      play.style.cssText = "margin:0 auto 14px;display:block";
      play.onclick = function () { speak(v.en); };
      run.appendChild(play);
      var inp = el("input", "inp"); inp.placeholder = "Введите услышанное слово…";
      inp.style.cssText = "margin:0 auto;display:block";
      var fb = el("div", "feedback"); fb.style.textAlign = "center";
      var submit = el("button", "btn primary", "Проверить"); submit.style.cssText = "margin:14px auto 0;display:block";
      function check() {
        var ok = norm(inp.value) === norm(v.en);
        inp.classList.add(ok ? "right" : "wrong"); inp.disabled = true; submit.disabled = true;
        if (ok) score++;
        fb.className = "feedback " + (ok ? "ok" : "bad");
        fb.innerHTML = ok ? '✓ Верно · ' + esc(v.ru) : '✗ Слово: <b>' + esc(v.en) + '</b> — ' + esc(v.ru);
        var nx = el("button", "btn no-print", i < deck.length - 1 ? "Дальше →" : "Результат");
        nx.style.cssText = "margin:12px auto 0;display:block";
        nx.onclick = function () { if (i < deck.length - 1) { i++; render(); } else finish(); };
        run.appendChild(nx);
      }
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
      submit.onclick = check;
      run.appendChild(inp); run.appendChild(submit); run.appendChild(fb);
      setTimeout(function () { speak(v.en); inp.focus(); }, 120);
    }
    function finish() {
      run.innerHTML = '<div class="result"><div class="score">' + score + '/' + deck.length + '</div><p>Диктант завершён.</p></div>';
      var again = el("button", "btn primary no-print", "Ещё раз"); again.style.cssText = "margin:10px auto 0;display:block";
      again.onclick = function () { body.innerHTML = ""; tabListen(body, L); };
      run.appendChild(again);
    }
    render();
  }

  /* ---------- subtab: homework ---------- */
  function tabHomework(body, L) {
    var hw = L.homework || [];
    if (!hw.length) { body.appendChild(el("div", "empty", "В этом уроке нет домашнего задания.")); return; }
    var card = el("div", "card");
    card.appendChild(el("h3", null, "Домашнее задание"));
    hw.forEach(function (h, i) {
      var item = el("div", "hw-item");
      item.innerHTML = '<div class="hw-q"><b>' + (i + 1) + '.</b> ' + esc(h.q) + '</div>';
      var inp = el("input", "inp no-print"); inp.placeholder = "Напишите ответ…";
      item.appendChild(inp);
      item.appendChild(el("div", "hw-a", '<b>Ответ:</b> ' + esc(h.a)));
      card.appendChild(item);
    });
    var tools = el("div", "vocab-tools no-print");
    var reveal = el("button", "btn", "Показать ответы");
    reveal.onclick = function () {
      var on = card.classList.toggle("reveal");
      reveal.textContent = on ? "Скрыть ответы" : "Показать ответы";
    };
    var doneBtn = el("button", "btn " + (prog(current.week, current.day).hw ? "" : "primary"),
      prog(current.week, current.day).hw ? "✓ Домашка сдана" : "Отметить как сдано");
    doneBtn.onclick = function () {
      var p = prog(current.week, current.day); p.hw = !p.hw; save();
      doneBtn.textContent = p.hw ? "✓ Домашка сдана" : "Отметить как сдано";
      doneBtn.classList.toggle("primary", !p.hw);
      toast(p.hw ? "Домашка отмечена" : "Снято");
    };
    tools.appendChild(reveal); tools.appendChild(doneBtn);
    card.appendChild(tools);
    body.appendChild(card);
  }

  /* ============================================================
     SPACED REVIEW — mixes words from finished lessons so old
     weeks aren't forgotten. Prioritises "learning" words.
     ============================================================ */
  function reviewDeck() {
    var pool = [];
    WEEKS.forEach(function (wk) {
      (wk.lessons || []).forEach(function (ls) {
        var finished = prog(wk.week, ls.day).lesson;
        (ls.vocab || []).forEach(function (v) {
          var k = norm(v.en);
          var status = state.words[k];
          if (finished || status) pool.push({ v: v, status: status });
        });
      });
    });
    // weight: learning first, then unknown, drop fully-known unless deck small
    var learning = pool.filter(function (p) { return p.status === "learning"; });
    var unseen = pool.filter(function (p) { return !p.status; });
    var known = pool.filter(function (p) { return p.status === "known"; });
    var deck = shuffle(learning).concat(shuffle(unseen)).concat(shuffle(known));
    var seen = {}, out = [];
    deck.forEach(function (p) { var k = norm(p.v.en); if (!seen[k]) { seen[k] = 1; out.push(p.v); } });
    return out.slice(0, 25);
  }

  function renderReview() {
    view.innerHTML = "";
    var head = el("div", "page-head");
    head.innerHTML = '<div class="eyebrow">Интервальное повторение</div>' +
      '<h2>Повторение слов</h2>' +
      '<p>Смесь слов из пройденных уроков — чтобы не забыть выученное.</p>';
    view.appendChild(head);
    var deck = reviewDeck();
    if (!deck.length) {
      view.appendChild(el("div", "empty",
        '<div class="big">🌱</div>Пока нечего повторять.<br>Пройдите урок или отметьте слова «в работе».'));
      return;
    }
    var tabs = el("div", "subtabs");
    var t1 = el("button", "subtab active", "Карточки");
    var t2 = el("button", "subtab", "Тест");
    tabs.appendChild(t1); tabs.appendChild(t2);
    view.appendChild(tabs);
    var body = el("div"); view.appendChild(body);
    function showFlash() { t1.classList.add("active"); t2.classList.remove("active"); body.innerHTML = ""; runFlashcards(body, deck, "Повторение"); }
    function showQuiz() { t2.classList.add("active"); t1.classList.remove("active"); body.innerHTML = ""; runRun(body, buildQuiz(deck, Math.min(12, deck.length)), "Повторение"); }
    t1.onclick = showFlash; t2.onclick = showQuiz;
    showFlash();
  }

  /* ============================================================
     SEARCH overlay (whole-course)
     ============================================================ */
  var searchIndex = Object.keys(DICT).map(function (k) {
    var d = DICT[k]; return { k: k, ru: norm(d.ru), uz: norm(d.uz), d: d };
  });
  function openSearch() {
    $("#searchOverlay").classList.add("open");
    var inp = $("#searchInput"); inp.value = ""; renderSearch("");
    setTimeout(function () { inp.focus(); }, 30);
  }
  function renderSearch(q) {
    q = norm(q);
    var res = $("#searchResults"); res.innerHTML = "";
    var list = !q ? searchIndex.slice(0, 30)
      : searchIndex.filter(function (e) {
          return e.k.indexOf(q) === 0 || e.k.indexOf(q) > -1 || e.ru.indexOf(q) > -1 || e.uz.indexOf(q) > -1;
        }).sort(function (a, b) { return a.k.indexOf(q) - b.k.indexOf(q); }).slice(0, 40);
    if (!list.length) { res.appendChild(el("div", "empty", "Ничего не найдено.")); return; }
    list.forEach(function (e) {
      var d = e.d;
      var row = el("div", "res");
      row.innerHTML =
        '<div><div class="en">' + esc(d.en) + '</div>' +
        '<div class="meta">' + esc(d.pron || "") + (d.pos ? " · " + esc(d.pos) : "") + '</div></div>' +
        '<div class="tr">' + esc(d.ru || "") + (d.uz ? '<br><span class="meta">' + esc(d.uz) + '</span>' : '') + '</div>';
      row.style.cursor = "pointer";
      row.onclick = function () { speak(d.en); };
      res.appendChild(row);
    });
  }
  $("#searchBtn").onclick = openSearch;
  $("#searchClose").onclick = function () { $("#searchOverlay").classList.remove("open"); };
  $("#searchOverlay").onclick = function (e) { if (e.target.id === "searchOverlay") e.currentTarget.classList.remove("open"); };
  $("#searchInput").oninput = function () { renderSearch(this.value); };
  document.addEventListener("keydown", function (e) {
    if ((e.key === "/" ) && !/input|select|textarea/i.test((document.activeElement || {}).tagName || "")) { e.preventDefault(); openSearch(); }
    if (e.key === "Escape") { $("#searchOverlay").classList.remove("open"); pop.classList.remove("open"); }
  });

  /* ---------- sidebar links + mobile ---------- */
  document.querySelectorAll("[data-go]").forEach(function (b) {
    b.onclick = function () { (b.dataset.go === "home" ? goHome : goReview)(); closeSidebarMobile(); };
  });
  function closeSidebarMobile() { $("#sidebar").classList.remove("open"); $("#scrim").classList.remove("open"); }
  $("#menuBtn").onclick = function () { $("#sidebar").classList.toggle("open"); $("#scrim").classList.toggle("open"); };
  $("#scrim").onclick = closeSidebarMobile;
  window.addEventListener("scroll", function () { pop.classList.remove("open"); }, { passive: true });

  /* ---------- boot ---------- */
  buildWeekNav();
  goHome();
})();
