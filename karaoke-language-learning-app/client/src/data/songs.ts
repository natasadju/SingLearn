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


// 2. LOWER PRIMARY (6–9)
// Happy Pharrell Williams

  {
    id: 'happy-pharrell-williams',
    title: 'Happy',
    artist: 'Pharrell Williams',
    language: 'en',
    languageFlag: '🇺🇸',
    difficulty: 'medium',
    bpm: 160,
    genre: 'Pop',
    schoolGroup: 'Lower Primary',
    ageRange: '7-9',
    lyricsSource: 'https://www.youtube.com/watch?v=ZbZSe6N_BXs',
    lyricsLicense: 'Copyrighted',
    lyrics: [
      // Verse 1
      { time: 5.02, text: "It might seem crazy what I'm 'bout to say, sunshine, she's here, you can take a break", translation: "Morda se zdi noro, kar bom zdaj povedal. Sonček je tukaj, lahko si vzameš odmor." },
      { time: 16.14, text: "I'm a hot air balloon that could go to space, with the air, like I don't care, baby, by the way", translation: "Sem balon na vroč zrak, ki bi lahko poletel v vesolje. Lebdim v zraku, kot da mi je vseeno, mimogrede." },

      // Chorus 1
      { time: 27.15, text: "Because I'm happy, clap along if you feel like a room without a roof", translation: "Ker sem srečen, zaploskaj, če se počutiš kot soba brez strehe." },
      { time: 33.56, text: "Because I'm happy, clap along if you feel like happiness is the truth", translation: "Ker sem srečen, zaploskaj, če čutiš, da je sreča resnična." },
      { time: 39.45, text: "Because I'm happy, clap along if you know what happiness is to you", translation: "Ker sem srečen, zaploskaj, če veš, kaj sreča pomeni zate." },
      { time: 45.53, text: "Because I'm happy, clap along if you feel like that's what you wanna do", translation: "Ker sem srečen, zaploskaj, če si to želiš početi." },

      // Verse 2
      { time: 53.01, text: "Here come bad news, talking this and that", translation: "Prihajajo slabe novice, govorijo vse mogoče." },
      { time: 58.64, text: "Yeah, give me all you got, and don't hold it back", translation: "Ja, daj mi vse, kar imaš, in ničesar ne zadržuj." },
      { time: 64.15, text: "Yeah, well, I should probably warn you, I'll be just fine", translation: "Ja, verjetno bi te moral opozoriti, da bom čisto v redu." },
      { time: 70.15, text: "Yeah, no offense to you, don't waste your time, here's why", translation: "Ja, brez zamere, ne izgubljaj časa, tukaj je razlog." },

      // Chorus 2
      { time: 75.69, text: "Because I'm happy, clap along if you feel like a room without a roof", translation: "Ker sem srečen, zaploskaj, če se počutiš kot soba brez strehe." },
      { time: 81.67, text: "Because I'm happy, clap along if you feel like happiness is the truth", translation: "Ker sem srečen, zaploskaj, če čutiš, da je sreča resnična." },
      { time: 87.58, text: "Because I'm happy, clap along if you know what happiness is to you", translation: "Ker sem srečen, zaploskaj, če veš, kaj sreča pomeni zate." },
      { time: 93.57, text: "Because I'm happy, clap along if you feel like that's what you wanna do", translation: "Ker sem srečen, zaploskaj, če si to želiš početi." },

      // Bridge 1
      { time: 99.43, text: "Hey, go, uh, happy, bring me down, can't nothin', happy, bring me down", translation: "Hej, dajmo! Srečen sem, nič me ne more potolči, nič me ne more spraviti na tla." },
      { time: 105.59, text: "My level's too high, happy, to bring me down, can't nothin', happy, bring me down", translation: "Moje razpoloženje je previsoko, da bi me lahko kdo potolkel. Nič me ne more spraviti na tla." },
      { time: 111.13, text: "I said, let me tell you now, uh, bring me down, can't nothin', bring me down", translation: "Pravim, naj ti zdaj povem: nič me ne more potolči, nič me ne more spraviti na tla." },
      { time: 117.48, text: "My level's too high to bring me down, can't nothin' bring me down, I said", translation: "Moje razpoloženje je previsoko, da bi me lahko kdo potolkel. Pravim, nič me ne more spraviti na tla." },

      // Chorus 3
      { time: 123.67, text: "Because I'm happy, clap along if you feel like a room without a roof", translation: "Ker sem srečen, zaploskaj, če se počutiš kot soba brez strehe." },
      { time: 129.59, text: "Because I'm happy, clap along if you feel like happiness is the truth", translation: "Ker sem srečen, zaploskaj, če čutiš, da je sreča resnična." },
      { time: 135.49, text: "Because I'm happy, clap along if you know what happiness is to you", translation: "Ker sem srečen, zaploskaj, če veš, kaj sreča pomeni zate." },
      { time: 141.45, text: "Because I'm happy, clap along if you feel like that's what you wanna do", translation: "Ker sem srečen, zaploskaj, če si to želiš početi." },

      // Chorus 4
      { time: 147.42, text: "Because I'm happy, clap along if you feel like a room without a roof", translation: "Ker sem srečen, zaploskaj, če se počutiš kot soba brez strehe." },
      { time: 153.56, text: "Because I'm happy, clap along if you feel like happiness is the truth", translation: "Ker sem srečen, zaploskaj, če čutiš, da je sreča resnična." },
      { time: 159.57, text: "Because I'm happy, clap along if you know what happiness is to you", translation: "Ker sem srečen, zaploskaj, če veš, kaj sreča pomeni zate." },
      { time: 165.55, text: "Because I'm happy, clap along if you feel like that's what you wanna do", translation: "Ker sem srečen, zaploskaj, če si to želiš početi." },

      // Bridge 2
      { time: 171.52, text: "Hey, go, uh, bring me down, can't nothin', bring me down", translation: "Hej, dajmo! Nič me ne more potolči, nič me ne more spraviti na tla." },
      { time: 177.54, text: "My level's too high to bring me down, can't nothin' bring me down, I said", translation: "Moje razpoloženje je previsoko, da bi me lahko kdo potolkel. Pravim, nič me ne more spraviti na tla." },

      // Final choruses
      { time: 183.62, text: "Because I'm happy, clap along if you feel like a room without a roof", translation: "Ker sem srečen, zaploskaj, če se počutiš kot soba brez strehe." },
      { time: 189.58, text: "Because I'm happy, clap along if you feel like happiness is the truth", translation: "Ker sem srečen, zaploskaj, če čutiš, da je sreča resnična." },
      { time: 195.65, text: "Because I'm happy, clap along if you know what happiness is to you, eh, eh, eh", translation: "Ker sem srečen, zaploskaj, če veš, kaj sreča pomeni zate." },
      { time: 201.78, text: "Because I'm happy, clap along if you feel like that's what you wanna do", translation: "Ker sem srečen, zaploskaj, če si to želiš početi." },

      { time: 207.58, text: "Because I'm happy, clap along if you feel like a room without a roof", translation: "Ker sem srečen, zaploskaj, če se počutiš kot soba brez strehe." },
      { time: 213.65, text: "Because I'm happy, clap along if you feel like happiness is the truth", translation: "Ker sem srečen, zaploskaj, če čutiš, da je sreča resnična." },
      { time: 219.63, text: "Because I'm happy, clap along if you know what happiness is to you, uh, hey", translation: "Ker sem srečen, zaploskaj, če veš, kaj sreča pomeni zate." },
      { time: 225.77, text: "Because I'm happy, clap along if you feel like that's what you wanna do, huh, come on", translation: "Ker sem srečen, zaploskaj, če si to želiš početi. Hej, dajmo!" }
    ].map(line => ({
      ...line,
      time: line.time + 1
    }))
  },

// 3. UPPER PRIMARY (9–12)
// Try Everything – Shakira

  {
    id: 'try-everything',
    title: 'Try Everything',
    artist: 'Shakira',
    language: 'en',
    languageFlag: '🇺🇸',
    difficulty: 'medium',
    bpm: 115,
    genre: 'Pop',
    schoolGroup: 'Upper Primary',
    ageRange: '9–12',
    lyrics: [
      // Intro
      { time: 0.39, text: "Oh, oh, oh, oh, oh", translation: "Oh, oh, oh, oh, oh" },
      { time: 4.35, text: "Oh, oh, oh, oh, oh", translation: "Oh, oh, oh, oh, oh" },
      { time: 8.52, text: "Oh, oh, oh, oh, oh", translation: "Oh, oh, oh, oh, oh" },
      { time: 12.68, text: "Oh, oh, oh, oh, oh", translation: "Oh, oh, oh, oh, oh" },

      // Verse 1
      { time: 15.80, text: "I messed up tonight, I lost another fight", translation: "Nocoj sem naredila napako, izgubila sem še en boj." },
      { time: 19.94, text: "I still mess up but I'll just start again", translation: "Še vedno delam napake, ampak bom preprosto začela znova." },
      { time: 23.86, text: "I keep falling down, I keep on hitting the ground", translation: "Vedno znova padam in se zaletavam ob tla." },
      { time: 28.12, text: "But I always get up now to see what's next", translation: "Ampak vedno znova vstanem, da vidim, kaj me čaka." },

      // Pre-Chorus
      { time: 33.53, text: "Birds don't just fly, they fall down and get up", translation: "Ptice ne znajo samo leteti, tudi padejo in znova vstanejo." },
      { time: 41.67, text: "Nobody learns without getting it wrong", translation: "Nihče se ne nauči ničesar, ne da bi delal napake." },

      // Chorus 1
      { time: 49.33, text: "I won't give up, no, I won't give in", translation: "Ne bom odnehala, ne, ne bom se predala." },
      { time: 52.36, text: "Till I reach the end and then I'll start again", translation: "Dokler ne pridem do konca, potem pa bom začela znova." },
      { time: 57.19, text: "No, I won't leave, I wanna try everything", translation: "Ne, ne bom odšla, želim poskusiti vse." },
      { time: 61.25, text: "I wanna try even though I could fail", translation: "Želim poskusiti, čeprav mi lahko spodleti." },
      { time: 65.91, text: "I won't give up, no, I won't give in", translation: "Ne bom odnehala, ne, ne bom se predala." },
      { time: 69.19, text: "Till I reach the end and then I'll start again", translation: "Dokler ne pridem do konca, potem pa bom začela znova." },
      { time: 73.62, text: "No, I won't leave, I wanna try everything", translation: "Ne, ne bom odšla, želim poskusiti vse." },
      { time: 77.82, text: "I wanna try even though I could fail", translation: "Želim poskusiti, čeprav mi lahko spodleti." },

      // Refrain 1
      { time: 83.44, text: "Oh, oh, oh, oh, oh", translation: "Oh, oh, oh, oh, oh" },
      { time: 86.06, text: "Try everything", translation: "Poskusi vse." },
      { time: 87.32, text: "Oh, oh, oh, oh, oh", translation: "Oh, oh, oh, oh, oh" },
      { time: 90.17, text: "Try everything", translation: "Poskusi vse." },
      { time: 91.47, text: "Oh, oh, oh, oh, oh", translation: "Oh, oh, oh, oh, oh" },
      { time: 93.92, text: "Try everything", translation: "Poskusi vse." },
      { time: 95.59, text: "Oh, oh, oh, oh, oh", translation: "Oh, oh, oh, oh, oh" },

      // Verse 2
      { time: 99.33, text: "Look how far you've come, you filled your heart with love", translation: "Poglej, kako daleč si prišel, svoje srce si napolnil z ljubeznijo." },
      { time: 102.98, text: "Baby, you've done enough, take a deep breath", translation: "Dovolj si naredil, globoko vdihni." },
      { time: 107.23, text: "Don't beat yourself up, don't need to run so fast", translation: "Ne bodi tako strog do sebe, ni ti treba tako hiteti." },
      { time: 111.33, text: "Sometimes we come last, but we did our best", translation: "Včasih končamo zadnji, a dali smo vse od sebe." },

      // Chorus 2
      { time: 115.77, text: "I won't give up, no, I won't give in", translation: "Ne bom odnehala, ne, ne bom se predala." },
      { time: 119.31, text: "Till I reach the end and then I'll start again", translation: "Dokler ne pridem do konca, potem pa bom začela znova." },
      { time: 123.48, text: "No, I won't leave, I wanna try everything", translation: "Ne, ne bom odšla, želim poskusiti vse." },
      { time: 127.67, text: "I wanna try even though I could fail", translation: "Želim poskusiti, čeprav mi lahko spodleti." },
      { time: 132.45, text: "I won't give up, no, I won't give in", translation: "Ne bom odnehala, ne, ne bom se predala." },
      { time: 135.77, text: "Till I reach the end and then I'll start again", translation: "Dokler ne pridem do konca, potem pa bom začela znova." },
      { time: 140.14, text: "No, I won't leave, I wanna try everything", translation: "Ne, ne bom odšla, želim poskusiti vse." },
      { time: 144.30, text: "I wanna try even though I could fail", translation: "Želim poskusiti, čeprav mi lahko spodleti." },

      // Bridge
      { time: 150.04, text: "I'll keep on making those new mistakes", translation: "Še naprej bom delala nove napake." },
      { time: 157.95, text: "I'll keep on making them every day", translation: "Še naprej jih bom delala vsak dan." },
      { time: 166.09, text: "Those new mistakes", translation: "Te nove napake." },

      // Final Refrain
      { time: 170.61, text: "Oh, oh, oh, oh, oh", translation: "Oh, oh, oh, oh, oh" },
      { time: 173.23, text: "Try everything", translation: "Poskusi vse." },
      { time: 174.61, text: "Oh, oh, oh, oh, oh", translation: "Oh, oh, oh, oh, oh" },
      { time: 177.15, text: "Try everything", translation: "Poskusi vse." },
      { time: 178.71, text: "Oh, oh, oh, oh, oh", translation: "Oh, oh, oh, oh, oh" },
      { time: 181.47, text: "Try everything", translation: "Poskusi vse." },
      { time: 182.91, text: "Oh, oh, oh, oh, oh", translation: "Oh, oh, oh, oh, oh" },
      { time: 187.24, text: "Try everything", translation: "Poskusi vse." }
    ]
  },

// 4. LOWER SECONDARY (12–15)
// Hall of Fame – The Script

  {
    id: 'hall-of-fame',
    title: 'Hall of Fame',
    artist: 'The Script ft. will.i.am',
    language: 'en',
    languageFlag: '🇺🇸',
    difficulty: 'medium',
    bpm: 88,
    genre: 'Pop Rock',
    schoolGroup: 'Lower Secondary',
    ageRange: '12–15',
    lyrics: [
      // Verse 1
      { time: 21.57, text: "Yeah, you can be the greatest, you can be the best", translation: "Ja, lahko si največji, lahko si najboljši." },
      { time: 24.61, text: "You can be the King Kong banging on your chest", translation: "Lahko si King Kong, ki se tolče po prsih." },
      { time: 27.47, text: "You can beat the world, you can beat the war", translation: "Lahko premagaš svet, lahko premagaš vojno." },
      { time: 30.45, text: "You can talk to God, go banging on his door", translation: "Lahko govoriš z Bogom in glasno trkaš na njegova vrata." },
      { time: 33.04, text: "You can throw your hands up, you can beat the clock (yeah)", translation: "Lahko dvigneš roke v zrak, lahko premagaš čas (ja)." },
      { time: 36.07, text: "You can move a mountain, you can break rocks", translation: "Lahko premakneš goro, lahko razbiješ skale." },
      { time: 38.94, text: "You can be a master, don't wait for luck", translation: "Lahko postaneš mojster, ne čakaj na srečo." },
      { time: 41.67, text: "Dedicate yourself and you gon' find yourself", translation: "Posveti se svojemu cilju in našel boš samega sebe." },

      // Chorus 1
      { time: 43.78, text: "Standing in the hall of fame (yeah)", translation: "Stal boš v dvorani slavnih (ja)." },
      { time: 48.93, text: "And the world's gonna know your name (yeah)", translation: "In ves svet bo poznal tvoje ime (ja)." },
      { time: 54.43, text: "'Cause you burn with the brightest flame (yeah)", translation: "Ker goriš z najsvetlejšim plamenom (ja)." },
      { time: 59.78, text: "And the world's gonna know your name (yeah)", translation: "In ves svet bo poznal tvoje ime (ja)." },
      { time: 64.66, text: "And you'll be on the walls of the hall of fame", translation: "In tvoje ime bo zapisano na stenah dvorane slavnih." },

      // Verse 2
      { time: 67.32, text: "You can go the distance, you can run the mile", translation: "Lahko prideš do cilja, lahko pretečeš miljo." },
      { time: 69.83, text: "You can walk straight through hell with a smile", translation: "Lahko greš skozi pekel z nasmehom." },
      { time: 72.46, text: "You can be the hero, you can get the gold", translation: "Lahko postaneš junak, lahko osvojiš zlato." },
      { time: 75.47, text: "Breaking all the records they thought never could be broke", translation: "Podiraš vse rekorde, za katere so mislili, da jih ni mogoče podreti." },
      { time: 78.23, text: "Yeah, do it for your people, do it for your pride", translation: "Ja, naredi to za svoje ljudi, naredi to za svoj ponos." },
      { time: 81.16, text: "How are you ever gonna know if you never even try?", translation: "Kako boš sploh vedel, če nikoli niti ne poskusiš?" },
      { time: 84.01, text: "Do it for your country, do it for your name", translation: "Naredi to za svojo državo, naredi to za svoje ime." },
      { time: 86.73, text: "'Cause there's gonna be a day...", translation: "Ker prišel bo dan ..." },

      // Chorus 2
      { time: 88.72, text: "When you're standing in the hall of fame (yeah)", translation: "Ko boš stal v dvorani slavnih (ja)." },
      { time: 94.07, text: "And the world's gonna know your name (yeah)", translation: "In ves svet bo poznal tvoje ime (ja)." },
      { time: 99.22, text: "'Cause you burn with the brightest flame (yeah)", translation: "Ker goriš z najsvetlejšim plamenom (ja)." },
      { time: 105.13, text: "And the world's gonna know your name (yeah)", translation: "In ves svet bo poznal tvoje ime (ja)." },
      { time: 109.84, text: "And you'll be on the walls of the hall of fame", translation: "In tvoje ime bo zapisano na stenah dvorane slavnih." },

      // Bridge
      { time: 112.63, text: "Be a champion, be a champion", translation: "Bodi prvak, bodi prvak." },
      { time: 118.09, text: "Be a champion, be a champion", translation: "Bodi prvak, bodi prvak." },
      { time: 122.76, text: "On the walls of the hall of fame", translation: "Na stenah dvorane slavnih." },
      { time: 124.36, text: "Be students, be teachers, be politicians, be preachers (yeah)", translation: "Bodite učenci, učitelji, politiki in pridigarji (ja)." },
      { time: 130.17, text: "Be believers, be leaders, be astronauts, be champions, be truth seekers", translation: "Bodite verniki, voditelji, astronavti, prvaki in iskalci resnice." },
      { time: 135.77, text: "Be students, be teachers, be politicians, be preachers", translation: "Bodite učenci, učitelji, politiki in pridigarji." },
      { time: 140.94, text: "Be believers, be leaders, be astronauts, be champions", translation: "Bodite verniki, voditelji, astronavti in prvaki." },

      // Chorus 3
      { time: 145.43, text: "Standing in the hall of fame (yeah, yeah, yeah)", translation: "Stojiš v dvorani slavnih (ja, ja, ja)." },
      { time: 150.44, text: "And the world's gonna know your name (yeah, yeah, yeah)", translation: "In ves svet bo poznal tvoje ime (ja, ja, ja)." },
      { time: 156.24, text: "'Cause you burn with the brightest flame (yeah, yeah, yeah)", translation: "Ker goriš z najsvetlejšim plamenom (ja, ja, ja)." },
      { time: 161.64, text: "And the world's gonna know your name (yeah, yeah, yeah)", translation: "In ves svet bo poznal tvoje ime (ja, ja, ja)." },
      { time: 166.71, text: "And you'll be on the walls of the hall of fame", translation: "In tvoje ime bo zapisano na stenah dvorane slavnih." },

      // Final verse / Outro
      { time: 168.86, text: "You could be the greatest, you can be the best", translation: "Lahko bi bil največji, lahko si najboljši." },
      { time: 171.66, text: "You can be the King Kong banging on your chest", translation: "Lahko si King Kong, ki se tolče po prsih." },
      { time: 174.29, text: "You could beat the world, you could beat the war", translation: "Lahko bi premagal svet, lahko bi premagal vojno." },
      { time: 177.35, text: "You could talk to God, go banging on his door", translation: "Lahko bi govoril z Bogom in glasno trkal na njegova vrata." },
      { time: 180.28, text: "You can throw your hands up, you can beat the clock (yeah)", translation: "Lahko dvigneš roke v zrak, lahko premagaš čas (ja)." },
      { time: 182.82, text: "You can move a mountain, you can break rocks", translation: "Lahko premakneš goro, lahko razbiješ skale." },
      { time: 185.78, text: "You can be a master, don't wait for luck", translation: "Lahko postaneš mojster, ne čakaj na srečo." },
      { time: 188.54, text: "Dedicate yourself and you gonna find yourself", translation: "Posveti se svojemu cilju in našel boš samega sebe." },
      { time: 190.56, text: "Standing in the hall of fame", translation: "Stojiš v dvorani slavnih." }
    ]
  },

];
