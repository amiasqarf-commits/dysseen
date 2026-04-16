export type Language = 'en' | 'ru' | 'kk';

export const translations = {
  en: {
    landing: {
      login: 'log in',
      signup: 'Sing up',
      noAccount: "Don't have an account?",
    },
    login: {
      welcome: 'Welcome\nback!',
      email: 'email',
      password: 'password',
      forgot: 'I forgot my password',
      noAccount: "Don't have an account?",
      makeOne: 'Make one',
      facebook: 'facebook',
      gmail: 'Gmail',
      fillFields: 'Fill all fields',
    },
    signup: {
      name: 'name',
      email: 'email',
      password: 'password',
      childAge: "child's age",
      consentPrefix: 'I agree to the ',
      consentLink: 'User Agreement',
      create: 'create account',
      fillFields: 'заполните данные',
      ageError: 'Age must be between 6 and 14 years',
      consentError: 'Please agree to the user agreement',
    },
    userAgreement: {
      title: 'User Agreement',
      sections: [
        {
          title: '1. General Provisions',
          content: '1.1. This User Agreement (hereinafter — the Agreement) governs the relationship between the Neurofocus team (hereinafter — the Owner) and the user of the "DysSeen" mobile application.\n1.2. By using the application, the User confirms full and unconditional acceptance of all terms of this Agreement.\n1.3. This document is prepared in accordance with the legislation of the Republic of Kazakhstan, including the Law "On Personal Data and Its Protection."'
        },
        {
          title: '2. Functionality and Audience',
          content: '2.1. The application is a digital tool for the preliminary screening of cognitive patterns (dyslexia, dysgraphia, and dyscalculia).\n2.2. The product is intended for children aged 7 to 14 years.\n2.3. Important: The results provided by the application do not constitute a medical diagnosis and are for informational and advisory purposes only. A final diagnosis can only be made by a qualified professional.'
        },
        {
          title: '3. Data Collection and Protection',
          content: '3.1. Data collection regarding minors is carried out strictly with the consent of parents or legal guardians.\n3.2. Neurofocus ensures data protection against unauthorized access. We only collect performance metrics (response time, accuracy, movement trajectory) for functional purposes.\n3.3. The User has the right to access, rectify, or request the complete deletion of their data from the database at any time.'
        },
        {
          title: '4. Ownership Rights',
          content: '4.1. All exclusive rights to the interface, algorithms, graphic elements, and content of the application are protected and belong to the Neurofocus team.\n4.2. Any unauthorized copying, modification, or commercial use of intellectual property objects is prohibited.'
        },
        {
          title: '5. Limitation of Liability',
          content: '5.1. The Owner is not liable for any decisions made by the user based on the application\'s results.\n5.2. Neurofocus reserves the right to unilaterally modify the terms of this Agreement at any time.'
        }
      ]
    },
    home: {
      title: 'Early detection of learning difficulties',
      start: 'Start screening',
      learnMore: 'Learn more',
    },
    screening: {
      title: 'Screening',
      handwriting: 'Handwriting analysis',
      handwritingDesc: 'Analyze spatial awareness and motor skills',
      reading: 'Reading analysis',
      readingDesc: 'Assess phonemic awareness and decoding',
      recognition: 'Recognition tasks',
      recognitionDesc: 'Letter and number recognition exercises',
      exercises: 'Dyslexia Exercises',
      exercisesDesc: 'Practical activities to support your child',
    },
    handwriting: {
      back: 'Back',
      placeholder: 'Place handwriting sample within the frame',
      analyze: 'Take Photo & Analyze',
      retake: 'Retake Photo',
    },
    reading: {
      back: 'Back',
      passage: 'Reading Passage',
      text: 'block, knock, mock, cock, dice, ice, mice',
      recording: 'Recording... Tap to Stop',
      tapToStart: 'Tap to Start Recording',
    },
    scanning: {
      title: 'Analyzing...',
      desc: 'AI is detecting patterns',
    },
    results: {
      back: 'Back',
      title: 'Analysis Results',
      detected: 'Detected Limitations',
      risk: 'Risk Level',
      symptoms: {
        syllableReading: 'Difficulty transitioning to whole-word reading',
        repeatingLines: 'Repeating the same line multiple times',
        skippingLines: 'Losing or skipping lines',
        visualErrors: 'Mispronouncing visually similar letters',
        mirrorReading: 'Mirror reading (right to left)',
        regression: 'Returning to the beginning of words/sentences',
        unclearSpeech: 'Unclear pronunciation',
        lowSpeed: 'Low reading speed',
        comprehension: 'Difficulty understanding the text',
        voicingErrors: 'Confusing voiced and voiceless consonants',
        phoneticSubstitutions: 'Substituting similar sounding letters',
        additions: 'Adding extra letters or syllables',
        irregularSize: 'Irregular letter sizing',
        poorSpatial: 'Poor spatial awareness (writing outside lines)',
        inconsistentSlant: 'Inconsistent letter slant',
        mixingStyles: 'Mixing cursive and print styles',
        illegible: 'Illegible handwriting in some areas',
        mathConfusion: 'Confusing mathematical symbols or digits (e.g. 6 and 9)',
        wrongDirection: 'Incorrect writing direction (bottom-to-top or right-to-left)',
        gridMisalignment: 'Difficulty fitting digits into grid cells correctly',
        countingDifficulty: 'Difficulty starting count from 5 and beyond',
        fingerCalculation: 'Persistent use of fingers for simple calculations',
      }
    },
    profile: {
      screenings: 'screenings',
      exercises: 'exercises',
      edit: 'Edit profile',
      save: 'Save',
      cancel: 'Cancel',
      history: 'Screening history',
      lowRisk: 'low risk',
      mediumRisk: 'medium risk',
      highRisk: 'high risk',
    },
    settings: {
      title: 'Settings',
      notifications: 'Notifications',
      language: 'Language',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      help: 'Help Center',
      logout: 'Logout',
    },
    verify: {
      title: 'Please verify your email',
      desc: 'We have sent you a verification email to {email}. Verify it and log in.',
      checkStatus: 'I have verified',
      backToLogin: 'LOG IN',
      notVerified: 'Email still not verified. Please check your inbox.'
    },
    forgotPassword: {
      title: 'Reset Password',
      desc: 'Enter your email to receive a password reset link.',
      email: 'email',
      send: 'get reset link',
      success: 'We sent you a password change link to {email}',
      backToLogin: 'Sign In',
      error: 'Error sending reset link. Please check the email address.',
    },
    learnMore: {
      back: 'Back',
      title: 'Learning Difficulties',
      dyslexia: 'Dyslexia',
      dyslexiaDesc: 'A learning disorder that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words.',
      dysgraphia: 'Dysgraphia',
      dysgraphiaDesc: 'A specific learning disability that affects writing, which requires a complex set of motor and information processing skills.',
      dyscalculia: 'Dyscalculia',
      dyscalculiaDesc: 'A learning disability in math. People with dyscalculia have trouble with numbers and math concepts.',
      parentMaterialsTitle: 'Materials for Parents',
      parentMaterials: [
        { title: 'Understanding Dyslexia', desc: 'A guide on how to support your child at home.' },
        { title: 'Reading Together', desc: 'Effective techniques for shared reading sessions.' },
        { title: 'Emotional Support', desc: 'Helping your child build confidence despite challenges.' }
      ],
      centersTitle: 'Specialized Centers (Astana)',
      centers: [
        { name: 'Neuron', type: 'Correction Center' },
        { name: 'Aqniet', type: 'Psychology & Speech Center' },
        { name: 'Svetly Start', type: 'Correction Center' },
        { name: 'Logo Smile Astana', type: 'Development Center' },
        { name: 'Carousel', type: 'Correction Center' },
      ]
    },
    nav: {
      main: 'main',
      screening: 'screening',
      exercises: 'exercises',
      child: 'child',
      settings: 'settings',
    },
    recommendations: {
      title: 'Dyslexia Exercises',
      homework: 'Homework for Child',
      methodologies: 'Methodologies for Parents',
      save: 'Save to Profile',
      saved: 'Saved!',
      exercises: {
        syllableReading: 'Practice reading short 2-3 letter syllables daily.',
        visualErrors: 'Use letter-tracing in sand or salt to reinforce shapes.',
        phoneticSubstitutions: 'Play "Sound Catch" games to distinguish similar sounds.',
        poorSpatial: 'Use graph paper to help with letter alignment.',
      }
    },
    dyslexia: {
      signsTitle: 'Signs of Dyslexia',
      signs: [
        'Substitution of words or letters similar in meaning and sound.',
        'Rearranging or flipping letters, syllables, and words while reading.',
        'Difficulty recognizing words.',
        'Trouble remembering facts and new information.',
        'Impaired coordination, awkwardness, and impulsivity.',
        'Extremely illegible handwriting with many spelling errors.',
        'Refusal to write or read aloud.'
      ],
      exercisesTitle: 'Dyslexia Exercises',
      exercises: [
        { id: 'wordMatch', title: 'Word Match', desc: 'Match words that sound similar but have different meanings.', image: 'https://picsum.photos/seed/wordmatch/400/300' },
        { id: 'letterReversal', title: 'Letter Reversal', desc: 'Identify correctly written letters vs mirrored ones.', image: 'https://picsum.photos/seed/letter/400/300' },
        { id: 'wordRecognition', title: 'Word Recognition', desc: 'Flashcards with common words to improve automaticity.', image: 'https://picsum.photos/seed/flashcards/400/300' },
        { id: 'memoryGames', title: 'Memory Games', desc: 'Simple sequences to remember and repeat.', image: 'https://picsum.photos/seed/memory/400/300' },
        { id: 'coordination', title: 'Coordination Drills', desc: 'Tracing shapes or simple hand-eye coordination tasks.', image: 'https://picsum.photos/seed/drill/400/300' },
        { id: 'handwriting', title: 'Handwriting Practice', desc: 'Structured tracing of letters with error highlighting.', image: 'https://picsum.photos/seed/write/400/300' },
        { id: 'readingAloud', title: 'Reading Aloud', desc: 'Short, engaging texts to build confidence.', image: 'https://picsum.photos/seed/read/400/300' }
      ],
      interactiveData: {
        letterReversal: [
          { options: ['b', 'd', 'b', 'b'], correct: 'd' },
          { options: ['p', 'q', 'p', 'p'], correct: 'q' },
          { options: ['m', 'w', 'm', 'm'], correct: 'w' },
          { options: ['n', 'u', 'n', 'n'], correct: 'u' },
          { options: ['E', '∃', 'E', 'E'], correct: '∃' },
          { options: ['S', 'Ƨ', 'S', 'S'], correct: 'Ƨ' },
          { options: ['Z', 'S', 'Z', 'Z'], correct: 'S' },
          { options: ['N', 'И', 'N', 'N'], correct: 'И' },
          { options: ['R', 'Я', 'R', 'R'], correct: 'Я' },
          { options: ['L', '⅃', 'L', 'L'], correct: '⅃' }
        ],
        wordRecognition: [
          { word: 'CAT', options: ['CAT', 'ACT', 'TAC', 'CTA'], correct: 'CAT' },
          { word: 'DOG', options: ['DOG', 'GOD', 'ODG', 'GDO'], correct: 'DOG' },
          { word: 'BIRD', options: ['BIRD', 'BRID', 'DRBI', 'IBRD'], correct: 'BIRD' },
          { word: 'FISH', options: ['FISH', 'IFSH', 'SIFH', 'HSIF'], correct: 'FISH' },
          { word: 'TREE', options: ['TREE', 'TEER', 'RETE', 'ERET'], correct: 'TREE' },
          { word: 'APPLE', options: ['APPLE', 'ALPPE', 'ELPPA', 'PAPLE'], correct: 'APPLE' },
          { word: 'HOUSE', options: ['HOUSE', 'HOSUE', 'ESUOH', 'UHESO'], correct: 'HOUSE' },
          { word: 'WATER', options: ['WATER', 'WTAER', 'RETAW', 'EARTW'], correct: 'WATER' },
          { word: 'SMILE', options: ['SMILE', 'SIMLE', 'ELIMS', 'LIMES'], correct: 'SMILE' },
          { word: 'FRIEND', options: ['FRIEND', 'FREIND', 'DNEIRF', 'RIEFND'], correct: 'FRIEND' }
        ]
      }
    },
    dysgraphia: {
      signsTitle: 'Signs of Dysgraphia',
      signs: [
        'Inability to start counting from 5 and beyond.',
        'Constant use of fingers for calculations.',
        'Errors in writing mathematical digits and symbols (confusing 6 and 9, > and <, + and x).',
        'Incorrect writing direction (bottom to top, right to left).',
        'Difficulty fitting digits into grid cells.',
        'Extremely illegible handwriting with many spelling errors.',
        'Refusal to write or read aloud.'
      ],
      exercisesTitle: 'Dysgraphia Exercises',
      exercises: [
        { id: 'numMatch', title: 'Number Recognition', desc: 'Identify the correct number among similar looking ones.', image: 'https://picsum.photos/seed/math/400/300' },
        { id: 'direction', title: 'Writing Direction', desc: 'Practice writing numbers in the correct top-to-bottom direction.', image: 'https://picsum.photos/seed/direction/400/300' },
        { id: 'gridFit', title: 'Grid Alignment', desc: 'Practice fitting numbers inside grid cells correctly.', image: 'https://picsum.photos/seed/grid/400/300' }
      ]
    },
    recognition: {
      title: 'Recognition',
      letterTask: 'Which letter is different? Tap the odd one out.',
      numberTask: 'Which number is different? Tap the odd one out.',
      back: 'Back',
      next: 'Next',
      finish: 'Finish',
      riskDetected: 'Risk Detected',
      riskDesc: 'The child had difficulty distinguishing similar characters, which may indicate a risk of dyslexia or dysgraphia.',
      noRisk: 'Good Job!',
      noRiskDesc: 'The child successfully completed the recognition tasks.',
      letterTasks: [
        { options: ['b', 'b', 'd', 'b'], correct: 'd' },
        { options: ['p', 'q', 'p', 'p'], correct: 'q' },
        { options: ['m', 'm', 'n', 'm'], correct: 'n' },
        { options: ['Ш', 'Ш', 'Щ', 'Ш'], correct: 'Щ' },
        { options: ['О', 'О', 'С', 'О'], correct: 'С' },
        { options: ['Е', 'Е', 'Ё', 'Е'], correct: 'Ё' },
        { options: ['Ь', 'Ь', 'Ъ', 'Ь'], correct: 'Ъ' },
        { options: ['К', 'К', 'Х', 'К'], correct: 'Х' },
        { options: ['Г', 'Г', 'Т', 'Г'], correct: 'Т' },
        { options: ['З', 'З', 'В', 'З'], correct: 'В' }
      ],
      numberTasks: [
        { options: ['6', '6', '9', '6'], correct: '9' },
        { options: ['5', '5', '2', '5'], correct: '2' },
        { options: ['7', '7', '1', '7'], correct: '1' },
        { options: ['3', '3', '8', '3'], correct: '8' },
        { options: ['4', '4', '7', '4'], correct: '7' },
        { options: ['0', '0', '8', '0'], correct: '8' },
        { options: ['1', '1', '7', '1'], correct: '7' },
        { options: ['2', '2', '5', '2'], correct: '5' },
        { options: ['9', '9', '6', '9'], correct: '6' },
        { options: ['8', '8', '3', '8'], correct: '3' }
      ]
    }
  },
  ru: {
    landing: {
      login: 'войти',
      signup: 'Регистрация',
      noAccount: 'Нет аккаунта?',
    },
    login: {
      welcome: 'С возвращением!',
      email: 'почта',
      password: 'пароль',
      forgot: 'Я забыл пароль',
      noAccount: 'Нет аккаунта?',
      makeOne: 'Создать',
      facebook: 'facebook',
      gmail: 'Gmail',
      fillFields: 'Заполните все поля',
    },
    signup: {
      name: 'имя',
      email: 'почта',
      password: 'пароль',
      childAge: 'возраст ребенка',
      consentPrefix: 'Я согласен(а) на ',
      consentLink: 'Пользовательское соглашение',
      create: 'создать аккаунт',
      fillFields: 'заполните данные',
      ageError: 'Возраст должен быть от 6 до 14 лет',
      consentError: 'Пожалуйста, примите пользовательское соглашение',
    },
    userAgreement: {
      title: 'Пользовательское соглашение',
      sections: [
        {
          title: '1. Общие положения',
          content: '1.1. Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между командой Neurofocus (далее — Владелец) и пользователем мобильного приложения «DysSeen».\n1.2. Используя приложение, Пользователь подтверждает полное и безоговорочное принятие всех условий данного Соглашения.'
        },
        {
          title: '2. Функционал и аудитория',
          content: '2.1. Приложение является цифровым инструментом для предварительного скрининга когнитивных особенностей (дислексия, дисграфия и дискалькулия).\n2.2. Продукт предназначен для детей в возрасте от 7 до 14 лет.\n2.3. Важно: Результаты приложения не являются медицинским диагнозом и носят исключительно рекомендательный (информационный) характер. Окончательный диагноз может быть поставлен только квалифицированным специалистом.'
        },
        {
          title: '3. Сбор и защита данных',
          content: '3.1. Сбор данных о несовершеннолетних осуществляется исключительно с согласия родителей или законных представителей.\n3.2. Neurofocus обеспечивает защиту данных от несанкционированного доступа. Мы собираем только технические показатели (время отклика, точность, траектория движений) для функциональных целей.\n3.3. Пользователь имеет право в любое время получить доступ к своим данным, исправить их или потребовать полного удаления из базы данных.'
        },
        {
          title: '4. Права собственности',
          content: '4.1. Все исключительные права на интерфейс, алгоритмы, графические элементы и контент приложения защищены и принадлежат команде Neurofocus.\n4.2. Любое копирование, модификация или использование объектов интеллектуальной собственности в коммерческих целях без разрешения запрещено.'
        },
        {
          title: '5. Ограничение ответственности',
          content: '5.1. Владелец не несет ответственности за решения, принятые пользователем на основе результатов приложения.\n5.2. Neurofocus оставляет за собой право в одностороннем порядке изменять условия данного Соглашения в любое время.'
        }
      ]
    },
    home: {
      title: 'Раннее выявление трудностей обучения',
      start: 'Начать скрининг',
      learnMore: 'Узнать побольше',
    },
    screening: {
      title: 'Скрининг',
      handwriting: 'Анализ почерка',
      handwritingDesc: 'Анализ пространственного восприятия и моторики',
      reading: 'Анализ чтения',
      readingDesc: 'Оценка фонематического восприятия и декодирования',
      recognition: 'Задания на распознавание',
      recognitionDesc: 'Упражнения на распознавание букв и цифр',
      exercises: 'Упражнения по дислексии',
      exercisesDesc: 'Практические задания для поддержки ребенка',
    },
    handwriting: {
      back: 'Назад',
      placeholder: 'Поместите образец почерка в рамку',
      analyze: 'Сфотографировать и анализировать',
      retake: 'Переснять фото',
    },
    reading: {
      back: 'Назад',
      passage: 'Текст для чтения',
      text: 'Крокодил, дрова, стол, бабушка, жаба, дубок, корова, нож',
      recording: 'Запись... Нажмите, чтобы остановить',
      tapToStart: 'Нажмите, чтобы начать запись',
    },
    scanning: {
      title: 'Анализируем...',
      desc: 'ИИ ищет закономерности',
    },
    results: {
      back: 'Назад',
      title: 'Результаты анализа',
      detected: 'Выявленные ограничения',
      risk: 'Уровень риска',
      symptoms: {
        syllableReading: 'Трудности перехода к чтению целыми словами',
        repeatingLines: 'Повтор одной и той же строки несколько раз',
        skippingLines: 'Пропуск или «потеря» строк при чтении',
        visualErrors: 'Ошибки в буквах, похожих по начертанию',
        mirrorReading: '«Зеркальное» чтение (справа налево)',
        regression: 'Возвраты к началу слова или предложения',
        unclearSpeech: 'Нечеткое произношение слов',
        lowSpeed: 'Низкая скорость чтения',
        comprehension: 'Трудности в понимании прочитанного текста',
        voicingErrors: 'Путаница звонких и глухих согласных',
        phoneticSubstitutions: 'Замена сходных по произношению звуков',
        additions: 'Добавление лишних букв или слогов',
        irregularSize: 'Неравномерный размер букв',
        poorSpatial: 'Нарушение пространственного восприятия (выход за поля)',
        inconsistentSlant: 'Непостоянный наклон букв',
        mixingStyles: 'Смешивание печатных и прописных букв',
        illegible: 'Неразборчивый почерк в некоторых местах',
        mathConfusion: 'Путаница математических символов или цифр (например, 6 и 9)',
        wrongDirection: 'Неправильное направление письма (снизу вверх или справа налево)',
        gridMisalignment: 'Сложности с правильным вписыванием цифр в клетки',
        countingDifficulty: 'Трудности с началом счета от 5 и далее',
        fingerCalculation: 'Постоянное использование пальцев для простых вычислений',
      }
    },
    profile: {
      screenings: 'скрининги',
      exercises: 'упражнения',
      edit: 'Редактировать профиль',
      save: 'Сохранить',
      cancel: 'Отмена',
      history: 'История скринингов',
      lowRisk: 'низкий риск',
      mediumRisk: 'средний риск',
      highRisk: 'высокий риск',
    },
    settings: {
      title: 'Настройки',
      notifications: 'Уведомления',
      language: 'Язык',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      help: 'Центр помощи',
      logout: 'Выйти',
    },
    verify: {
      title: 'Пожалуйста, подтвердите ваш Email',
      desc: 'Мы отправили письмо для подтверждения на адрес {email}. Подтвердите его и войдите в систему.',
      checkStatus: 'Я подтвердил/а',
      backToLogin: 'ВОЙТИ',
      notVerified: 'Email еще не подтвержден. Пожалуйста, проверьте ваш почтовый ящик.'
    },
    forgotPassword: {
      title: 'Восстановление пароля',
      desc: 'Введите вашу почту, чтобы получить ссылку для сброса пароля.',
      email: 'почта',
      send: 'получить ссылку',
      success: 'Мы отправили ссылку для смены пароля на адрес {email}',
      backToLogin: 'Войти',
      error: 'Ошибка при отправке ссылки. Пожалуйста, проверьте адрес почты.',
    },
    learnMore: {
      back: 'Назад',
      title: 'Трудности обучения',
      dyslexia: 'Дислексия',
      dyslexiaDesc: 'Расстройство обучения, связанное с трудностями при чтении из-за проблем с идентификацией звуков речи и пониманием того, как они соотносятся с буквами и словами.',
      dysgraphia: 'Дисграфия',
      dysgraphiaDesc: 'Специфическое расстройство обучения, которое влияет на письмо, требующее сложного набора моторных навыков и навыков обработки информации.',
      dyscalculia: 'Дискалькулия',
      dyscalculiaDesc: 'Нарушение способности к обучению математике. Люди с дискалькулией испытывают трудности с числами и математическими понятиями.',
      parentMaterialsTitle: 'Материалы для родителей',
      parentMaterials: [
        { title: 'Понимание дислексии', desc: 'Руководство по поддержке ребенка дома.' },
        { title: 'Читаем вместе', desc: 'Эффективные техники для совместного чтения.' },
        { title: 'Эмоциональная поддержка', desc: 'Как помочь ребенку сохранить уверенность.' }
      ],
      centersTitle: 'Специализированные центры (Астана)',
      centers: [
        { name: 'Neuron', type: 'Коррекционный центр' },
        { name: 'Aqniet', type: 'Центр психологии и логопедии' },
        { name: 'Светлый Старт', type: 'Коррекционный центр' },
        { name: 'Logo Smile Astana', type: 'Центр развития' },
        { name: 'Карусель', type: 'Коррекционный центр' },
      ]
    },
    nav: {
      main: 'главная',
      screening: 'скрининг',
      exercises: 'упражнения',
      child: 'ребенок',
      settings: 'настройки',
    },
    recommendations: {
      title: 'Упражнения по дислексии',
      homework: 'Задания для ребенка',
      methodologies: 'Методики для родителей',
      save: 'Сохранить в профиль',
      saved: 'Сохранено!',
      exercises: {
        syllableReading: 'Практикуйте чтение коротких слогов (2-3 буквы) ежедневно.',
        visualErrors: 'Используйте обводку букв на песке или соли для запоминания формы.',
        phoneticSubstitutions: 'Играйте в игры на различение звуков (например, "Поймай звук").',
        poorSpatial: 'Используйте тетради в крупную клетку для выравнивания букв.',
      }
    },
    dyslexia: {
      signsTitle: 'Признаки дислексии',
      signs: [
        'Замена слов, отдельных букв, которые схожи по смыслу и звучанию.',
        'Перестановка, переворачивание букв, слогов и даже целых слов при чтении.',
        'Сложности с распознаванием слов.',
        'Трудности с запоминанием фактов, новой информации.',
        'Нарушенная координация движений, наличие неловкости и импульсивности в поведении.',
        'Крайне неразборчивый почерк и большое количество ошибок.',
        'Отказ от письма и чтения вслух.'
      ],
      exercisesTitle: 'Упражнения при дислексии',
      exercises: [
        { id: 'wordMatch', title: 'Сопоставление слов', desc: 'Сопоставляйте слова, которые звучат похоже, но имеют разное значение.', image: 'https://picsum.photos/seed/wordmatch/400/300' },
        { id: 'letterReversal', title: 'Проверка букв', desc: 'Найдите правильно написанные буквы среди зеркальных.', image: 'https://picsum.photos/seed/letter/400/300' },
        { id: 'wordRecognition', title: 'Узнавание слов', desc: 'Карточки с частыми словами для автоматизма чтения.', image: 'https://picsum.photos/seed/flashcards/400/300' },
        { id: 'memoryGames', title: 'Игры на память', desc: 'Простые последовательности для запоминания и повторения.', image: 'https://picsum.photos/seed/memory/400/300' },
        { id: 'coordination', title: 'Координация', desc: 'Обводка фигур или простые задачи на координацию рук и глаз.', image: 'https://picsum.photos/seed/drill/400/300' },
        { id: 'handwriting', title: 'Практика письма', desc: 'Структурированное письмо с выделением ошибок.', image: 'https://picsum.photos/seed/write/400/300' },
        { id: 'readingAloud', title: 'Чтение вслух', desc: 'Короткие интересные тексты для уверенности.', image: 'https://picsum.photos/seed/read/400/300' }
      ],
      interactiveData: {
        letterReversal: [
          { options: ['б', 'д', 'б', 'б'], correct: 'д' },
          { options: ['п', 'т', 'п', 'п'], correct: 'т' },
          { options: ['м', 'ш', 'м', 'м'], correct: 'ш' },
          { options: ['н', 'и', 'н', 'н'], correct: 'и' },
          { options: ['Е', 'Э', 'Е', 'Е'], correct: 'Э' },
          { options: ['З', 'Е', 'З', 'З'], correct: 'Е' },
          { options: ['У', 'Ч', 'У', 'У'], correct: 'Ч' },
          { options: ['Ь', 'Ъ', 'Ь', 'Ь'], correct: 'Ъ' },
          { options: ['Л', 'П', 'Л', 'Л'], correct: 'П' },
          { options: ['Г', 'Т', 'Г', 'Г'], correct: 'Т' }
        ],
        wordRecognition: [
          { word: 'КОТ', options: ['КОТ', 'ТОК', 'ОКТ', 'КТО'], correct: 'КОТ' },
          { word: 'ДОМ', options: ['ДОМ', 'МОД', 'ОМД', 'ДМО'], correct: 'ДОМ' },
          { word: 'МАМА', options: ['МАМА', 'АММА', 'МААМ', 'АМАМ'], correct: 'МАМА' },
          { word: 'РЫБА', options: ['РЫБА', 'БЫРА', 'АБЫР', 'РЫАБ'], correct: 'РЫБА' },
          { word: 'КАША', options: ['КАША', 'ШАКА', 'АШАК', 'КААШ'], correct: 'КАША' },
          { word: 'ШКОЛА', options: ['ШКОЛА', 'КОЛАШ', 'АЛОКШ', 'ШОКЛА'], correct: 'ШКОЛА' },
          { word: 'КНИГА', options: ['КНИГА', 'ГИНКА', 'АГИНК', 'КНИАГ'], correct: 'КНИГА' },
          { word: 'СОЛНЦЕ', options: ['СОЛНЦЕ', 'ЦОЛНСЕ', 'ЕЦНЛОС', 'СОНЦЛЕ'], correct: 'СОЛНЦЕ' },
          { word: 'ДРУГ', options: ['ДРУГ', 'ГРУД', 'УРГД', 'ДРУК'], correct: 'ДРУГ' },
          { word: 'ЛЕС', options: ['ЛЕС', 'СЕЛ', 'ЕЛС', 'ЛСЕ'], correct: 'ЛЕС' }
        ]
      }
    },
    dysgraphia: {
      signsTitle: 'Признаки дисграфии',
      signs: [
        'Неспособность ребёнка начать счёт от 5 и далее.',
        'Постоянное применение пальцев для вычисления.',
        'Ошибки в написании математических цифр и символов (путает 6 и 9, знаки «больше» и «меньше», сложения и умножения).',
        'Неправильное написание цифр (снизу вверх и справа налево).',
        'Сложности с вписыванием цифр в клеточку.',
        'Крайне неразборчивый почерк и большое количество ошибок.',
        'Отказ от письма и чтения вслух.'
      ],
      exercisesTitle: 'Упражнения при дисграфии',
      exercises: [
        { id: 'numMatch', title: 'Распознавание цифр', desc: 'Определите правильную цифру среди похожих.', image: 'https://picsum.photos/seed/math/400/300' },
        { id: 'direction', title: 'Направление письма', desc: 'Практика написания цифр сверху вниз.', image: 'https://picsum.photos/seed/direction/400/300' },
        { id: 'gridFit', title: 'Вписывание в клетки', desc: 'Практика правильного расположения цифр в клетках.', image: 'https://picsum.photos/seed/grid/400/300' }
      ]
    },
    recognition: {
      title: 'Распознавание',
      letterTask: 'Какая буква отличается? Нажмите на лишнюю.',
      numberTask: 'Какая цифра отличается? Нажмите на лишнюю.',
      back: 'Назад',
      next: 'Далее',
      finish: 'Завершить',
      riskDetected: 'Обнаружен риск',
      riskDesc: 'Ребенку было трудно отличить похожие символы, что может указывать на риск дислексии или дисграфии.',
      noRisk: 'Отлично!',
      noRiskDesc: 'Ребенок успешно справился с заданиями на распознавание.',
      letterTasks: [
        { options: ['б', 'б', 'д', 'б'], correct: 'д' },
        { options: ['п', 'q', 'п', 'п'], correct: 'q' },
        { options: ['м', 'м', 'н', 'м'], correct: 'н' },
        { options: ['Ш', 'Ш', 'Щ', 'Ш'], correct: 'Щ' },
        { options: ['О', 'О', 'С', 'О'], correct: 'С' },
        { options: ['Е', 'Е', 'Ё', 'Е'], correct: 'Ё' },
        { options: ['Ь', 'Ь', 'Ъ', 'Ь'], correct: 'Ъ' },
        { options: ['К', 'К', 'Х', 'К'], correct: 'Х' },
        { options: ['Г', 'Г', 'Т', 'Г'], correct: 'Т' },
        { options: ['З', 'З', 'В', 'З'], correct: 'В' }
      ],
      numberTasks: [
        { options: ['6', '6', '9', '6'], correct: '9' },
        { options: ['5', '5', '2', '5'], correct: '2' },
        { options: ['7', '7', '1', '7'], correct: '1' },
        { options: ['3', '3', '8', '3'], correct: '8' },
        { options: ['4', '4', '7', '4'], correct: '7' },
        { options: ['0', '0', '8', '0'], correct: '8' },
        { options: ['1', '1', '7', '1'], correct: '7' },
        { options: ['2', '2', '5', '2'], correct: '5' },
        { options: ['9', '9', '6', '9'], correct: '6' },
        { options: ['8', '8', '3', '8'], correct: '3' }
      ]
    }
  },
  kk: {
    landing: {
      login: 'кіру',
      signup: 'Тіркелу',
      noAccount: 'Аккаунтыңыз жоқ па?',
    },
    login: {
      welcome: 'Қош келдіңіз!',
      email: 'электрондық пошта',
      password: 'құпия сөз',
      forgot: 'Құпия сөзді ұмыттым',
      noAccount: 'Аккаунтыңыз жоқ па?',
      makeOne: 'Жасау',
      facebook: 'facebook',
      gmail: 'Gmail',
      fillFields: 'Барлық өрістерді толтырыңыз',
    },
    signup: {
      name: 'аты',
      email: 'электрондық пошта',
      password: 'құпия сөз',
      childAge: 'баланың жасы',
      consentPrefix: 'Мен ',
      consentLink: 'Пайдаланушы келісімімен',
      consentSuffix: ' келісемін',
      create: 'аккаунт жасау',
      fillFields: 'мәліметтерді толтырыңыз',
      ageError: 'Жас 6-дан 14-ке дейін болуы керек',
      consentError: 'Пайдаланушы келісімімен келісіңіз',
    },
    userAgreement: {
      title: 'Пайдаланушы келісімі',
      sections: [
        {
          title: '1. Жалпы ережелер',
          content: '1.1. Осы Пайдаланушы келісімі (бұдан әрі — Келісім) Neurofocus командасы (бұдан әрі — Иесі) мен «DysSeen» мобильді қосымшасының пайдаланушысы арасындағы қарым-қатынастарды реттейді.\n1.2. Пайдаланушы қосымшаны пайдалана отырып, осы Келісімнің барлық шарттарын толық және сөзсіз қабылдайтынын растайды.'
        },
        {
          title: '2. Функционал және аудитория',
          content: '2.1. Қосымша когнитивті ерекшеліктерді (дислексия, дисграфия және дискалькулия) алдын ала скринингтен өткізуге арналған цифрлық құрал болып табылады.\n2.2. Өнім 7 жастан 14 жасқа дейінгі балаларға арналған.\n2.3. Маңызды: Қосымшаның нәтижелері медициналық диагноз болып табылмайды және тек ұсыныс (ақпараттық) сипатында беріледі. Соңғы диагнозды тек білікті маман қоя алады.'
        },
        {
          title: '3. Деректерді жинау және қорғау',
          content: '3.1. Кәмелетке толмағандар туралы деректерді жинау тек ата-аналардың немесе заңды өкілдердің келісімімен ғана жүзеге асырылады.\n3.2. Neurofocus деректердің рұқсатсыз қол жеткізілуінен қорғалуын қамтамасыз етеді. Біз тек функционалдық мақсаттар үшін техникалық көрсеткіштерді (жауап беру уақыты, дәлдік, қозғалыс траекториясы) жинаймыз.\n3.3. Пайдаланушы кез келген уақытта өз деректеріне қол жеткізуге, оларды түзетуге немесе дерекқордан толық жоюды талап етуге құқылы.'
        },
        {
          title: '4. Меншік құқығы',
          content: '4.1. Қосымшаның интерфейсіне, алгоритмдеріне, графикалық элементтеріне және мазмұнына (контент) барлық айрықша құқықтар қорғалған және Neurofocus командасына тиесілі.\n4.2. Зияткерлік меншік нысандарын рұқсатсыз көшіруге, түрлендіруге немесе коммерциялық мақсатта пайдалануға тыйым салынады.'
        },
        {
          title: '5. Жауапкершілік',
          content: '5.1. Иесі қосымшаның нәтижелері негізінде пайдаланушының қабылдаған дербес шешімдері үшін жауапкершілік көтермейді.\n5.2. Neurofocus кез келген уақытта осы Келісімнің шарттарын біржақты тәртіпте өзгерту құқығын өзіне қалдырады.'
        }
      ]
    },
    home: {
      title: 'Оқу қиындықтарын ерте анықтау',
      start: 'Скринингті бастау',
      learnMore: 'Көбірек білу',
    },
    screening: {
      title: 'Скрининг',
      handwriting: 'Қолжазбаны талдау',
      handwritingDesc: 'Кеңістікті қабылдау мен моториканы талдау',
      reading: 'Оқуды талдау',
      readingDesc: 'Фонематикалық қабылдау мен декодтауды бағалау',
      recognition: 'Тану тапсырмалары',
      recognitionDesc: 'Әріптер мен цифрларды тану жаттығулары',
      exercises: 'Дислексия жаттығулары',
      exercisesDesc: 'Баланы қолдауға арналған практикалық тапсырмалар',
    },
    handwriting: {
      back: 'Артқа',
      placeholder: 'Қолжазба үлгісін салу',
      analyze: 'Суретке түсіру',
      retake: 'Суретті қайта түсіру',
    },
    reading: {
      back: 'Артқа',
      passage: 'Оқу мәтіні',
      text: 'қыз-нүкте, көмер-бұрыш, таяқ-аралық',
      recording: 'Жазу... Тоқтату үшін басыңыз',
      tapToStart: 'Жазуды бастау үшін басыңыз',
    },
    scanning: {
      title: 'Талдау...',
      desc: 'ЖИ заңдылықтарды іздеуде',
    },
    results: {
      back: 'Артқа',
      title: 'Талдау нәтижелері',
      detected: 'Анықталған шектеулер',
      risk: 'Қауіп деңгейі',
      symptoms: {
        syllableReading: 'Сөздерді тұтас оқуға көшудегі қиындықтар',
        repeatingLines: 'Бір жолды бірнеше рет қайталап оқу',
        skippingLines: 'Оқу кезінде жолдарды жіберіп алу немесе жоғалту',
        visualErrors: 'Жазылуы ұқсас әріптерден қателесу',
        mirrorReading: '«Айналы» оқу (оңнан солға қарай)',
        regression: 'Сөздің немесе сөйлемнің басына қайта оралу',
        unclearSpeech: 'Сөздерді анық айтпау',
        lowSpeed: 'Оқу жылдамдығының төмендігі',
        comprehension: 'Оқылған мәтінді түсінудегі қиындықтар',
        voicingErrors: 'Ұяң және қатаң дауыссыздарды шатастыру',
        phoneticSubstitutions: 'Айтылуы ұқсас дыбыстарды алмастыру',
        additions: 'Артық әріптер немесе буындар қосу',
        irregularSize: 'Әріптердің біркелкі емес өлшемі',
        poorSpatial: 'Кеңістікті қабылдаудың бұзылуы (жолдан шығу)',
        inconsistentSlant: 'Әріптердің тұрақсыз көлбеуі',
        mixingStyles: 'Баспа және жазба әріптерді араластыру',
        illegible: 'Кейбір жерлерде түсініксіз қолжазба',
        mathConfusion: 'Математикалық символдарды немесе цифрларды шатастыру (мысалы, 6 мен 9)',
        wrongDirection: 'Жазу бағытының дұрыс болмауы (төменнен жоғары немесе оңнан солға қарай)',
        gridMisalignment: 'Цифрларды торкөздерге дұрыс сыйғызудағы қиындықтар',
        countingDifficulty: '5-тен ары қарай санауды бастау қиындығы',
        fingerCalculation: 'Қарапайым есептеулер үшін үнемі саусақтарды қолдану',
      }
    },
    profile: {
      screenings: 'скринингтер',
      exercises: 'жаттығулар',
      edit: 'профильді өзгерту',
      save: 'Сақтау',
      cancel: 'Бас тарту',
      history: 'Скрининг тарихы',
      lowRisk: 'төмен қауіп',
      mediumRisk: 'орташа қауіп',
      highRisk: 'жоғары қауіп',
    },
    settings: {
      title: 'Параметрлер',
      notifications: 'Хабарландырулар',
      language: 'Тіл',
      privacy: 'Құпиялылық саясаты',
      terms: 'Пайдалану шарттары',
      help: 'Анықтама орталығы',
      logout: 'Шығу',
    },
    verify: {
      title: 'Электрондық поштаңызды растаңыз',
      desc: 'Біз {email} мекенжайына растау хатын жібердік. Оны растап, жүйеге кіріңіз.',
      checkStatus: 'Мен растадым',
      backToLogin: 'КІРУ',
      notVerified: 'Электрондық пошта әлі расталмаған. Поштаңызды тексеріңіз.'
    },
    forgotPassword: {
      title: 'Құпия сөзді қайта орнату',
      desc: 'Құпия сөзді қайта орнату сілтемесін алу үшін электрондық поштаңызды енгізіңіз.',
      email: 'электрондық пошта',
      send: 'сілтемені алу',
      success: 'Біз {email} мекенжайына құпия сөзді өзгерту сілтемесін жібердік',
      backToLogin: 'Кіру',
      error: 'Сілтемені жіберу кезінде қате орын алды. Пошта мекенжайын тексеріңіз.',
    },
    learnMore: {
      back: 'Артқа',
      title: 'Оқу қиындықтары',
      dyslexia: 'Дислексия',
      dyslexiaDesc: 'Сөйлеу дыбыстарын анықтау және олардың әріптер мен сөздерге қалай қатысты екенін түсінудегі қиындықтарға байланысты оқудың бұзылуы.',
      dysgraphia: 'Дисграфия',
      dysgraphiaDesc: 'Моторлық және ақпаратты өңдеу дағдыларының күрделі жиынтығын талап ететін жазуға әсер ететін ерекше оқу бұзылуы.',
      dyscalculia: 'Дискалькулия',
      dyscalculiaDesc: 'Математиканы үйрену қабілетінің бұзылуы. Дискалькулиясы бар адамдар сандар мен математикалық ұғымдарда қиындықтарға тап болады.',
      parentMaterialsTitle: 'Ата-аналарға арналған материалдар',
      parentMaterials: [
        { title: 'Дислексияны түсіну', desc: 'Үйде баланы қолдау бойынша нұсқаулық.' },
        { title: 'Бірге оқимыз', desc: 'Бірлесіп оқудың тиімді әдістері.' },
        { title: 'Эмоциялық қолдау', desc: 'Баланың өзіне деген сенімділігін арттыру.' }
      ],
      centersTitle: 'Мамандандырылған орталықтар (Астана)',
      centers: [
        { name: 'Neuron', type: 'Түзету орталығы' },
        { name: 'Aqniet', type: 'Психология және логопедия орталығы' },
        { name: 'Светлый Старт', type: 'Түзету орталығы' },
        { name: 'Logo Smile Astana', type: 'Даму орталығы' },
        { name: 'Карусель', type: 'Түзету орталығы' },
      ]
    },
    nav: {
      main: 'негізгі',
      screening: 'скрининг',
      exercises: 'жаттығулар',
      child: 'бала',
      settings: 'баптау',
    },
    recommendations: {
      title: 'Дислексия жаттығулары',
      homework: 'Балаға арналған тапсырмалар',
      methodologies: 'Ата-аналарға арналған әдістемелер',
      save: 'Профильге сақтау',
      saved: 'Сақталды!',
      exercises: {
        syllableReading: 'Күн сайын қысқа буындарды (2-3 әріп) оқуды жаттықтырыңыз.',
        visualErrors: 'Әріп пішінін есте сақтау үшін құмға немесе тұзға әріп жазуды қолданыңыз.',
        phoneticSubstitutions: 'Дыбыстарды ажырату ойындарын ойнаңыз (мысалы, "Дыбысты ұста").',
        poorSpatial: 'Әріптерді теңестіру үшін ірі торлы дәптерлерді пайдаланыңыз.',
      }
    },
    dyslexia: {
      signsTitle: 'Дислексия белгілері',
      signs: [
        'Мағынасы мен дыбысталуы ұқсас сөздерді немесе әріптерді ауыстыру.',
        'Оқу кезінде әріптерді, буындарды және сөздерді ауыстыру немесе айналдыру.',
        'Сөздерді танудағы қиындықтар.',
        'Фактілерді, жаңа ақпаратты есте сақтау қиындығы.',
        'Қозғалыс координациясының бұзылуы, мінез-құлықтағы импульсивтілік.',
        'Өте түсініксіз қолжазба және көптеген қателер.',
        'Дауыстап оқудан немесе жазудан бас тарту.'
      ],
      exercisesTitle: 'Дислексия жаттығулары',
      exercises: [
        { id: 'wordMatch', title: 'Сөздерді сәйкестендіру', desc: 'Дыбысталуы ұқсас, бірақ мағынасы әртүрлі сөздерді табыңыз.', image: 'https://picsum.photos/seed/wordmatch/400/300' },
        { id: 'letterReversal', title: 'Әріптерді тексеру', desc: 'Дұрыс жазылған әріптерді айнадағы бейнелерден ажыратыңыз.', image: 'https://picsum.photos/seed/letter/400/300' },
        { id: 'wordRecognition', title: 'Сөздерді тану', desc: 'Оқуды автоматтандыруға арналған жиі кездесетін сөздері бар карточкалар.', image: 'https://picsum.photos/seed/flashcards/400/300' },
        { id: 'memoryGames', title: 'Есте сақтау ойындары', desc: 'Есте сақтауға және қайталауға арналған қарапайым тізбектер.', image: 'https://picsum.photos/seed/memory/400/300' },
        { id: 'coordination', title: 'Координация', desc: 'Фигураларды сызу немемен қол мен көз координациясына арналған тапсырмалар.', image: 'https://picsum.photos/seed/drill/400/300' },
        { id: 'handwriting', title: 'Жазу практикасы', desc: 'Қателерді көрсете отырып құрылымдалған жазу.', image: 'https://picsum.photos/seed/write/400/300' },
        { id: 'readingAloud', title: 'Дауыстап оқу', desc: 'Сенімділікті арттыруға арналған қысқа қызықты мәтіндер.', image: 'https://picsum.photos/seed/read/400/300' }
      ],
      interactiveData: {
        letterReversal: [
          { options: ['а', 'ә', 'а', 'а'], correct: 'ә' },
          { options: ['о', 'ө', 'о', 'о'], correct: 'ө' },
          { options: ['ұ', 'ү', 'ұ', 'ұ'], correct: 'ү' },
          { options: ['ы', 'і', 'ы', 'ы'], correct: 'і' },
          { options: ['н', 'ң', 'н', 'н'], correct: 'ң' },
          { options: ['ғ', 'г', 'ғ', 'ғ'], correct: 'г' },
          { options: ['қ', 'к', 'қ', 'қ'], correct: 'к' },
          { options: ['һ', 'х', 'һ', 'һ'], correct: 'х' },
          { options: ['і', 'й', 'і', 'і'], correct: 'й' },
          { options: ['у', 'ұ', 'у', 'у'], correct: 'ұ' }
        ],
        wordRecognition: [
          { word: 'АНА', options: ['АНА', 'НАА', 'ААН', 'ННА'], correct: 'АНА' },
          { word: 'ӘКЕ', options: ['ӘКЕ', 'КӘЕ', 'ЕӘК', 'ӘЕК'], correct: 'ӘКЕ' },
          { word: 'БАЛА', options: ['БАЛА', 'АЛАБ', 'ЛАБА', 'БААЛ'], correct: 'БАЛА' },
          { word: 'КІТАП', options: ['КІТАП', 'ПАТІК', 'ТІКАП', 'КІПАТ'], correct: 'КІТАП' },
          { word: 'МЕКТЕП', options: ['МЕКТЕП', 'ПЕТКЕМ', 'ТЕМПЕК', 'МЕКПЕТ'], correct: 'МЕКТЕП' },
          { word: 'ОТАН', options: ['ОТАН', 'НАТО', 'АНОТ', 'ОНАТ'], correct: 'ОТАН' },
          { word: 'ДОС', options: ['ДОС', 'СОД', 'ОДС', 'ДСО'], correct: 'ДОС' },
          { word: 'СУ', options: ['СУ', 'УС', 'СС', 'УУ'], correct: 'СУ' },
          { word: 'НАН', options: ['НАН', 'АНН', 'ННА', 'ААН'], correct: 'НАН' },
          { word: 'АЛМА', options: ['АЛМА', 'МАЛА', 'АЛАМ', 'ААМЛ'], correct: 'АЛМА' }
        ]
      }
    },
    dysgraphia: {
      signsTitle: 'Дисграфия белгілері',
      signs: [
        'Баланың 5-тен ары қарай санауды бастай алмауы.',
        'Есептеу үшін үнемі саусақтарды қолдану.',
        'Математикалық цифрлар мен символдарды жазудағы қателер (6 мен 9-ды, «үлкен» және «кіші» белгілерін, қосу мен көбейтуді шатастыру).',
        'Цифрларды дұрыс жазбау (төменнен жоғары және оңнан солға қарай).',
        'Цифрларды торкөзге сыйғызудағы қиындықтар.',
        'Өте түсініксіз қолжазба және көптеген қателер.',
        'Жазудан немесе дауыстап оқудан бас тарту.'
      ],
      exercisesTitle: 'Дисграфия жаттығулары',
      exercises: [
        { id: 'numMatch', title: 'Цифрларды тану', desc: 'Ұқсас цифрлардың арасынан дұрысын анықтаңыз.', image: 'https://picsum.photos/seed/math/400/300' },
        { id: 'direction', title: 'Жазу бағыты', desc: 'Цифрларды жоғарыдан төмен қарай жазуды жаттықтыру.', image: 'https://picsum.photos/seed/direction/400/300' },
        { id: 'gridFit', title: 'Торкөзге сыйғызу', desc: 'Цифрларды торкөздерге дұрыс орналастыруды жаттықтыру.', image: 'https://picsum.photos/seed/grid/400/300' }
      ]
    },
    recognition: {
      title: 'Тану',
      letterTask: 'Қай әріп өзгеше? Артығын басыңыз.',
      numberTask: 'Қай цифр өзгеше? Артығын басыңыз.',
      back: 'Артқа',
      next: 'Келесі',
      finish: 'Аяқтау',
      riskDetected: 'Қауіп анықталды',
      riskDesc: 'Балаға ұқсас таңбаларды ажырату қиын болды, бұл дислексия немесе дисграфия қаупін көрсетуі мүмкін.',
      noRisk: 'Жарайсың!',
      noRiskDesc: 'Бала тану тапсырмаларын сәтті орындады.',
      letterTasks: [
        { options: ['б', 'б', 'д', 'б'], correct: 'д' },
        { options: ['п', 'q', 'п', 'п'], correct: 'q' },
        { options: ['м', 'м', 'н', 'м'], correct: 'н' },
        { options: ['Ш', 'Ш', 'Щ', 'Ш'], correct: 'Щ' },
        { options: ['О', 'О', 'С', 'О'], correct: 'С' },
        { options: ['Е', 'Е', 'Ё', 'Е'], correct: 'Ё' },
        { options: ['Ь', 'Ь', 'Ъ', 'Ь'], correct: 'Ъ' },
        { options: ['К', 'К', 'Х', 'К'], correct: 'Х' },
        { options: ['Г', 'Г', 'Т', 'Г'], correct: 'Т' },
        { options: ['З', 'З', 'В', 'З'], correct: 'В' }
      ],
      numberTasks: [
        { options: ['6', '6', '9', '6'], correct: '9' },
        { options: ['5', '5', '2', '5'], correct: '2' },
        { options: ['7', '7', '1', '7'], correct: '1' },
        { options: ['3', '3', '8', '3'], correct: '8' },
        { options: ['4', '4', '7', '4'], correct: '7' },
        { options: ['0', '0', '8', '0'], correct: '8' },
        { options: ['1', '1', '7', '1'], correct: '7' },
        { options: ['2', '2', '5', '2'], correct: '5' },
        { options: ['9', '9', '6', '9'], correct: '6' },
        { options: ['8', '8', '3', '8'], correct: '3' }
      ]
    }
  }
};
