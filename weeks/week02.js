registerWeek({
  week: 2,
  title: "Present Simple",
  vocabTheme: "Распорядок дня и часто употребляемые глаголы",

  lessons: [
    /* ===================================================================
       DAY 1 — Present Simple: утверждение (I / you / we / they)
       =================================================================== */
    {
      day: 1,
      grammarTitle: "Present Simple — утверждение (I / you / we / they)",

      grammar:
        "<b>Present Simple</b> (настоящее простое время) описывает то, что " +
        "мы делаем <b>регулярно</b>, <b>обычно</b> или <b>всегда</b>: привычки, " +
        "распорядок дня, факты.<br><br>" +
        "Для <b>I, you, we, they</b> глагол стоит в обычной форме — " +
        "<b>ничего не меняется</b>:<br>" +
        "I <b>work</b>. — Я работаю.<br>" +
        "You <b>speak</b> English. — Ты говоришь по-английски.<br>" +
        "We <b>live</b> in Tashkent. — Мы живём в Ташкенте.<br>" +
        "They <b>play</b> football. — Они играют в футбол.<br><br>" +
        "Слова-подсказки этого времени: <b>every day</b> (каждый день), " +
        "<b>usually</b> (обычно), <b>always</b> (всегда), <b>often</b> (часто).",

      examples: [
        { en: "I work every day.",        ru: "Я работаю каждый день." },
        { en: "You speak English well.",  ru: "Ты хорошо говоришь по-английски." },
        { en: "We live in a big city.",   ru: "Мы живём в большом городе." },
        { en: "They like music.",         ru: "Они любят музыку." },
        { en: "I read books every evening.", ru: "Я читаю книги каждый вечер." }
      ],

      exercises: [
        { type: "choice",    q: "I ___ in Tashkent.",        options: ["live","lives","living"], a: "live" },
        { type: "choice",    q: "They ___ English.",         options: ["speaks","speak","speaking"], a: "speak" },
        { type: "fill",      q: "We ___ (play) football.",   a: "play" },
        { type: "fill",      q: "You ___ (read) a lot.",     a: "read" },
        { type: "translate", q: "Я работаю каждый день.",    a: "I work every day." },
        { type: "translate", q: "Мы любим музыку.",          a: "We like music." },
        { type: "order",     q: "every / I / water / drink / day", a: "I drink water every day." }
      ],

      vocab: [
        { en:"work",  pron:"уо́рк",  ipa:"/wɜːk/",   ru:"работать", uz:"ishlamoq", pos:"verb", example:"I work in an office." },
        { en:"live",  pron:"лив",    ipa:"/lɪv/",    ru:"жить",     uz:"yashamoq", pos:"verb", example:"They live in Tashkent." },
        { en:"like",  pron:"лайк",   ipa:"/laɪk/",   ru:"любить, нравиться", uz:"yoqtirmoq", pos:"verb", example:"I like tea." },
        { en:"want",  pron:"уо́нт",  ipa:"/wɒnt/",   ru:"хотеть",   uz:"xohlamoq", pos:"verb", example:"We want water." },
        { en:"need",  pron:"нид",    ipa:"/niːd/",   ru:"нуждаться, надо", uz:"kerak boʻlmoq", pos:"verb", example:"I need help." },
        { en:"eat",   pron:"ит",     ipa:"/iːt/",    ru:"есть, кушать", uz:"yemoq", pos:"verb", example:"They eat breakfast." },
        { en:"drink", pron:"дринк",  ipa:"/drɪŋk/",  ru:"пить",     uz:"ichmoq", pos:"verb", example:"I drink water." },
        { en:"read",  pron:"рид",    ipa:"/riːd/",   ru:"читать",   uz:"oʻqimoq", pos:"verb", example:"You read books." },
        { en:"write", pron:"райт",   ipa:"/raɪt/",   ru:"писать",   uz:"yozmoq", pos:"verb", example:"We write letters." },
        { en:"speak", pron:"спик",   ipa:"/spiːk/",  ru:"говорить", uz:"gapirmoq", pos:"verb", example:"I speak Russian." },
        { en:"play",  pron:"плэй",   ipa:"/pleɪ/",   ru:"играть",   uz:"oʻynamoq", pos:"verb", example:"They play football." },
        { en:"watch", pron:"уо́тч",  ipa:"/wɒtʃ/",   ru:"смотреть", uz:"tomosha qilmoq", pos:"verb", example:"We watch TV." },
        { en:"study", pron:"ста́ди", ipa:"/ˈstʌdi/", ru:"учиться, изучать", uz:"oʻrganmoq", pos:"verb", example:"I study English." },
        { en:"walk",  pron:"уо́к",   ipa:"/wɔːk/",   ru:"ходить пешком", uz:"yurmoq", pos:"verb", example:"They walk to school." },
        { en:"run",   pron:"ран",    ipa:"/rʌn/",    ru:"бегать",   uz:"yugurmoq", pos:"verb", example:"I run in the morning." },
        { en:"sleep", pron:"слип",   ipa:"/sliːp/",  ru:"спать",    uz:"uxlamoq", pos:"verb", example:"We sleep at night." },
        { en:"help",  pron:"хэлп",   ipa:"/help/",   ru:"помогать", uz:"yordam bermoq", pos:"verb", example:"You help me." },
        { en:"know",  pron:"но́у",   ipa:"/nəʊ/",    ru:"знать",    uz:"bilmoq", pos:"verb", example:"I know the answer." },
        { en:"see",   pron:"си",     ipa:"/siː/",    ru:"видеть",   uz:"koʻrmoq", pos:"verb", example:"They see a car." },
        { en:"go",    pron:"го́у",   ipa:"/ɡəʊ/",    ru:"идти, ехать", uz:"bormoq", pos:"verb", example:"We go to work." }
      ],

      homework: [
        { q: "Translate: Я живу в Ташкенте.",        a: "I live in Tashkent." },
        { q: "Translate: Они играют в футбол.",      a: "They play football." },
        { q: "Translate: Мы читаем книги.",          a: "We read books." },
        { q: "Translate: Ты говоришь по-английски.", a: "You speak English." }
      ]
    },

    /* ===================================================================
       DAY 2 — Present Simple: he / she / it (-s / -es)
       =================================================================== */
    {
      day: 2,
      grammarTitle: "Present Simple — he / she / it (окончание -s / -es)",

      grammar:
        "Когда подлежащее — это <b>he</b> (он), <b>she</b> (она) или " +
        "<b>it</b> (оно), к глаголу добавляется <b>-s</b>:<br>" +
        "I work → He <b>works</b>.<br>" +
        "I live → She <b>lives</b>.<br><br>" +
        "<b>Правила написания:</b><br>" +
        "• обычно просто <b>+s</b>: read → reads<br>" +
        "• после <b>-o, -ss, -sh, -ch, -x</b> добавляем <b>-es</b>: " +
        "go → go<b>es</b>, watch → watch<b>es</b><br>" +
        "• согласная + <b>-y</b>: -y меняется на <b>-ies</b>: " +
        "study → stud<b>ies</b><br><br>" +
        "<b>Запомни особые формы:</b> have → <b>has</b>, do → <b>does</b>, " +
        "go → <b>goes</b>.",

      examples: [
        { en: "He works in a shop.",      ru: "Он работает в магазине." },
        { en: "She studies English.",     ru: "Она изучает английский." },
        { en: "It goes fast.",            ru: "Оно (это) едет быстро." },
        { en: "My brother watches TV.",   ru: "Мой брат смотрит телевизор." },
        { en: "She has a car.",           ru: "У неё есть машина." }
      ],

      exercises: [
        { type: "choice",    q: "She ___ in a school.",   options: ["work","works","working"], a: "works" },
        { type: "choice",    q: "He ___ English.",        options: ["studys","studyes","studies"], a: "studies" },
        { type: "fill",      q: "He ___ (go) to work.",   a: "goes" },
        { type: "fill",      q: "She ___ (watch) TV.",    a: "watches" },
        { type: "translate", q: "Он живёт в Бухаре.",     a: "He lives in Bukhara." },
        { type: "translate", q: "Она читает книгу.",      a: "She reads a book." },
        { type: "order",     q: "a / she / car / has",    a: "She has a car." }
      ],

      vocab: [
        { en:"wake up", pron:"уэ́йк ап", ipa:"/weɪk ʌp/", ru:"просыпаться", uz:"uygʻonmoq", pos:"verb", example:"I wake up at seven." },
        { en:"get up",  pron:"гет ап",  ipa:"/ɡet ʌp/",  ru:"вставать (с постели)", uz:"oʻrnidan turmoq", pos:"verb", example:"She gets up early." },
        { en:"wash",    pron:"уо́ш",    ipa:"/wɒʃ/",     ru:"мыть, умываться", uz:"yuvmoq", pos:"verb", example:"He washes his face." },
        { en:"brush",   pron:"браш",    ipa:"/brʌʃ/",    ru:"чистить (щёткой)", uz:"tozalamoq", pos:"verb", example:"I brush my teeth." },
        { en:"dress",   pron:"дрес",    ipa:"/dres/",    ru:"одеваться", uz:"kiyinmoq", pos:"verb", example:"She dresses quickly." },
        { en:"breakfast", pron:"бре́кфэст", ipa:"/ˈbrekfəst/", ru:"завтрак", uz:"nonushta", pos:"noun", example:"We have breakfast." },
        { en:"lunch",   pron:"ланч",    ipa:"/lʌntʃ/",   ru:"обед",   uz:"tushlik", pos:"noun", example:"He eats lunch at one." },
        { en:"dinner",  pron:"ди́нэр",  ipa:"/ˈdɪnər/",  ru:"ужин",   uz:"kechki ovqat", pos:"noun", example:"They cook dinner." },
        { en:"leave",   pron:"лив",     ipa:"/liːv/",    ru:"уходить, покидать", uz:"ketmoq", pos:"verb", example:"She leaves home at eight." },
        { en:"arrive",  pron:"эра́йв",  ipa:"/əˈraɪv/",  ru:"прибывать, приходить", uz:"yetib kelmoq", pos:"verb", example:"He arrives at work." },
        { en:"start",   pron:"старт",   ipa:"/stɑːt/",   ru:"начинать(ся)", uz:"boshlamoq", pos:"verb", example:"Work starts at nine." },
        { en:"finish",  pron:"фи́ниш",  ipa:"/ˈfɪnɪʃ/",  ru:"заканчивать(ся)", uz:"tugatmoq", pos:"verb", example:"School finishes at three." },
        { en:"return",  pron:"рите́рн", ipa:"/rɪˈtɜːn/", ru:"возвращаться", uz:"qaytmoq", pos:"verb", example:"She returns home late." },
        { en:"relax",   pron:"рила́кс", ipa:"/rɪˈlæks/", ru:"отдыхать, расслабляться", uz:"dam olmoq", pos:"verb", example:"He relaxes in the evening." },
        { en:"cook",    pron:"кук",     ipa:"/kʊk/",     ru:"готовить (еду)", uz:"ovqat pishirmoq", pos:"verb", example:"My mother cooks well." },
        { en:"clean",   pron:"клин",    ipa:"/kliːn/",   ru:"убирать, чистить", uz:"tozalamoq", pos:"verb", example:"She cleans the room." },
        { en:"drive",   pron:"драйв",   ipa:"/draɪv/",   ru:"водить (машину)", uz:"haydamoq", pos:"verb", example:"He drives a car." },
        { en:"teach",   pron:"тич",     ipa:"/tiːtʃ/",   ru:"преподавать, учить", uz:"oʻrgatmoq", pos:"verb", example:"She teaches English." },
        { en:"sing",    pron:"син",     ipa:"/sɪŋ/",     ru:"петь",   uz:"kuylamoq", pos:"verb", example:"He sings a song." },
        { en:"dance",   pron:"данс",    ipa:"/dɑːns/",   ru:"танцевать", uz:"raqsga tushmoq", pos:"verb", example:"She dances every day." }
      ],

      homework: [
        { q: "Translate: Он встаёт рано.",          a: "He gets up early." },
        { q: "Translate: Она готовит ужин.",        a: "She cooks dinner." },
        { q: "Translate: Мой брат водит машину.",   a: "My brother drives a car." },
        { q: "Translate: Она преподаёт английский.", a: "She teaches English." }
      ]
    },

    /* ===================================================================
       DAY 3 — Present Simple: отрицание (don't / doesn't)
       =================================================================== */
    {
      day: 3,
      grammarTitle: "Present Simple — отрицание (don't / doesn't)",

      grammar:
        "Чтобы сказать «не делаю», в Present Simple используем " +
        "<b>do not</b> (do not = <b>don't</b>) и <b>does not</b> " +
        "(does not = <b>doesn't</b>) перед глаголом.<br><br>" +
        "Для <b>I, you, we, they</b> → <b>don't</b>:<br>" +
        "I <b>don't</b> like coffee. — Я не люблю кофе.<br>" +
        "They <b>don't</b> work here. — Они не работают здесь.<br><br>" +
        "Для <b>he, she, it</b> → <b>doesn't</b>:<br>" +
        "He <b>doesn't</b> speak French. — Он не говорит по-французски.<br><br>" +
        "<b>Важно:</b> после <b>doesn't</b> глагол стоит <b>без -s</b>! " +
        "Окончание -s «уходит» в doesn't:<br>" +
        "She works → She <b>doesn't work</b> (не worksработает).",

      examples: [
        { en: "I don't like coffee.",        ru: "Я не люблю кофе." },
        { en: "We don't watch TV.",          ru: "Мы не смотрим телевизор." },
        { en: "He doesn't speak French.",    ru: "Он не говорит по-французски." },
        { en: "She doesn't eat meat.",       ru: "Она не ест мясо." },
        { en: "They don't understand.",      ru: "Они не понимают." }
      ],

      exercises: [
        { type: "choice",    q: "I ___ like tea.",        options: ["don't","doesn't","not"], a: "don't" },
        { type: "choice",    q: "He ___ work here.",      options: ["don't","doesn't","not"], a: "doesn't" },
        { type: "fill",      q: "She ___ (not / eat) meat.", a: "doesn't eat" },
        { type: "fill",      q: "We ___ (not / understand).", a: "don't understand" },
        { type: "translate", q: "Я не люблю кофе.",        a: "I don't like coffee." },
        { type: "translate", q: "Он не говорит по-русски.", a: "He doesn't speak Russian." },
        { type: "order",     q: "doesn't / she / meat / eat", a: "She doesn't eat meat." }
      ],

      vocab: [
        { en:"understand", pron:"андэрста́нд", ipa:"/ˌʌndərˈstænd/", ru:"понимать", uz:"tushunmoq", pos:"verb", example:"I don't understand you." },
        { en:"remember", pron:"риме́мбэр", ipa:"/rɪˈmembər/", ru:"помнить", uz:"eslamoq", pos:"verb", example:"She remembers his name." },
        { en:"forget",  pron:"форге́т",  ipa:"/fərˈɡet/",  ru:"забывать", uz:"unutmoq", pos:"verb", example:"I forget names." },
        { en:"think",   pron:"синк",     ipa:"/θɪŋk/",     ru:"думать",   uz:"oʻylamoq", pos:"verb", example:"He thinks a lot." },
        { en:"feel",    pron:"фил",      ipa:"/fiːl/",     ru:"чувствовать", uz:"his qilmoq", pos:"verb", example:"I feel happy." },
        { en:"hope",    pron:"хо́уп",    ipa:"/həʊp/",     ru:"надеяться", uz:"umid qilmoq", pos:"verb", example:"We hope so." },
        { en:"enjoy",   pron:"инджо́й",  ipa:"/ɪnˈdʒɔɪ/",  ru:"наслаждаться, нравиться", uz:"zavqlanmoq", pos:"verb", example:"They enjoy music." },
        { en:"try",     pron:"трай",     ipa:"/traɪ/",     ru:"пытаться, пробовать", uz:"harakat qilmoq", pos:"verb", example:"I try every day." },
        { en:"buy",     pron:"бай",      ipa:"/baɪ/",      ru:"покупать", uz:"sotib olmoq", pos:"verb", example:"She buys bread." },
        { en:"give",    pron:"гив",      ipa:"/ɡɪv/",      ru:"давать",   uz:"bermoq", pos:"verb", example:"He gives me a book." },
        { en:"take",    pron:"тэйк",     ipa:"/teɪk/",     ru:"брать",    uz:"olmoq", pos:"verb", example:"I take the bus." },
        { en:"bring",   pron:"брин",     ipa:"/brɪŋ/",     ru:"приносить", uz:"olib kelmoq", pos:"verb", example:"She brings food." },
        { en:"tell",    pron:"тэл",      ipa:"/tel/",      ru:"рассказывать, сказать", uz:"aytmoq", pos:"verb", example:"Tell me a story." },
        { en:"show",    pron:"шо́у",     ipa:"/ʃəʊ/",      ru:"показывать", uz:"koʻrsatmoq", pos:"verb", example:"Show me the photo." },
        { en:"ask",     pron:"аск",      ipa:"/ɑːsk/",     ru:"спрашивать, просить", uz:"soʻramoq", pos:"verb", example:"I ask a question." },
        { en:"answer",  pron:"а́нсэр",   ipa:"/ˈɑːnsər/",  ru:"отвечать, ответ", uz:"javob bermoq", pos:"verb", example:"He answers the question." },
        { en:"meet",    pron:"мит",      ipa:"/miːt/",     ru:"встречать(ся)", uz:"uchrashmoq", pos:"verb", example:"We meet at school." },
        { en:"call",    pron:"кол",      ipa:"/kɔːl/",     ru:"звонить, называть", uz:"qoʻngʻiroq qilmoq", pos:"verb", example:"She calls her mother." },
        { en:"listen",  pron:"ли́сэн",   ipa:"/ˈlɪsən/",   ru:"слушать", uz:"tinglamoq", pos:"verb", example:"I listen to music." },
        { en:"wait",    pron:"уэ́йт",    ipa:"/weɪt/",     ru:"ждать",  uz:"kutmoq", pos:"verb", example:"They wait for the bus." }
      ],

      homework: [
        { q: "Translate: Я не понимаю.",           a: "I don't understand." },
        { q: "Translate: Она не помнит.",          a: "She doesn't remember." },
        { q: "Translate: Мы не слушаем музыку.",   a: "We don't listen to music." },
        { q: "Translate: Он не покупает хлеб.",    a: "He doesn't buy bread." }
      ]
    },

    /* ===================================================================
       DAY 4 — Present Simple: вопросы (do / does) + короткие ответы
       =================================================================== */
    {
      day: 4,
      grammarTitle: "Present Simple — вопросы (do / does) и короткие ответы",

      grammar:
        "Чтобы задать вопрос в Present Simple, в начало ставим " +
        "<b>Do</b> или <b>Does</b>:<br><br>" +
        "Для <b>I, you, we, they</b> → <b>Do</b>:<br>" +
        "<b>Do</b> you like tea? — Ты любишь чай?<br>" +
        "<b>Do</b> they work here? — Они работают здесь?<br><br>" +
        "Для <b>he, she, it</b> → <b>Does</b>:<br>" +
        "<b>Does</b> he speak English? — Он говорит по-английски?<br><br>" +
        "<b>Внимание:</b> после <b>Does</b> глагол снова <b>без -s</b>.<br><br>" +
        "<b>Короткие ответы:</b><br>" +
        "Do you like tea? — Yes, I <b>do</b>. / No, I <b>don't</b>.<br>" +
        "Does she work? — Yes, she <b>does</b>. / No, she <b>doesn't</b>.",

      examples: [
        { en: "Do you like tea?",            ru: "Ты любишь чай?" },
        { en: "Does he speak English?",      ru: "Он говорит по-английски?" },
        { en: "Yes, I do.",                  ru: "Да (люблю)." },
        { en: "No, she doesn't.",            ru: "Нет (не делает)." },
        { en: "Do they live here?",          ru: "Они живут здесь?" }
      ],

      exercises: [
        { type: "choice",    q: "___ you like coffee?",     options: ["Do","Does","Are"], a: "Do" },
        { type: "choice",    q: "___ she work here?",       options: ["Do","Does","Is"], a: "Does" },
        { type: "fill",      q: "___ they play football?",  a: "Do" },
        { type: "fill",      q: "Answer: Does he read? Yes, he ___.", a: "does" },
        { type: "translate", q: "Ты любишь чай?",           a: "Do you like tea?" },
        { type: "translate", q: "Он живёт здесь?",          a: "Does he live here?" },
        { type: "order",     q: "you / do / English / speak", a: "Do you speak English?" }
      ],

      vocab: [
        { en:"morning",  pron:"мо́рнин", ipa:"/ˈmɔːnɪŋ/", ru:"утро",     uz:"ertalab", pos:"noun", example:"Good morning!" },
        { en:"afternoon", pron:"афтэрну́н", ipa:"/ˌɑːftərˈnuːn/", ru:"день (после полудня)", uz:"tushdan keyin", pos:"noun", example:"See you in the afternoon." },
        { en:"evening",  pron:"и́внин",  ipa:"/ˈiːvnɪŋ/", ru:"вечер",    uz:"kechqurun", pos:"noun", example:"We meet in the evening." },
        { en:"night",    pron:"найт",    ipa:"/naɪt/",    ru:"ночь",     uz:"tun", pos:"noun", example:"I sleep at night." },
        { en:"usually",  pron:"ю́жуэли", ipa:"/ˈjuːʒuəli/", ru:"обычно", uz:"odatda", pos:"adverb", example:"I usually walk to work." },
        { en:"often",    pron:"о́фэн",   ipa:"/ˈɒfən/",   ru:"часто",    uz:"tez-tez", pos:"adverb", example:"She often reads." },
        { en:"sometimes", pron:"са́мтаймз", ipa:"/ˈsʌmtaɪmz/", ru:"иногда", uz:"baʼzan", pos:"adverb", example:"We sometimes play." },
        { en:"always",   pron:"о́луэйз", ipa:"/ˈɔːlweɪz/", ru:"всегда",  uz:"har doim", pos:"adverb", example:"He always helps me." },
        { en:"never",    pron:"нэ́вэр",  ipa:"/ˈnevər/",  ru:"никогда",  uz:"hech qachon", pos:"adverb", example:"They never sleep late." },
        { en:"every day", pron:"э́ври дэй", ipa:"/ˈevri deɪ/", ru:"каждый день", uz:"har kuni", pos:"phrase", example:"I study every day." },
        { en:"week",     pron:"уик",     ipa:"/wiːk/",    ru:"неделя",   uz:"hafta", pos:"noun", example:"There are seven days in a week." },
        { en:"weekend",  pron:"уике́нд", ipa:"/ˌwiːkˈend/", ru:"выходные", uz:"dam olish kunlari", pos:"noun", example:"We relax on the weekend." },
        { en:"hour",     pron:"а́уэр",   ipa:"/ˈaʊər/",   ru:"час",      uz:"soat", pos:"noun", example:"I work eight hours." },
        { en:"minute",   pron:"ми́нит",  ipa:"/ˈmɪnɪt/",  ru:"минута",   uz:"daqiqa", pos:"noun", example:"Wait a minute." },
        { en:"early",    pron:"э́рли",   ipa:"/ˈɜːli/",   ru:"рано",     uz:"erta", pos:"adverb", example:"She gets up early." },
        { en:"late",     pron:"лэйт",    ipa:"/leɪt/",    ru:"поздно",   uz:"kech", pos:"adverb", example:"He comes home late." },
        { en:"busy",     pron:"би́зи",   ipa:"/ˈbɪzi/",   ru:"занятой",  uz:"band", pos:"adjective", example:"I am busy today." },
        { en:"free",     pron:"фри",     ipa:"/friː/",    ru:"свободный", uz:"boʻsh", pos:"adjective", example:"Are you free now?" },
        { en:"tired",    pron:"та́йэрд", ipa:"/ˈtaɪərd/", ru:"уставший", uz:"charchagan", pos:"adjective", example:"They are tired." },
        { en:"together", pron:"тугэ́зэр", ipa:"/təˈɡeðər/", ru:"вместе", uz:"birga", pos:"adverb", example:"We work together." }
      ],

      homework: [
        { q: "Translate: Ты работаешь каждый день?",  a: "Do you work every day?" },
        { q: "Translate: Она часто читает?",          a: "Does she often read?" },
        { q: "Translate: Они живут вместе?",          a: "Do they live together?" },
        { q: "Translate: Он всегда помогает?",        a: "Does he always help?" }
      ]
    },

    /* ===================================================================
       DAY 5 — Wh- вопросы + повторение недели
       =================================================================== */
    {
      day: 5,
      grammarTitle: "Wh- вопросы (what, where, when…) + повторение",

      grammar:
        "<b>Wh-вопросы</b> — это вопросы со словами «что», «где», «когда» " +
        "и т.д. Схема: <b>вопросительное слово + do/does + подлежащее + " +
        "глагол</b>.<br><br>" +
        "<b>What</b> do you want? — Что ты хочешь?<br>" +
        "<b>Where</b> do they live? — Где они живут?<br>" +
        "<b>When</b> does he get up? — Когда он встаёт?<br>" +
        "<b>Why</b> does she cry? — Почему она плачет?<br>" +
        "<b>Who</b> do you help? — Кому ты помогаешь?<br>" +
        "<b>How</b> do you go to work? — Как ты ездишь на работу?<br><br>" +
        "<b>Повторение недели:</b> Present Simple — это привычки и " +
        "распорядок дня. Не забывай <b>-s</b> для he/she/it в утверждении, " +
        "и <b>don't/doesn't</b>, <b>do/does</b> в отрицаниях и вопросах.",

      examples: [
        { en: "What do you want?",           ru: "Что ты хочешь?" },
        { en: "Where do they live?",         ru: "Где они живут?" },
        { en: "When does he get up?",        ru: "Когда он встаёт?" },
        { en: "Why does she study English?", ru: "Почему она изучает английский?" },
        { en: "How do you go to school?",    ru: "Как ты ходишь в школу?" }
      ],

      exercises: [
        { type: "choice",    q: "___ do you live? — In Tashkent.", options: ["What","Where","When"], a: "Where" },
        { type: "choice",    q: "___ does she get up? — At seven.", options: ["When","Who","Why"], a: "When" },
        { type: "fill",      q: "___ do you want? — Water.",        a: "What" },
        { type: "translate", q: "Где ты работаешь?",                a: "Where do you work?" },
        { type: "translate", q: "Что она хочет?",                   a: "What does she want?" },
        { type: "order",     q: "live / where / they / do",         a: "Where do they live?" },
        { type: "match",     q: "Сопоставь вопросительные слова", pairs: [
            { en:"what",  ru:"что" },
            { en:"where", ru:"где" },
            { en:"when",  ru:"когда" },
            { en:"why",   ru:"почему" }
        ]}
      ],

      vocab: [
        { en:"what",  pron:"уо́т",   ipa:"/wɒt/",   ru:"что",     uz:"nima", pos:"pronoun", example:"What is this?" },
        { en:"where", pron:"уэ́эр",  ipa:"/weər/",  ru:"где, куда", uz:"qayer", pos:"adverb", example:"Where do you live?" },
        { en:"when",  pron:"уэн",    ipa:"/wen/",   ru:"когда",   uz:"qachon", pos:"adverb", example:"When do you work?" },
        { en:"why",   pron:"уа́й",   ipa:"/waɪ/",   ru:"почему",  uz:"nega", pos:"adverb", example:"Why are you sad?" },
        { en:"who",   pron:"ху",     ipa:"/huː/",   ru:"кто",     uz:"kim", pos:"pronoun", example:"Who is she?" },
        { en:"how",   pron:"ха́у",   ipa:"/haʊ/",   ru:"как",     uz:"qanday", pos:"adverb", example:"How are you?" },
        { en:"which", pron:"уич",    ipa:"/wɪtʃ/",  ru:"который, какой", uz:"qaysi", pos:"pronoun", example:"Which one do you want?" },
        { en:"whose", pron:"хуз",    ipa:"/huːz/",  ru:"чей",     uz:"kimning", pos:"pronoun", example:"Whose book is this?" },
        { en:"because", pron:"бико́з", ipa:"/bɪˈkɒz/", ru:"потому что", uz:"chunki", pos:"conjunction", example:"I stay because I am busy." },
        { en:"also",  pron:"о́лсо́у", ipa:"/ˈɔːlsəʊ/", ru:"также, тоже", uz:"ham", pos:"adverb", example:"I also speak Uzbek." },
        { en:"too",   pron:"ту",     ipa:"/tuː/",   ru:"тоже, слишком", uz:"ham", pos:"adverb", example:"Me too." },
        { en:"very",  pron:"вэ́ри",  ipa:"/ˈveri/", ru:"очень",   uz:"juda", pos:"adverb", example:"It is very good." },
        { en:"really", pron:"ри́эли", ipa:"/ˈrɪəli/", ru:"действительно, очень", uz:"rostdan", pos:"adverb", example:"I really like it." },
        { en:"here",  pron:"хи́эр",  ipa:"/hɪər/",  ru:"здесь, сюда", uz:"bu yer", pos:"adverb", example:"Come here." },
        { en:"there", pron:"зэ́эр",  ipa:"/ðeər/",  ru:"там, туда", uz:"u yer", pos:"adverb", example:"She lives there." },
        { en:"now",   pron:"на́у",   ipa:"/naʊ/",   ru:"сейчас",  uz:"hozir", pos:"adverb", example:"I am busy now." },
        { en:"then",  pron:"зэн",    ipa:"/ðen/",   ru:"тогда, потом", uz:"keyin", pos:"adverb", example:"See you then." },
        { en:"today", pron:"тудэ́й", ipa:"/təˈdeɪ/", ru:"сегодня", uz:"bugun", pos:"adverb", example:"What do you do today?" },
        { en:"day",   pron:"дэй",    ipa:"/deɪ/",   ru:"день",    uz:"kun", pos:"noun", example:"Have a nice day." },
        { en:"time",  pron:"тайм",   ipa:"/taɪm/",  ru:"время",   uz:"vaqt", pos:"noun", example:"What time is it?" }
      ],

      homework: [
        { q: "Translate: Где ты живёшь?",        a: "Where do you live?" },
        { q: "Translate: Когда она встаёт?",     a: "When does she get up?" },
        { q: "Translate: Что они хотят?",        a: "What do they want?" },
        { q: "Translate: Почему он учит английский?", a: "Why does he study English?" }
      ]
    }
  ]
});
