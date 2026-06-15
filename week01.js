/* ============================================================
   weeks/week01.js — Week 1 · Foundations
   To make a new week: copy this file, change the numbers and
   content, save as weeks/week02.js. Never touch index.html.
   ============================================================ */
registerWeek({
  week: 1,
  title: "Основы",
  vocabTheme: "Приветствия, страны, предметы в классе",

  lessons: [
    /* ===================== DAY 1 ===================== */
    {
      day: 1,
      grammarTitle: "Глагол to be — am / is / are (утверждение)",
      grammar:
        "Глагол <b>to be</b> переводится как «быть» или «являться». В русском " +
        "языке мы часто его не произносим («Я студент»), но в английском он " +
        "<b>обязателен</b>. У него три формы в настоящем времени:<br><br>" +
        "I → <b>am</b><br>He / She / It → <b>is</b><br>We / You / They → <b>are</b>" +
        "<br><br>В речи обычно используют короткую форму: " +
        "<b>I'm</b>, <b>he's</b>, <b>she's</b>, <b>we're</b>, <b>they're</b>.<br>" +
        "Пример: <b>I am</b> a student. = <b>I'm</b> a student. (Я студент.)",
      examples: [
        { en: "I am a student.",   ru: "Я студент." },
        { en: "She is a teacher.", ru: "Она учительница." },
        { en: "We are friends.",   ru: "Мы друзья." },
        { en: "He is happy.",      ru: "Он счастлив." }
      ],
      exercises: [
        { type: "choice", q: "I ___ a student.",  options: ["am", "is", "are"], a: "am" },
        { type: "choice", q: "She ___ a teacher.", options: ["am", "is", "are"], a: "is" },
        { type: "fill",   q: "They ___ friends.",  a: "are" },
        { type: "fill",   q: "He ___ happy.",      a: "is" },
        { type: "translate", q: "Я учитель.",      a: "I am a teacher." },
        { type: "order",  q: "are we friends",     a: "We are friends." }
      ],
      vocab: [
        { en: "hello",   pron: "хэлло́у",  ipa: "/həˈloʊ/",   ru: "привет, здравствуйте", uz: "salom",   pos: "interj", example: "Hello! How are you?" },
        { en: "hi",      pron: "ха́й",     ipa: "/haɪ/",      ru: "привет",               uz: "salom",   pos: "interj", example: "Hi, I am Tom." },
        { en: "goodbye", pron: "гудба́й",  ipa: "/ɡʊdˈbaɪ/",  ru: "до свидания",          uz: "xayr",    pos: "interj", example: "Goodbye, see you soon." },
        { en: "yes",     pron: "йес",      ipa: "/jes/",      ru: "да",                   uz: "ha",      pos: "particle", example: "Yes, I am a student." },
        { en: "no",      pron: "но́у",     ipa: "/noʊ/",      ru: "нет",                  uz: "yo'q",    pos: "particle", example: "No, she is a doctor." },
        { en: "please",  pron: "плиз",     ipa: "/pliːz/",    ru: "пожалуйста",           uz: "iltimos", pos: "adv",    example: "Sit down, please." },
        { en: "thanks",  pron: "сэнкс",    ipa: "/θæŋks/",    ru: "спасибо",              uz: "rahmat",  pos: "interj", example: "Thanks a lot." },
        { en: "name",    pron: "нэйм",     ipa: "/neɪm/",     ru: "имя",                  uz: "ism",     pos: "noun",   example: "My name is Anna." },
        { en: "student", pron: "стью́дэнт", ipa: "/ˈstuːdənt/", ru: "студент, ученик",     uz: "talaba",  pos: "noun",   example: "He is a student." },
        { en: "teacher", pron: "ти́чэр",   ipa: "/ˈtiːtʃər/", ru: "учитель",              uz: "o'qituvchi", pos: "noun", example: "She is a teacher." },
        { en: "friend",  pron: "фрэнд",    ipa: "/frend/",    ru: "друг",                 uz: "do'st",   pos: "noun",   example: "You are my friend." },
        { en: "boy",     pron: "бой",      ipa: "/bɔɪ/",      ru: "мальчик",              uz: "o'g'il bola", pos: "noun", example: "The boy is happy." },
        { en: "girl",    pron: "гёрл",     ipa: "/ɡɜːrl/",    ru: "девочка",              uz: "qiz",     pos: "noun",   example: "The girl is young." },
        { en: "man",     pron: "мэн",      ipa: "/mæn/",      ru: "мужчина",              uz: "erkak",   pos: "noun",   example: "The man is tall." },
        { en: "woman",   pron: "ву́мэн",   ipa: "/ˈwʊmən/",   ru: "женщина",              uz: "ayol",    pos: "noun",   example: "The woman is a doctor." },
        { en: "happy",   pron: "хэ́пи",    ipa: "/ˈhæpi/",    ru: "счастливый",           uz: "baxtli",  pos: "adj",    example: "I am happy today." },
        { en: "fine",    pron: "файн",     ipa: "/faɪn/",     ru: "хорошо, в порядке",    uz: "yaxshi",  pos: "adj",    example: "I am fine, thanks." },
        { en: "good",    pron: "гуд",      ipa: "/ɡʊd/",      ru: "хороший",              uz: "yaxshi",  pos: "adj",    example: "Good morning!" },
        { en: "morning", pron: "мо́рнинг", ipa: "/ˈmɔːrnɪŋ/", ru: "утро",                 uz: "ertalab", pos: "noun",   example: "Good morning, class." },
        { en: "nice",    pron: "найс",     ipa: "/naɪs/",     ru: "приятный, милый",      uz: "yoqimli", pos: "adj",    example: "Nice to meet you." }
      ],
      homework: [
        { q: "Переведите: Я студент.",        a: "I am a student." },
        { q: "Переведите: Она учительница.",  a: "She is a teacher." },
        { q: "Переведите: Мы друзья.",        a: "We are friends." },
        { q: "Вставьте форму to be: He ___ happy.", a: "is" }
      ]
    },

    /* ===================== DAY 2 ===================== */
    {
      day: 2,
      grammarTitle: "To be — отрицание и вопрос",
      grammar:
        "Чтобы сказать «не», добавляем <b>not</b> после to be:<br>" +
        "I am <b>not</b> · He is <b>not</b> (isn't) · They are <b>not</b> (aren't).<br>" +
        "Пример: She <b>is not</b> a teacher. = She <b>isn't</b> a teacher.<br><br>" +
        "Чтобы задать вопрос, ставим to be <b>в начало</b>:<br>" +
        "<b>Are</b> you a student? — Yes, I am. / No, I'm not.<br>" +
        "<b>Is</b> he from Russia? — Yes, he is. / No, he isn't.",
      examples: [
        { en: "I am not a teacher.",   ru: "Я не учитель." },
        { en: "She isn't from England.", ru: "Она не из Англии." },
        { en: "Are you a student?",    ru: "Ты студент?" },
        { en: "Is he from Russia?",    ru: "Он из России?" }
      ],
      exercises: [
        { type: "choice", q: "___ you from England?", options: ["Am", "Is", "Are"], a: "Are" },
        { type: "fill",   q: "She is ___ a teacher. (не)", a: "not" },
        { type: "translate", q: "Я не из Америки.", a: "I am not from America." },
        { type: "translate", q: "Он из России?",    a: "Is he from Russia?" },
        { type: "order",  q: "you are a student",    a: "Are you a student?" },
        { type: "match",  pairs: [
            { en: "country",  ru: "страна" },
            { en: "city",     ru: "город" },
            { en: "capital",  ru: "столица" },
            { en: "language", ru: "язык" }
        ] }
      ],
      vocab: [
        { en: "country",  pron: "ка́нтри",  ipa: "/ˈkʌntri/",  ru: "страна",         uz: "mamlakat", pos: "noun", example: "Russia is a big country." },
        { en: "city",     pron: "си́ти",    ipa: "/ˈsɪti/",    ru: "город",          uz: "shahar",   pos: "noun", example: "London is a city." },
        { en: "world",    pron: "уёрлд",    ipa: "/wɜːrld/",   ru: "мир",            uz: "dunyo",    pos: "noun", example: "The world is big." },
        { en: "England",  pron: "и́нглэнд", ipa: "/ˈɪŋɡlənd/", ru: "Англия",         uz: "Angliya",  pos: "noun", example: "She is from England." },
        { en: "Russia",   pron: "ра́шэ",    ipa: "/ˈrʌʃə/",    ru: "Россия",         uz: "Rossiya",  pos: "noun", example: "I am from Russia." },
        { en: "America",  pron: "эмэ́рикэ", ipa: "/əˈmerɪkə/", ru: "Америка",        uz: "Amerika",  pos: "noun", example: "He is from America." },
        { en: "English",  pron: "и́нглиш",  ipa: "/ˈɪŋɡlɪʃ/",  ru: "английский",     uz: "inglizcha", pos: "adj", example: "I speak English." },
        { en: "Russian",  pron: "ра́шн",    ipa: "/ˈrʌʃən/",   ru: "русский",        uz: "ruscha",   pos: "adj",  example: "He is Russian." },
        { en: "American", pron: "эмэ́рикэн", ipa: "/əˈmerɪkən/", ru: "американский, американец", uz: "amerikalik", pos: "adj", example: "She is American." },
        { en: "from",     pron: "фром",     ipa: "/frɒm/",     ru: "из",             uz: "-dan",     pos: "prep", example: "I am from Moscow." },
        { en: "here",     pron: "хи́э",     ipa: "/hɪr/",      ru: "здесь",          uz: "bu yerda", pos: "adv",  example: "I am here." },
        { en: "there",    pron: "зэ́э",     ipa: "/ðer/",      ru: "там",            uz: "u yerda",  pos: "adv",  example: "She is there." },
        { en: "big",      pron: "биг",      ipa: "/bɪɡ/",      ru: "большой",        uz: "katta",    pos: "adj",  example: "Russia is big." },
        { en: "small",    pron: "смол",     ipa: "/smɔːl/",    ru: "маленький",      uz: "kichik",   pos: "adj",  example: "The city is small." },
        { en: "new",      pron: "нью",      ipa: "/nuː/",      ru: "новый",          uz: "yangi",    pos: "adj",  example: "This is a new car." },
        { en: "old",      pron: "о́улд",    ipa: "/oʊld/",     ru: "старый",         uz: "eski",     pos: "adj",  example: "The man is old." },
        { en: "capital",  pron: "кэ́питл",  ipa: "/ˈkæpɪtl/",  ru: "столица",        uz: "poytaxt",  pos: "noun", example: "Moscow is the capital." },
        { en: "flag",     pron: "флэг",     ipa: "/flæɡ/",     ru: "флаг",           uz: "bayroq",   pos: "noun", example: "The flag is red." },
        { en: "people",   pron: "пи́пл",    ipa: "/ˈpiːpl/",   ru: "люди",           uz: "odamlar",  pos: "noun", example: "The people are friendly." },
        { en: "language", pron: "лэ́нгвидж", ipa: "/ˈlæŋɡwɪdʒ/", ru: "язык",         uz: "til",      pos: "noun", example: "English is a language." }
      ],
      homework: [
        { q: "Переведите: Я не из Англии.",   a: "I am not from England." },
        { q: "Переведите: Ты студент?",        a: "Are you a student?" },
        { q: "Сделайте отрицание: She is a teacher.", a: "She is not a teacher." },
        { q: "Переведите: Москва — столица.",  a: "Moscow is the capital." }
      ]
    },

    /* ===================== DAY 3 ===================== */
    {
      day: 3,
      grammarTitle: "Артикли a / an и указатели this / that",
      grammar:
        "Перед одним предметом ставится артикль <b>a</b>:<br>" +
        "<b>a</b> pen, <b>a</b> book, <b>a</b> desk.<br>" +
        "Если слово начинается с гласного звука (a, e, i, o, u), пишем <b>an</b>:<br>" +
        "<b>an</b> apple, <b>an</b> eraser, <b>an</b> English book.<br><br>" +
        "<b>this</b> = «этот» (предмет рядом), <b>that</b> = «тот» (предмет дальше).<br>" +
        "Пример: <b>This</b> is a pen. <b>That</b> is a board.",
      examples: [
        { en: "This is a pen.",       ru: "Это ручка." },
        { en: "That is a board.",     ru: "То — доска." },
        { en: "It is an old book.",   ru: "Это старая книга." },
        { en: "Open the door, please.", ru: "Откройте дверь, пожалуйста." }
      ],
      exercises: [
        { type: "choice", q: "It is ___ eraser.", options: ["a", "an"], a: "an" },
        { type: "choice", q: "This is ___ desk.",  options: ["a", "an"], a: "a" },
        { type: "fill",   q: "That is ___ old book.", a: "an" },
        { type: "translate", q: "Это ручка.",      a: "This is a pen." },
        { type: "order",  q: "is a that chair",     a: "That is a chair." },
        { type: "match",  pairs: [
            { en: "door",   ru: "дверь" },
            { en: "window", ru: "окно" },
            { en: "book",   ru: "книга" },
            { en: "chair",  ru: "стул" }
        ] }
      ],
      vocab: [
        { en: "classroom", pron: "кла́срум", ipa: "/ˈklɑːsruːm/", ru: "класс, кабинет", uz: "sinfxona", pos: "noun", example: "The classroom is big." },
        { en: "desk",     pron: "дэск",     ipa: "/desk/",     ru: "парта, стол",    uz: "parta",    pos: "noun", example: "This is my desk." },
        { en: "chair",    pron: "чэ́э",     ipa: "/tʃer/",     ru: "стул",           uz: "stul",     pos: "noun", example: "The chair is new." },
        { en: "table",    pron: "тэ́йбл",   ipa: "/ˈteɪbl/",   ru: "стол",           uz: "stol",     pos: "noun", example: "Put the book on the table." },
        { en: "book",     pron: "бук",      ipa: "/bʊk/",      ru: "книга",          uz: "kitob",    pos: "noun", example: "This is an English book." },
        { en: "pen",      pron: "пэн",      ipa: "/pen/",      ru: "ручка",          uz: "ruchka",   pos: "noun", example: "I have a pen." },
        { en: "pencil",   pron: "пэ́нсл",   ipa: "/ˈpensl/",   ru: "карандаш",       uz: "qalam",    pos: "noun", example: "It is a red pencil." },
        { en: "notebook", pron: "но́утбук", ipa: "/ˈnoʊtbʊk/", ru: "тетрадь",        uz: "daftar",   pos: "noun", example: "Open your notebook." },
        { en: "bag",      pron: "бэг",      ipa: "/bæɡ/",      ru: "сумка, рюкзак",  uz: "sumka",    pos: "noun", example: "My bag is black." },
        { en: "board",    pron: "бо́рд",    ipa: "/bɔːrd/",    ru: "доска",          uz: "doska",    pos: "noun", example: "Look at the board." },
        { en: "door",     pron: "до́р",     ipa: "/dɔːr/",     ru: "дверь",          uz: "eshik",    pos: "noun", example: "Close the door, please." },
        { en: "window",   pron: "уи́ндоу",  ipa: "/ˈwɪndoʊ/",  ru: "окно",           uz: "deraza",   pos: "noun", example: "Open the window." },
        { en: "ruler",    pron: "ру́лэр",   ipa: "/ˈruːlər/",  ru: "линейка",        uz: "chizg'ich", pos: "noun", example: "This is a ruler." },
        { en: "eraser",   pron: "ирэ́йсэр", ipa: "/ɪˈreɪsər/", ru: "ластик",         uz: "o'chirg'ich", pos: "noun", example: "I need an eraser." },
        { en: "picture",  pron: "пи́кчэр",  ipa: "/ˈpɪktʃər/", ru: "картинка",       uz: "rasm",     pos: "noun", example: "Look at the picture." },
        { en: "computer", pron: "кэмпью́тэр", ipa: "/kəmˈpjuːtər/", ru: "компьютер", uz: "kompyuter", pos: "noun", example: "The computer is new." },
        { en: "wall",     pron: "уо́л",     ipa: "/wɔːl/",     ru: "стена",          uz: "devor",    pos: "noun", example: "The map is on the wall." },
        { en: "floor",    pron: "фло́р",    ipa: "/flɔːr/",    ru: "пол",            uz: "pol",      pos: "noun", example: "The bag is on the floor." },
        { en: "clock",    pron: "клок",     ipa: "/klɒk/",     ru: "часы (настенные)", uz: "soat",   pos: "noun", example: "The clock is on the wall." },
        { en: "map",      pron: "мэп",      ipa: "/mæp/",      ru: "карта",          uz: "xarita",   pos: "noun", example: "This is a map of the world." }
      ],
      homework: [
        { q: "Вставьте a или an: ___ eraser.", a: "an" },
        { q: "Вставьте a или an: ___ desk.",   a: "a" },
        { q: "Переведите: Это книга.",          a: "This is a book." },
        { q: "Переведите: То — доска.",         a: "That is a board." }
      ]
    },

    /* ===================== DAY 4 ===================== */
    {
      day: 4,
      grammarTitle: "Множественное число и these / those",
      grammar:
        "Чтобы сказать о нескольких предметах, добавляем <b>-s</b>:<br>" +
        "pen → pen<b>s</b>, book → book<b>s</b>, girl → girl<b>s</b>.<br>" +
        "После s, ss, sh, ch, x, o добавляем <b>-es</b>:<br>" +
        "box → box<b>es</b>, watch → watch<b>es</b>.<br><br>" +
        "Указатели во множественном числе:<br>" +
        "<b>this → these</b> (эти, рядом) · <b>that → those</b> (те, дальше).<br>" +
        "Пример: <b>These</b> are pens. <b>Those</b> are books.",
      examples: [
        { en: "These are pens.",      ru: "Это ручки." },
        { en: "Those are books.",     ru: "То — книги." },
        { en: "I have three pencils.", ru: "У меня три карандаша." },
        { en: "There are two boxes.", ru: "Здесь две коробки." }
      ],
      exercises: [
        { type: "fill",   q: "one book, two ___", a: "books" },
        { type: "fill",   q: "one box, three ___", a: "boxes" },
        { type: "choice", q: "___ are pens.", options: ["This", "These", "That"], a: "These" },
        { type: "translate", q: "Это ручки.", a: "These are pens." },
        { type: "order",  q: "are those books",  a: "Those are books." },
        { type: "match",  pairs: [
            { en: "one",   ru: "один" },
            { en: "three", ru: "три" },
            { en: "five",  ru: "пять" },
            { en: "ten",   ru: "десять" }
        ] }
      ],
      vocab: [
        { en: "one",      pron: "уа́н",    ipa: "/wʌn/",     ru: "один",          uz: "bir",    pos: "num",  example: "I have one pen." },
        { en: "two",      pron: "ту",      ipa: "/tuː/",     ru: "два",           uz: "ikki",   pos: "num",  example: "Two books are on the desk." },
        { en: "three",    pron: "сри",     ipa: "/θriː/",    ru: "три",           uz: "uch",    pos: "num",  example: "There are three chairs." },
        { en: "four",     pron: "фор",     ipa: "/fɔːr/",    ru: "четыре",        uz: "to'rt",  pos: "num",  example: "Four windows are open." },
        { en: "five",     pron: "файв",    ipa: "/faɪv/",    ru: "пять",          uz: "besh",   pos: "num",  example: "I have five pencils." },
        { en: "six",      pron: "сикс",    ipa: "/sɪks/",    ru: "шесть",         uz: "olti",   pos: "num",  example: "Six students are here." },
        { en: "seven",    pron: "сэ́вэн",  ipa: "/ˈsevn/",   ru: "семь",          uz: "yetti",  pos: "num",  example: "Seven days in a week." },
        { en: "eight",    pron: "эйт",     ipa: "/eɪt/",     ru: "восемь",        uz: "sakkiz", pos: "num",  example: "Eight pens are red." },
        { en: "nine",     pron: "найн",    ipa: "/naɪn/",    ru: "девять",        uz: "to'qqiz", pos: "num", example: "Nine books are new." },
        { en: "ten",      pron: "тэн",     ipa: "/ten/",     ru: "десять",        uz: "o'n",    pos: "num",  example: "Ten chairs are in the room." },
        { en: "number",   pron: "на́мбэр", ipa: "/ˈnʌmbər/", ru: "число, номер",  uz: "raqam",  pos: "noun", example: "What is your number?" },
        { en: "thing",    pron: "синг",    ipa: "/θɪŋ/",     ru: "вещь",          uz: "narsa",  pos: "noun", example: "What is this thing?" },
        { en: "box",      pron: "бокс",    ipa: "/bɒks/",    ru: "коробка",       uz: "quti",   pos: "noun", example: "The box is on the floor." },
        { en: "key",      pron: "ки",      ipa: "/kiː/",     ru: "ключ",          uz: "kalit",  pos: "noun", example: "This is my key." },
        { en: "phone",    pron: "фо́ун",   ipa: "/foʊn/",    ru: "телефон",       uz: "telefon", pos: "noun", example: "My phone is new." },
        { en: "paper",    pron: "пэ́йпэр", ipa: "/ˈpeɪpər/", ru: "бумага",        uz: "qog'oz", pos: "noun", example: "I need some paper." },
        { en: "word",     pron: "уёрд",    ipa: "/wɜːrd/",   ru: "слово",         uz: "so'z",   pos: "noun", example: "This is a new word." },
        { en: "question", pron: "кве́счэн", ipa: "/ˈkwestʃən/", ru: "вопрос",     uz: "savol",  pos: "noun", example: "I have a question." },
        { en: "answer",   pron: "а́нсэр",  ipa: "/ˈænsər/",  ru: "ответ",         uz: "javob",  pos: "noun", example: "The answer is yes." },
        { en: "room",     pron: "рум",     ipa: "/ruːm/",    ru: "комната",       uz: "xona",   pos: "noun", example: "The room is big." }
      ],
      homework: [
        { q: "Образуйте мн. число: pen → ___", a: "pens" },
        { q: "Образуйте мн. число: box → ___", a: "boxes" },
        { q: "Переведите: Это книги.",          a: "These are books." },
        { q: "Переведите: У меня пять ручек.",   a: "I have five pens." }
      ]
    },

    /* ===================== DAY 5 ===================== */
    {
      day: 5,
      grammarTitle: "Личные местоимения + повторение to be",
      grammar:
        "Местоимения заменяют имя человека или название предмета:<br><br>" +
        "<b>I</b> — я · <b>you</b> — ты/вы · <b>he</b> — он · <b>she</b> — она · " +
        "<b>it</b> — оно (предмет/животное) · <b>we</b> — мы · <b>they</b> — они.<br><br>" +
        "Каждое местоимение со своей формой to be:<br>" +
        "I <b>am</b> · he/she/it <b>is</b> · we/you/they <b>are</b>.<br>" +
        "Пример: <b>She is</b> my sister. <b>They are</b> my friends.",
      examples: [
        { en: "He is my brother.",   ru: "Он мой брат." },
        { en: "She is very happy.",  ru: "Она очень счастлива." },
        { en: "They are my family.", ru: "Они моя семья." },
        { en: "This is my mother.",  ru: "Это моя мама." }
      ],
      exercises: [
        { type: "choice", q: "___ is my sister.", options: ["He", "She", "They"], a: "She" },
        { type: "fill",   q: "We ___ friends.",   a: "are" },
        { type: "translate", q: "Он мой брат.",   a: "He is my brother." },
        { type: "translate", q: "Они моя семья.", a: "They are my family." },
        { type: "order",  q: "is my she mother",  a: "She is my mother." },
        { type: "match",  pairs: [
            { en: "mother",  ru: "мама" },
            { en: "father",  ru: "папа" },
            { en: "sister",  ru: "сестра" },
            { en: "brother", ru: "брат" }
        ] }
      ],
      vocab: [
        { en: "I",       pron: "ай",      ipa: "/aɪ/",      ru: "я",             uz: "men",          pos: "pron", example: "I am a student." },
        { en: "you",     pron: "ю",       ipa: "/juː/",     ru: "ты, вы",        uz: "sen, siz",     pos: "pron", example: "You are my friend." },
        { en: "he",      pron: "хи",      ipa: "/hiː/",     ru: "он",            uz: "u (erkak)",    pos: "pron", example: "He is a teacher." },
        { en: "she",     pron: "ши",      ipa: "/ʃiː/",     ru: "она",           uz: "u (ayol)",     pos: "pron", example: "She is happy." },
        { en: "it",      pron: "ит",      ipa: "/ɪt/",      ru: "оно, это",      uz: "u (narsa)",    pos: "pron", example: "It is a book." },
        { en: "we",      pron: "уи",      ipa: "/wiː/",     ru: "мы",            uz: "biz",          pos: "pron", example: "We are students." },
        { en: "they",    pron: "зэй",     ipa: "/ðeɪ/",     ru: "они",           uz: "ular",         pos: "pron", example: "They are friends." },
        { en: "mother",  pron: "ма́зэр",  ipa: "/ˈmʌðər/",  ru: "мама",          uz: "ona",          pos: "noun", example: "My mother is a doctor." },
        { en: "father",  pron: "фа́зэр",  ipa: "/ˈfɑːðər/", ru: "папа",          uz: "ota",          pos: "noun", example: "His father is a teacher." },
        { en: "sister",  pron: "си́стэр", ipa: "/ˈsɪstər/", ru: "сестра",        uz: "singil, opa",  pos: "noun", example: "I have one sister." },
        { en: "brother", pron: "бра́зэр", ipa: "/ˈbrʌðər/", ru: "брат",          uz: "aka, uka",     pos: "noun", example: "Her brother is here." },
        { en: "family",  pron: "фэ́мили", ipa: "/ˈfæməli/", ru: "семья",         uz: "oila",         pos: "noun", example: "My family is big." },
        { en: "baby",    pron: "бэ́йби",  ipa: "/ˈbeɪbi/",  ru: "малыш",         uz: "chaqaloq",     pos: "noun", example: "The baby is happy." },
        { en: "child",   pron: "чайлд",   ipa: "/tʃaɪld/",  ru: "ребёнок",       uz: "bola",         pos: "noun", example: "The child is young." },
        { en: "young",   pron: "янг",     ipa: "/jʌŋ/",     ru: "молодой",       uz: "yosh",         pos: "adj",  example: "She is young." },
        { en: "tall",    pron: "тол",     ipa: "/tɔːl/",    ru: "высокий",       uz: "baland bo'yli", pos: "adj", example: "He is tall." },
        { en: "short",   pron: "шорт",    ipa: "/ʃɔːrt/",   ru: "низкий, короткий", uz: "past, kalta", pos: "adj", example: "The boy is short." },
        { en: "this",    pron: "зис",     ipa: "/ðɪs/",     ru: "этот, это",     uz: "bu",           pos: "pron", example: "This is my mother." },
        { en: "that",    pron: "зэт",     ipa: "/ðæt/",     ru: "тот, то",       uz: "u, o'sha",     pos: "pron", example: "That is my father." },
        { en: "very",    pron: "вэ́ри",   ipa: "/ˈveri/",   ru: "очень",         uz: "juda",         pos: "adv",  example: "She is very happy." }
      ],
      homework: [
        { q: "Переведите: Она моя сестра.",   a: "She is my sister." },
        { q: "Переведите: Они мои друзья.",   a: "They are my friends." },
        { q: "Вставьте местоимение (она): ___ is happy.", a: "She" },
        { q: "Переведите: Моя семья большая.", a: "My family is big." }
      ]
    }
  ]
});
