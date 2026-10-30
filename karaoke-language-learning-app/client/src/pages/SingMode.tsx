import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { songs } from '@/data/songs';
import Y2KHeader from '@/components/Y2KHeader';
import Y2KFooter from '@/components/Y2KFooter';
import dieWithASmile from '@/assets/audio/die-with-a-smile.mp3';
import despacito from '@/assets/audio/despacito.mp3';

const audioMap: Record<string, string> = {
  'die-with-a-smile': dieWithASmile,
  'despacito': despacito
};

const SingMode = () => {
  const { songId } = useParams();
  const song = songs.find(s => s.id === songId);
  const [currentLine, setCurrentLine] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [scores, setScores] = useState<Record<number, number>>({});
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);
  const recognitionRef = useRef<any>(null);
  const isPlayingRef = useRef(false);
  const prevLineRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const lyricsContainerRef = useRef<HTMLDivElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsListening(false);
  }, []);

  const startListening = useCallback(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;

    if (recognitionRef.current) return;
    const recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = true;

    const langMap: Record<string, string> = {
      es: 'es-ES',
      fr: 'fr-FR',
      ja: 'ja-JP',
      ko: 'ko-KR',
      pt: 'pt-BR',
      de: 'de-DE',
      en: 'en-US',
      sl: 'sl-SI'
    };
    recognition.lang = langMap[song?.language || 'en'] || 'en-US';
    console.log("Speech recognition language set to:", recognition.lang);
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let result = '';
      for (let i = 0; i < event.results.length; i++) {
        result += event.results[i][0].transcript;
      }
      console.log("Transcript updated:", result);
      setTranscript(result);
    };

    recognition.onerror = (e) => {
      console.log("Speech error:", e.error);

      if (e.error === "not-allowed") {
        stopListening();
      }

      if (e.error === "network") {
        recognitionRef.current = null;

        if (isPlayingRef.current) {
          setTimeout(() => {
            startListening();
          }, 1000);
        }
      }
    };
    recognition.onend = () => {
      console.log("Recognition ended");

      recognitionRef.current = null;

      if (isPlayingRef.current) {
        setTimeout(() => {
          startListening();
        }, 500);
      } else {
        setIsListening(false);
      }
    };
    recognition.start();
    recognitionRef.current = recognition;
    setIsListening(true);
  }, [song?.language, stopListening]);

  const handlePlay = async () => {
    if (!song) {
      console.log("Cannot start singing: song not found");
      return;
    }

    // Sing mode needs at least one timed lyric line.
    if (!song.lyrics || song.lyrics.length === 0) {
      console.warn("Cannot start singing: this song has no timed lyrics yet.");
      return;
    }

    console.log("Starting song:", song.title);

    // reset audio to beginning
    if (audioRef.current) {
      audioRef.current.currentTime = 0;

      try {
        await audioRef.current.play();
      } catch (err) {
        console.log("Audio play failed:", err);
      }
    }

    setIsPlaying(true);
    isPlayingRef.current = true;
    setCurrentLine(0);
    prevLineRef.current = 0;
    lyricsContainerRef.current?.scrollTo({ top: 0, behavior: 'auto' });
    setTranscript('');
    setScores({});
    startTimeRef.current = Date.now();

    startListening();

    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;

      let lineIndex = -1;

      for (let i = song.lyrics.length - 1; i >= 0; i--) {
        if (song.lyrics[i].time <= elapsed) {
          lineIndex = i;
          break;
        }
      }

      if (lineIndex >= 0) setCurrentLine(lineIndex);

      if (elapsed > song.lyrics[song.lyrics.length - 1].time + 8) {
        handleStop();
      }
    }, 200);
  };

  const handleStop = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    // stop audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setIsPlaying(false);
    isPlayingRef.current = false;

    stopListening();
  }, [stopListening]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      stopListening();
    };
  }, [stopListening]);

  // Keep the active lyric in view as the song progresses.
  useEffect(() => {
    if (!isPlaying) return;
    activeLineRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [currentLine, isPlaying]);

  useEffect(() => {
    if (!isPlaying || !song) return;

    const prevLine = prevLineRef.current;

    // if we moved to a new line → score the previous one
    if (currentLine !== prevLine) {
      if (transcript) {
        const expected = song.lyrics[prevLine].text
            .toLowerCase()
            .replace(/[^\w\s]/g, '');

        const spoken = transcript
            .toLowerCase()
            .replace(/[^\w\s]/g, '');

        const expectedWords = expected.split(/\s+/);
        const spokenWords = spoken.split(/\s+/);

        const matches = expectedWords.filter(w =>
            spokenWords.includes(w)
        ).length;

        const score = Math.round((matches / expectedWords.length) * 100);

        setScores(prev => ({ ...prev, [prevLine]: score }));

        console.log(`Auto score line ${prevLine}:`, score);
      }

      setTranscript(''); // 🔥 reset for next line
      prevLineRef.current = currentLine;
    }
  }, [currentLine, isPlaying, transcript, song]);

  if (!song) {
    return (
        <div className="min-h-screen flex flex-col">
          <Y2KHeader />
          <main className="flex-1 flex items-center justify-center">
            <div className="bevel-box p-8 text-center">
              <p className="font-pixel text-sm text-y2k-pink">Pesmi ni bilo mogoče najti</p>
              <Link to="/" className="font-retro text-y2k-cyan mt-4 block">← Nazaj na začetek</Link>
            </div>
          </main>
          <Y2KFooter />
        </div>
    );
  }

  const avgScore = Object.values(scores).length > 0
      ? Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length)
      : null;

  return (
      <div className="min-h-screen flex flex-col">
        <Y2KHeader />
        <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6">
          {/* Song info */}
          <div className="bevel-box p-4 mb-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h2 className="font-pixel text-sm text-y2k-yellow">
                  {song.languageFlag} {song.title}
                </h2>
                <p className="font-retro text-y2k-pink">{song.artist}</p>
                {'schoolGroup' in song && song.schoolGroup && (
                    <p className="font-retro text-xs text-muted-foreground">
                      {song.schoolGroup} · {song.ageRange}
                    </p>
                )}
              </div>
              <Link to="/" className="bevel-box px-3 py-1 text-[9px] font-pixel text-y2k-cyan no-underline">
                ← NAZAJ
              </Link>
            </div>
          </div>

          {/* Mode banner */}
          <div className="y2k-gradient p-1 mb-4">
            <div className="bg-background p-2 text-center">
              <span className="font-pixel text-[10px] text-y2k-yellow">🎤 PETJE 🎤</span>
            </div>
          </div>

          {/* Controls */}
          {/* Audio player */}
          <div className="bevel-box p-3 mb-4 flex items-center gap-3">
            <span className="font-pixel text-[9px] text-y2k-yellow">🎵 PREDVAJANJE:</span>
            <audio
                ref={audioRef}
                controls
                className="flex-1 h-8"
                src={audioMap[song.id] ?? song.audioUrl ?? ''}
            >
              Tvoj brskalnik ne podpira predvajanja zvoka.
            </audio>
            {isPlaying && (
                <span className="font-pixel text-[9px] text-y2k-lime blink">▶ PREDVAJA SE</span>
            )}
          </div>
          <div className="bevel-box p-4 mb-4 flex items-center justify-center gap-4">
            {!isPlaying ? (
                <button onClick={handlePlay} className="bevel-box px-6 py-2 font-pixel text-[10px] text-y2k-lime hover:text-y2k-yellow transition-colors">
                  ▶ ZAČNI PETI
                </button>
            ) : (
                <>
                  <button onClick={handleStop} className="bevel-box px-6 py-2 font-pixel text-[10px] text-y2k-pink hover:text-y2k-yellow transition-colors">
                    ■ USTAVI
                  </button>
                </>
            )}
            {isListening && (
                <span className="font-pixel text-[8px] text-y2k-pink blink">● POSLUŠAM</span>
            )}
          </div>

          {/* Lyrics display */}
          <div className="bevel-box p-4 mb-4">
            <h3 className="font-pixel text-[10px] text-y2k-cyan mb-3">BESEDILO PESMI</h3>
            <div
                ref={lyricsContainerRef}
                className="space-y-2 h-[min(60vh,500px)] min-h-[240px] overflow-y-auto overscroll-contain pr-2 scroll-smooth"
            >
              {song.lyrics.length > 0 ? song.lyrics.map((line, i) => (
                  <div
                      key={i}
                      ref={i === currentLine ? activeLineRef : null}
                      className={`p-3 rounded-md transition-all duration-300 scroll-m-3 ${
                          i === currentLine && isPlaying
                              ? 'bevel-box border-2 border-y2k-cyan scale-[1.02]'
                              : 'opacity-100'
                      }`}
                  >
                    <p className={`font-retro text-xl ${
                        i === currentLine && isPlaying ? 'text-y2k-yellow' : 'text-foreground'
                    }`}>
                      {line.text}
                    </p>
                    <p className="font-retro text-sm text-muted-foreground">{line.translation}</p>
                    {scores[i] !== undefined && (
                        <span className={`font-pixel text-[9px] ${
                            scores[i] >= 70 ? 'text-y2k-lime' : scores[i] >= 40 ? 'text-y2k-yellow' : 'text-y2k-pink'
                        }`}>
                    TOČK: {scores[i]}%
                  </span>
                    )}
                  </div>
              )) : (
                  <p className="font-retro text-muted-foreground">
                    Besedilo s časovnimi oznakami še ni dodano.
                  </p>
              )}
            </div>
            {'lyricsSource' in song && song.lyricsSource && (
                <p className="font-retro text-xs text-muted-foreground mt-3">
                  Vir besedila: <a href={song.lyricsSource} target="_blank" rel="noreferrer" className="underline">
                  {song.lyricsSource}
                </a>
                  {'lyricsLicense' in song && song.lyricsLicense && ` · Licenca: ${song.lyricsLicense}`}
                </p>
            )}
          </div>

          {/* Transcript */}
          <div className="bevel-box p-4 mb-4">
            <h3 className="font-pixel text-[10px] text-y2k-pink mb-2">TVOJ GLAS 📝</h3>
            <div className="bevel-box-inset p-3 min-h-[60px]">
              <p className="font-retro text-y2k-lime">
                {transcript || (isListening ? 'Poslušam ...' : 'Pritisni »Začni peti« za začetek!')}
              </p>
            </div>
          </div>

          {/* Score summary */}
          {avgScore !== null && !isPlaying && (
              <div className="bevel-box p-4 text-center">
                <h3 className="font-pixel text-sm text-y2k-yellow mb-2">
                  {avgScore >= 70 ? '🌟 ODLIČNO! 🌟' : avgScore >= 40 ? '👍 LEPO POSKUŠAŠ!' : '💪 VADI ŠE NAPREJ!'}
                </h3>
                <p className="font-pixel text-2xl text-y2k-cyan">{avgScore}%</p>
                <p className="font-retro text-muted-foreground mt-1">povprečna uspešnost</p>
              </div>
          )}
        </main>
        <Y2KFooter />
      </div>
  );
};

export default SingMode;