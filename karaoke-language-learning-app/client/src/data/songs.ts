import { S } from "vitest/dist/chunks/config.d.D2ROskhv.js";

export interface Song {
  id: string;
  title: string;
  artist: string;
  language: string;
  languageFlag: string;
  difficulty: 'easy' | 'medium' | 'hard';
  bpm: number;
  lyrics: LyricLine[];
  genre: string;
  audioUrl?: string;
  schoolGroup?: string;
  ageRange?: string;
  lyricsSource?: string;
  lyricsLicense?: string;
}

export interface LyricLine {
  time: number; // seconds
  text: string;
  translation: string;
}

export const LANGUAGES = [
  { code: 'es', name: 'španščina', flag: '🇪🇸' },
  { code: 'fr', name: 'francoščina', flag: '🇫🇷' },
  { code: 'ja', name: 'japonščina', flag: '🇯🇵' },
  { code: 'ko', name: 'korejščina', flag: '🇰🇷' },
  { code: 'pt', name: 'portugalščina', flag: '🇧🇷' },
  { code: 'de', name: 'nemščina', flag: '🇩🇪' },
  { code: 'en', name: 'angleščina', flag: '🇺🇸' },
];

export const songs: Song[] = [
  {
  id: 'despacito',
  title: 'Despacito',
  artist: 'Luis Fonsi ft. Daddy Yankee',
  language: 'es',
  languageFlag: '🇪🇸',
  difficulty: 'medium',
  bpm: 89,
  genre: 'Pop Latino',
  audioUrl: '/src/assets/audio/despacito.mp3',
  lyrics: [
    { time: 41.35,  text: 'Sí, sabes que ya llevo un rato mirándote',                  translation: "Yes, you know I've been looking at you for a while" },
    { time: 46.92,  text: 'Tengo que bailar contigo hoy',                              translation: 'I have to dance with you today' },
    { time: 52.24,  text: 'Vi que tu mirada ya estaba llamándome',                     translation: 'I saw your gaze was already calling me' },
    { time: 57.55,  text: 'Muéstrame el camino que yo voy',                            translation: 'Show me the way and I will go' },
    { time: 63.13,  text: 'Oh, tú, tú eres el imán y yo soy el metal',                translation: 'Oh, you, you are the magnet and I am the metal' },
    { time: 66.31,  text: 'Me voy acercando y voy armando el plan',                    translation: "I'm getting closer and putting together the plan" },
    { time: 68.98,  text: 'Solo con pensarlo se acelera el pulso',                     translation: 'Just thinking about it quickens the pulse' },
    { time: 73.75,  text: 'Ya, ya me estás gustando más de lo normal',                 translation: 'Yeah, yeah, I like you more than usual' },
    { time: 77.20,  text: 'Todos mis sentidos van pidiendo más',                       translation: 'All my senses are asking for more' },
    { time: 79.85,  text: 'Esto hay que tomarlo sin ningún apuro',                     translation: 'This must be taken without any rush' },
    { time: 83.31,  text: 'Despacito',                                                 translation: 'Slowly' },
    { time: 85.70,  text: 'Quiero respirar tu cuello despacito',                       translation: 'I want to breathe in your neck slowly' },
    { time: 88.37,  text: 'Deja que te diga cosas al oído',                            translation: 'Let me whisper things in your ear' },
    { time: 91.28,  text: 'Para que te acuerdes si no estás conmigo',                  translation: 'So you remember me when you are not with me' },
    { time: 94.49,  text: 'Despacito',                                                 translation: 'Slowly' },
    { time: 96.60,  text: 'Quiero desnudarte a besos despacito',                       translation: 'I want to undress you in kisses slowly' },
    { time: 99.25,  text: 'Firmar las paredes de tu laberinto',                        translation: 'I sign on the walls of your labyrinth' },
    { time: 101.91, text: 'Y hacer de tu cuerpo todo un manuscrito',                   translation: 'And make your whole body into a manuscript' },
    { time: 105.37, text: 'Sube, sube',                                                translation: 'Go up, go up' },
    { time: 106.42, text: 'Quiero ver bailar tu pelo',                                 translation: 'I want to see your hair dance' },
    { time: 108.55, text: 'Quiero ser tu ritmo',                                       translation: 'I want to be your rhythm' },
    { time: 110.67, text: 'Que le enseñes a mi boca',                                  translation: 'That you teach my mouth' },
    { time: 113.32, text: 'Tus lugares favoritos',                                     translation: 'Your favorite places' },
    { time: 117.31, text: 'Déjame sobrepasar tus zonas de peligro',                    translation: 'Let me go past your danger zones' },
    { time: 121.30, text: 'Hasta provocar tus gritos',                                 translation: 'Until I provoke your screams' },
    { time: 123.95, text: 'Y que olvides tu apellido',                                 translation: 'And you forget your last name' },
    { time: 127.15, text: 'Yo sé que estás pensándolo',                                translation: "I know you're thinking about it" },
    { time: 128.74, text: 'Llevo tiempo intentándolo',                                 translation: "I've been trying for a while" },
    { time: 130.34, text: 'Mami, esto es dando y dándolo',                             translation: 'Baby, this is all about giving and giving' },
    { time: 132.72, text: 'Sabes que tu corazón conmigo te hace bam bam',              translation: 'You know your heart goes bam-bam with me' },
    { time: 135.91, text: "Sabe que esa beba 'tá buscando de mi bam bam",              translation: 'You know that girl is looking for my bam-bam' },
    { time: 138.03, text: 'Ven prueba de mi boca para ver cómo te sabe',               translation: 'Come taste my mouth to see how it tastes to you' },
    { time: 140.95, text: 'Quiero, quiero, quiero ver cuánto amor a ti te cabe',       translation: 'I want, I want, I want to see how much love fits in you' },
    { time: 143.61, text: 'Yo no tengo prisa, yo me quiero dar el viaje',              translation: "I'm not in a hurry, I want to take the journey" },
    { time: 146.28, text: "Empezamo' lento, después salvaje",                          translation: 'We start slow, then wild' },
    { time: 148.93, text: 'Pasito a pasito, suave suavecito',                          translation: 'Step by step, soft and slowly' },
    { time: 151.58, text: 'Nos vamos pegando poquito a poquito',                       translation: "We're getting closer little by little" },
    { time: 154.24, text: 'Cuando tú me besas con esa destreza',                       translation: 'When you kiss me with that skill' },
    { time: 157.16, text: 'Veo que eres malicia con delicadeza',                       translation: 'I see you are mischief with delicacy' },
    { time: 159.82, text: 'Pasito a pasito, suave suavecito',                          translation: 'Step by step, soft and slowly' },
    { time: 162.74, text: 'Nos vamos pegando, poquito a poquito',                      translation: "We're getting closer little by little" },
    { time: 165.39, text: 'Y es que esa belleza es un rompecabezas',                   translation: 'And that beauty is a puzzle' },
    { time: 168.05, text: "Pero pa' montarlo aquí tengo la pieza",                     translation: 'But I have the piece to put it together here' },
    { time: 171.25, text: 'Despacito',                                                 translation: 'Slowly' },
    { time: 173.36, text: 'Quiero respirar tu cuello despacito',                       translation: 'I want to breathe in your neck slowly' },
    { time: 175.75, text: 'Deja que te diga cosas al oído',                            translation: 'Let me whisper things in your ear' },
    { time: 178.41, text: 'Para que te acuerdes si no estás conmigo',                  translation: 'So you remember me when you are not with me' },
    { time: 181.60, text: 'Despacito',                                                 translation: 'Slowly' },
    { time: 183.73, text: 'Quiero desnudarte a besos despacito',                       translation: 'I want to undress you in kisses slowly' },
    { time: 186.65, text: 'Firmar las paredes de tu laberinto',                        translation: 'I sign on the walls of your labyrinth' },
    { time: 189.30, text: 'Y hacer de tu cuerpo todo un manuscrito',                   translation: 'And make your whole body into a manuscript' },
    { time: 193.55, text: 'Sube, sube',                                                translation: 'Go up, go up' },
    { time: 194.35, text: 'Quiero ver bailar tu pelo',                                 translation: 'I want to see your hair dance' },
    { time: 197.28, text: 'Quiero ser tu ritmo',                                       translation: 'I want to be your rhythm' },
    { time: 198.06, text: 'Que le enseñes a mi boca',                                  translation: 'That you teach my mouth' },
    { time: 200.72, text: 'Tus lugares favoritos',                                     translation: 'Your favorite places' },
    { time: 204.97, text: 'Déjame sobrepasar tus zonas de peligro',                    translation: 'Let me go past your danger zones' },
    { time: 208.69, text: 'Hasta provocar tus gritos',                                 translation: 'Until I provoke your screams' },
    { time: 211.61, text: 'Y que olvides tu apellido',                                 translation: 'And you forget your last name' },
    { time: 214.53, text: 'Despacito',                                                 translation: 'Slowly' },
    { time: 216.39, text: "Vamo' a hacerlo en una playa en Puerto Rico",               translation: "Let's do it on a beach in Puerto Rico" },
    { time: 219.04, text: 'Hasta que las olas griten "Ay, bendito"',                   translation: 'Until the waves shout "Oh goodness"' },
    { time: 221.70, text: 'Para que mi sello se quede contigo',                        translation: 'So that my mark stays with you' },
    { time: 225.68, text: 'Pasito a pasito, suave suavecito',                          translation: 'Step by step, soft and slowly' },
    { time: 228.62, text: 'Nos vamos pegando, poquito a poquito',                      translation: "We're getting closer little by little" },
    { time: 231.27, text: 'Que le enseñes a mi boca',                                  translation: 'That you teach my mouth' },
    { time: 233.13, text: 'Tus lugares favoritos',                                     translation: 'Your favorite places' },
    { time: 236.85, text: 'Pasito a pasito, suave suavecito',                          translation: 'Step by step, soft and slowly' },
    { time: 239.24, text: 'Nos vamos pegando, poquito a poquito',                      translation: "We're getting closer little by little" },
    { time: 241.37, text: 'Hasta provocar tus gritos',                                 translation: 'Until I provoke your screams' },
    { time: 244.02, text: 'Y que olvides tu apellido',                                 translation: 'And you forget your last name' },
    { time: 246.68, text: 'Despacito',                                                 translation: 'Slowly' },
  ],
},
  {
    id: 'la-vie-en-rose',
    title: 'La Vie en Rose',
    artist: 'Édith Piaf',
    language: 'fr',
    languageFlag: '🇫🇷',
    difficulty: 'easy',
    bpm: 66,
    genre: 'Chanson',
    lyrics: [
      { time: 0, text: "Quand il me prend dans ses bras", translation: 'When he takes me in his arms' },
      { time: 4, text: "Il me parle tout bas", translation: 'He speaks to me softly' },
      { time: 7, text: "Je vois la vie en rose", translation: 'I see life in pink' },
      { time: 11, text: "Il me dit des mots d'amour", translation: 'He tells me words of love' },
      { time: 15, text: "Des mots de tous les jours", translation: 'Everyday words' },
      { time: 19, text: "Et ça me fait quelque chose", translation: 'And it does something to me' },
      { time: 23, text: "Il est entré dans mon cœur", translation: 'He entered my heart' },
      { time: 27, text: "Une part de bonheur", translation: 'A part of happiness' },
      { time: 31, text: "Dont je connais la cause", translation: 'Whose cause I know' },
    ],
  },
  {
    id: 'sakura',
    title: 'Sakura Sakura',
    artist: 'Traditional',
    language: 'ja',
    languageFlag: '🇯🇵',
    difficulty: 'hard',
    bpm: 72,
    genre: 'Traditional',
    lyrics: [
      { time: 0, text: 'さくら さくら', translation: 'Cherry blossoms, cherry blossoms' },
      { time: 4, text: '野山も里も', translation: 'Over fields and hills' },
      { time: 8, text: '見渡す限り', translation: 'As far as you can see' },
      { time: 12, text: '霞か雲か', translation: 'Is it mist or clouds?' },
      { time: 16, text: '朝日に匂う', translation: 'Fragrant in the morning sun' },
      { time: 20, text: 'さくら さくら', translation: 'Cherry blossoms, cherry blossoms' },
      { time: 24, text: '花盛り', translation: 'Flowers in full bloom' },
    ],
  },
  {
    id: 'gangnam',
    title: 'Gangnam Style',
    artist: 'PSY',
    language: 'ko',
    languageFlag: '🇰🇷',
    difficulty: 'hard',
    bpm: 132,
    genre: 'K-Pop',
    lyrics: [
      { time: 0, text: '오빤 강남스타일', translation: "Oppa is Gangnam style" },
      { time: 3, text: '강남스타일', translation: 'Gangnam style' },
      { time: 5, text: '낮에는 따사로운 인간적인 여자', translation: 'A girl who is warm during the day' },
      { time: 9, text: '커피 한잔의 여유를 아는 품격 있는 여자', translation: 'A classy girl who knows the leisure of a cup of coffee' },
      { time: 14, text: '밤이 오면 심장이 뜨거워지는 여자', translation: 'A girl whose heart gets hot when night comes' },
      { time: 18, text: '그런 반전 있는 여자', translation: 'A girl with that twist' },
    ],
  },
  {
    id: 'garota',
    title: 'Garota de Ipanema',
    artist: 'Tom Jobim',
    language: 'pt',
    languageFlag: '🇧🇷',
    difficulty: 'medium',
    bpm: 80,
    genre: 'Bossa Nova',
    lyrics: [
      { time: 0, text: 'Olha que coisa mais linda', translation: 'Look, what a beautiful thing' },
      { time: 4, text: 'Mais cheia de graça', translation: 'More full of grace' },
      { time: 7, text: 'É ela menina', translation: "It's that girl" },
      { time: 10, text: 'Que vem e que passa', translation: 'Who comes and who passes' },
      { time: 13, text: 'Num doce balanço a caminho do mar', translation: 'In a sweet sway on her way to the sea' },
      { time: 18, text: 'Moça do corpo dourado do sol de Ipanema', translation: 'Girl with a golden body from the sun of Ipanema' },
      { time: 23, text: 'O seu balançado é mais que um poema', translation: 'Her sway is more than a poem' },
    ],
  },
  {
    id: '99-luftballons',
    title: '99 Luftballons',
    artist: 'Nena',
    language: 'de',
    languageFlag: '🇩🇪',
    difficulty: 'medium',
    bpm: 180,
    genre: 'New Wave',
    lyrics: [
      { time: 0, text: 'Hast du etwas Zeit für mich', translation: 'Do you have some time for me' },
      { time: 3, text: 'Dann singe ich ein Lied für dich', translation: "Then I'll sing a song for you" },
      { time: 6, text: 'Von 99 Luftballons', translation: 'About 99 balloons' },
      { time: 9, text: 'Auf ihrem Weg zum Horizont', translation: 'On their way to the horizon' },
      { time: 12, text: 'Denkst du vielleicht grad an mich', translation: 'Are you perhaps thinking of me right now' },
      { time: 15, text: 'Dann singe ich ein Lied für dich', translation: "Then I'll sing a song for you" },
      { time: 18, text: 'Von 99 Luftballons', translation: 'About 99 balloons' },
      { time: 21, text: 'Und dass so was von so was kommt', translation: 'And that something like this comes from something like that' },
    ],
  },
  {
    id: 'die-with-a-smile',
    title: 'Die With A Smile',
    artist: 'Lady Gaga & Bruno Mars',
    language: 'en',
    languageFlag: '🇺🇸',
    difficulty: 'easy',
    bpm: 72,
    genre: 'Pop',
    audioUrl: '/src/assets/audio/die-with-a-smile.mp3',
    lyrics: [
      { time: 8.63,  text: "I, I just woke up from a dream",                                    translation: "" },
      { time: 15.56, text: "Where you and I had to say goodbye",                                 translation: "" },
      { time: 20.27, text: "And I don't know what it all means",                                 translation: "" },
      { time: 24.78, text: "But since I survived I realized",                                    translation: "" },
      { time: 29.07, text: "Wherever you go that's where I'll follow",                           translation: "" },
      { time: 33.87, text: "Nobody's promised tomorrow",                                         translation: "" },
      { time: 38.50, text: "So imma love you every night like it's the last night",              translation: "" },
      { time: 42.54, text: "Like it's the last night",                                           translation: "" },
      { time: 44.71, text: "If the world was ending I'd wanna be next to you",                  translation: "" },
      { time: 53.68, text: "If the party was over and our time on earth was through",            translation: "" },
      { time: 62.77, text: "I'd wanna hold you just for a while",                               translation: "" },
      { time: 67.44, text: "And die with a smile",                                               translation: "" },
      { time: 71.99, text: "If the world was ending I'd wanna be next to you",                  translation: "" },
      { time: 81.04, text: "Woo ooh",                                                            translation: "" },
      { time: 85.08, text: "Ooh lost",                                                           translation: "" },
      { time: 88.59, text: "Lost in the words that we scream",                                   translation: "" },
      { time: 92.84, text: "I don't even wanna do this anymore",                                 translation: "" },
      { time: 97.64, text: "Cuz you already know what you mean to me",                           translation: "" },
      { time: 101.23, text: "And our love is the only war worth fighting for",                   translation: "" },
      { time: 106.82, text: "Wherever you go that's where I'll follow",                          translation: "" },
      { time: 111.44, text: "Nobody's promised tomorrow",                                        translation: "" },
      { time: 115.91, text: "So imma love you every night like it's the last night",             translation: "" },
      { time: 119.83, text: "Like it's the last night",                                          translation: "" },
      { time: 122.29, text: "If the world was ending I'd wanna be next to you",                 translation: "" },
      { time: 131.17, text: "If the party was over",                                             translation: "" },
      { time: 133.92, text: "And our time on earth was through",                                 translation: "" },
      { time: 140.22, text: "I'd wanna hold you",                                               translation: "" },
      { time: 142.60, text: "Just for a while",                                                  translation: "" },
      { time: 144.81, text: "And die with a smile",                                              translation: "" },
      { time: 149.57, text: "If the world was ending I'd wanna be next to you",                 translation: "" },
      { time: 158.12, text: "Right next to you",                                                 translation: "" },
      { time: 162.95, text: "Next to you",                                                       translation: "" },
      { time: 167.46, text: "Right next to you",                                                 translation: "" },
      { time: 190.48, text: "If the world was ending I'd wanna be next to you",                 translation: "" },
      { time: 199.57, text: "If the party was over and our time on earth was through",           translation: "" },
      { time: 208.67, text: "I'd wanna hold you just for a while",                              translation: "" },
      { time: 213.34, text: "And die with a smile",                                              translation: "" },
      { time: 217.97, text: "If the world was ending I'd wanna be next to you",                 translation: "" },
      { time: 226.68, text: "If the world was ending I'd wanna be next to you",                 translation: "" },
      { time: 239.24, text: "I'd wanna be next to you",                                         translation: "" },
    ],
  },

  // 1. KINDERGARTEN (3–6)
// Twinkle, Twinkle, Little Star — Jane Taylor (1806)
// Public domain

  {
    id: 'twinkle-twinkle',
    title: 'Twinkle, Twinkle, Little Star',
    artist: 'Jane Taylor / Traditional',
    language: 'en',
    languageFlag: '🇺🇸',
    difficulty: 'easy',
    bpm: 90,
    genre: 'Nursery Rhyme',
    schoolGroup: 'Kindergarten',
    ageRange: '3–6',
    lyricsSource: 'https://en.wikisource.org/wiki/Rhymes_for_the_Nursery/The_Star',
    lyricsLicense: 'Public Domain',
    lyrics: [
      { time: 0, text: 'Twinkle, twinkle, little star,', translation: 'Svetlikaj, svetlikaj, zvezdica,' },
      { time: 3, text: 'How I wonder what you are!', translation: 'Kako se sprašujem, kaj si!' },
      { time: 6, text: 'Up above the world so high,', translation: 'Visoko nad svetom,' },
      { time: 9, text: 'Like a diamond in the sky.', translation: 'Kot diamant na nebu.' },
      { time: 12, text: 'Twinkle, twinkle, little star,', translation: 'Svetlikaj, svetlikaj, zvezdica,' },
      { time: 15, text: 'How I wonder what you are!', translation: 'Kako se sprašujem, kaj si!' },

      { time: 18, text: 'When the blazing sun is gone,', translation: 'Ko žareče sonce zaide,' },
      { time: 21, text: 'When he nothing shines upon,', translation: 'Ko ničesar več ne osvetljuje,' },
      { time: 24, text: 'Then you show your little light,', translation: 'Takrat pokažeš svojo lučko,' },
      { time: 27, text: 'Twinkle, twinkle, all the night.', translation: 'Svetlikaš se vso noč.' }
    ]
  },

// 2. LOWER PRIMARY (6–9)
// Mary Had a Little Lamb — Sarah Josepha Hale (1830)
// Public domain

  {
    id: 'mary-had-a-little-lamb',
    title: 'Mary Had a Little Lamb',
    artist: 'Sarah Josepha Hale / Traditional',
    language: 'en',
    languageFlag: '🇺🇸',
    difficulty: 'easy',
    bpm: 100,
    genre: 'Children',
    schoolGroup: 'Lower Primary',
    ageRange: '6–9',
    lyricsSource: 'https://nurseryrhymescollections.com/songs/mary-had-a-little-lamb/',
    lyricsLicense: 'Public Domain',
    lyrics: [
      { time: 0, text: 'Mary had a little lamb,', translation: 'Mary je imela majhno jagnje,' },
      { time: 3, text: 'Little lamb, little lamb,', translation: 'Majhno jagnje, majhno jagnje,' },
      { time: 6, text: 'Mary had a little lamb,', translation: 'Mary je imela majhno jagnje,' },
      { time: 9, text: 'Its fleece was white as snow.', translation: 'Njegova volna je bila bela kot sneg.' },

      { time: 13, text: 'And everywhere that Mary went,', translation: 'In kamorkoli je Mary šla,' },
      { time: 16, text: 'Mary went, Mary went,', translation: 'Mary je šla, Mary je šla,' },
      { time: 19, text: 'Everywhere that Mary went,', translation: 'Kamorkoli je Mary šla,' },
      { time: 22, text: 'The lamb was sure to go.', translation: 'Jagnje ji je vedno sledilo.' },

      { time: 26, text: 'It followed her to school one day,', translation: 'Nekega dne ji je sledilo v šolo,' },
      { time: 29, text: 'School one day, school one day,', translation: 'Nekega dne v šolo,' },
      { time: 32, text: 'It followed her to school one day,', translation: 'Nekega dne ji je sledilo v šolo,' },
      { time: 35, text: 'Which was against the rule.', translation: 'Čeprav je bilo to proti pravilom.' }
    ]
  },

// 3. UPPER PRIMARY (9–12)
// Hot Cross Buns — Traditional English song (printed in 1798)
// Public domain

  {
    id: 'hot-cross-buns',
    title: 'Hot Cross Buns',
    artist: 'Traditional',
    language: 'en',
    languageFlag: '🇺🇸',
    difficulty: 'easy',
    bpm: 110,
    genre: 'Traditional Children Song',
    schoolGroup: 'Upper Primary',
    ageRange: '9–12',
    lyricsSource: 'https://music.aurasense.ai/credits/',
    lyricsLicense: 'Public Domain',
    lyrics: [
      { time: 0, text: 'Hot cross buns!', translation: 'Vroče žemljice!' },
      { time: 2, text: 'Hot cross buns!', translation: 'Vroče žemljice!' },
      { time: 4, text: 'One a penny, two a penny,', translation: 'Ena za peni, dve za peni,' },
      { time: 7, text: 'Hot cross buns!', translation: 'Vroče žemljice!' },

      { time: 10, text: 'If you have no daughters,', translation: 'Če nimaš hčera,' },
      { time: 13, text: 'Give them to your sons.', translation: 'Jih daj svojim sinovom.' },
      { time: 16, text: 'One a penny, two a penny,', translation: 'Ena za peni, dve za peni,' },
      { time: 19, text: 'Hot cross buns!', translation: 'Vroče žemljice!' }
    ]
  },

// 4. LOWER SECONDARY (12–15)
// Auld Lang Syne — Robert Burns (1788)
// Public domain

  {
    id: 'auld-lang-syne',
    title: 'Auld Lang Syne',
    artist: 'Robert Burns / Traditional Scottish',
    language: 'en',
    languageFlag: '🏴',
    difficulty: 'medium',
    bpm: 80,
    genre: 'Traditional Folk',
    schoolGroup: 'Lower Secondary',
    ageRange: '12–15',
    lyricsSource: 'https://poets.org/poem/auld-lang-syne',
    lyricsLicense: 'Public Domain',
    lyrics: [
      { time: 0, text: 'Should auld acquaintance be forgot,', translation: 'Naj pozabimo stara poznanstva,' },
      { time: 4, text: 'And never brought to mind?', translation: 'In jih nikoli več ne obudimo?' },
      { time: 8, text: 'Should auld acquaintance be forgot,', translation: 'Naj pozabimo stara poznanstva,' },
      { time: 12, text: 'And auld lang syne!', translation: 'In stare čase!' },

      { time: 16, text: 'For auld lang syne, my dear,', translation: 'Za stare čase, dragi moj,' },
      { time: 20, text: 'For auld lang syne,', translation: 'Za stare čase,' },
      { time: 24, text: "We'll tak a cup o' kindness yet,", translation: 'Še nazdravimo s prijaznostjo,' },
      { time: 28, text: 'For auld lang syne.', translation: 'Za stare čase.' },

      { time: 32, text: 'We twa hae run about the braes,', translation: 'Midva sva tekala po pobočjih,' },
      { time: 36, text: "And pou'd the gowans fine;", translation: 'In nabirala lepe marjetice;' },
      { time: 40, text: "But we've wander'd mony a weary fit,", translation: 'Prehodila sva že mnogo utrujenih korakov,' },
      { time: 44, text: "Sin' auld lang syne.", translation: 'Od starih časov.' }
    ]
  },

// 5. UPPER SECONDARY (15–19)
// Amazing Grace — John Newton (1779)
// Public domain

  {
    id: 'amazing-grace',
    title: 'Amazing Grace',
    artist: 'John Newton / Traditional',
    language: 'en',
    languageFlag: '🇺🇸',
    difficulty: 'medium',
    bpm: 75,
    genre: 'Traditional Hymn',
    schoolGroup: 'Upper Secondary',
    ageRange: '15–19',
    lyricsSource: 'https://www.hymnary.org/text/amazing_grace_how_sweet_the_sound',
    lyricsLicense: 'Public Domain',
    lyrics: [
      { time: 0, text: 'Amazing grace! How sweet the sound', translation: 'Čudovita milost! Kako sladko zveni,' },
      { time: 5, text: 'That saved a wretch like me!', translation: 'Ki je rešila grešnika, kot sem jaz!' },
      { time: 10, text: 'I once was lost, but now am found;', translation: 'Nekoč sem bil izgubljen, zdaj pa sem najden;' },
      { time: 15, text: 'Was blind, but now I see.', translation: 'Bil sem slep, zdaj pa vidim.' },

      { time: 20, text: "'Twas grace that taught my heart to fear,", translation: 'Milost me je naučila strahospoštovanja,' },
      { time: 25, text: 'And grace my fears relieved;', translation: 'In milost je odpravila moje strahove;' },
      { time: 30, text: 'How precious did that grace appear', translation: 'Kako dragocena se je zdela ta milost,' },
      { time: 35, text: 'The hour I first believed.', translation: 'V trenutku, ko sem prvič verjel.' },

      { time: 40, text: 'Through many dangers, toils and snares,', translation: 'Skozi mnoge nevarnosti, napore in pasti,' },
      { time: 45, text: 'I have already come;', translation: 'Sem že prišel;' },
      { time: 50, text: "'Tis grace hath brought me safe thus far,", translation: 'Milost me je varno pripeljala do sem,' },
      { time: 55, text: "And grace will lead me home.", translation: 'In milost me bo vodila domov.' },

      { time: 60, text: 'The Lord has promised good to me,', translation: 'Gospod mi je obljubil dobro,' },
      { time: 65, text: 'His word my hope secures;', translation: 'Njegova beseda mi daje upanje;' },
      { time: 70, text: 'He will my shield and portion be,', translation: 'On bo moj ščit in moja opora,' },
      { time: 75, text: 'As long as life endures.', translation: 'Dokler bo trajalo življenje.' }
    ]
  },

];
