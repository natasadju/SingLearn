import { useState, useMemo, useEffect, useRef } from 'react';
import { songs, LANGUAGES } from '@/data/songs';
import type { Song } from '@/data/songs';
import SongCard from '@/components/SongCard';
import Y2KHeader from '@/components/Y2KHeader';
import Y2KFooter from '@/components/Y2KFooter';

type AgeGroup = {
  name: string;
  min: number;
  max: number;
};

const AGE_GROUPS: AgeGroup[] = [
  { name: 'Lower Primary', min: 7, max: 9 },
  { name: 'Upper Primary', min: 10, max: 12 },
  { name: 'Lower Secondary', min: 13, max: 15 }
];

// Key for songs that have no age metadata in songs.ts.
const OTHER_KEY = 'Other';

const getAgeGroup = (age: number): AgeGroup | undefined =>
    AGE_GROUPS.find(group => age >= group.min && age <= group.max);

// Decide which section a song belongs to.
// Uses schoolGroup first, then ageRange (e.g. "6–9"), otherwise "Other".
const getSongGroupName = (song: Song): string => {
  if (song.schoolGroup) {
    const match = AGE_GROUPS.find(
        g => g.name.toLowerCase() === song.schoolGroup!.toLowerCase()
    );
    if (match) return match.name;
  }

  if (song.ageRange) {
    const nums = song.ageRange.match(/\d+/g);
    if (nums && nums.length > 0) {
      const upper = Number(nums[nums.length - 1]);
      const group = getAgeGroup(upper);
      if (group) return group.name;
    }
  }

  return OTHER_KEY;
};

const isValidAge = (value: number) =>
    Number.isInteger(value) && value >= 3 && value <= 19;

const Index = () => {
  const [search, setSearch] = useState('');
  const [langFilter, setLangFilter] = useState('all');
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const [age, setAge] = useState<number | null>(null);
  const [ageInput, setAgeInput] = useState('');

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToGroup = (groupName: string) => {
    sectionRefs.current[groupName]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    // Restore previously selected age (highlight only, no auto-scroll).
    const savedAge = Number(localStorage.getItem('user-age'));
    if (isValidAge(savedAge)) {
      setAge(savedAge);
      setAgeInput(String(savedAge));
    }

    // Language-based recommendations.
    const langHistory = JSON.parse(
        localStorage.getItem('lang-history') || '[]'
    ) as string[];
    const recentSongs = JSON.parse(
        localStorage.getItem('recent-songs') || '[]'
    ) as string[];

    if (langHistory.length > 0) {
      const topLang = langHistory[0];
      setRecommendations(
          songs
              .filter(s => s.language === topLang && !recentSongs.includes(s.id))
              .map(s => s.id)
      );
    }
  }, []);

  // Typing an age scrolls straight to that age group.
  const handleAgeChange = (value: string) => {
    setAgeInput(value);

    const parsed = Number(value);
    if (value === '' || !isValidAge(parsed)) {
      if (value === '') setAge(null);
      return;
    }

    setAge(parsed);
    localStorage.setItem('user-age', String(parsed));

    const group = getAgeGroup(parsed);
    if (group) scrollToGroup(group.name);
  };

  // All songs (filtered by search/language), grouped by age group.
  const sections = useMemo(() => {
    const q = search.toLowerCase();

    const visible = songs.filter(song => {
      const matchesSearch =
          q === '' ||
          song.title.toLowerCase().includes(q) ||
          song.artist.toLowerCase().includes(q);
      const matchesLang = langFilter === 'all' || song.language === langFilter;
      return matchesSearch && matchesLang;
    });

    const result = AGE_GROUPS.map(group => ({
      key: group.name,
      title: group.name,
      range: `${group.min}–${group.max} let`,
      songs: visible.filter(s => getSongGroupName(s) === group.name),
    }));

    result.push({
      key: OTHER_KEY,
      title: 'Ostale pesmi',
      range: 'vse starosti',
      songs: visible.filter(s => getSongGroupName(s) === OTHER_KEY),
    });

    return { list: result, total: visible.length };
  }, [search, langFilter]);

  const recommendedSongs = useMemo(
      () => songs.filter(song => recommendations.includes(song.id)),
      [recommendations]
  );

  const currentAgeGroup = age !== null ? getAgeGroup(age) : undefined;
  const ageInputInvalid = ageInput !== '' && !isValidAge(Number(ageInput));

  return (
      <div className="min-h-screen flex flex-col">
        <Y2KHeader />

        {/* Sticky age bar: type an age and the list jumps to that group */}
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur border-b-2 border-y2k-purple">
          <div className="max-w-5xl mx-auto w-full px-4 py-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <label
                  htmlFor="age-input"
                  className="font-pixel text-y2k-purple whitespace-nowrap"
              >
                🎂 Koliko si star?
              </label>

              <input
                  id="age-input"
                  type="number"
                  min="3"
                  max="19"
                  value={ageInput}
                  onChange={e => handleAgeChange(e.target.value)}
                  placeholder="3–19"
                  className="w-full sm:w-32 bevel-box-inset px-4 py-2 font-retro text-foreground bg-background focus:outline-none focus:border-y2k-cyan"
              />

              {currentAgeGroup && (
                  <span className="font-pixel text-y2k-lime">
                ⭐ {currentAgeGroup.name}
              </span>
              )}

              {ageInputInvalid && (
                  <span className="font-retro text-sm text-y2k-pink">
                Vnesi starost med 3 in 19 let.
              </span>
              )}
            </div>

            {/* Quick jump chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              {AGE_GROUPS.map(group => (
                  <button
                      key={group.name}
                      type="button"
                      onClick={() => scrollToGroup(group.name)}
                      className={`rounded-full px-3 py-1 text-xs font-pixel transition-colors ${
                          currentAgeGroup?.name === group.name
                              ? 'bg-y2k-purple text-white'
                              : 'bg-muted text-foreground hover:bg-y2k-purple hover:text-white'
                      }`}
                  >
                    {group.min}–{group.max}
                  </button>
              ))}
            </div>
          </div>
        </div>

        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-7 sm:py-10">
          {/* Welcome box */}
          <div className="bevel-box p-6 sm:p-9 mb-7 text-center relative overflow-hidden">
            <div className="text-4xl mb-2" aria-hidden="true">
              🎶 ⭐ 🎤
            </div>

            <h2 className="font-pixel text-2xl sm:text-3xl text-y2k-purple mb-2">
              Dobrodošel v SingLearn!
            </h2>

            <p className="font-retro text-foreground text-lg sm:text-xl">
              Izberi pesem, zapoj zraven in odkrij nove besede! 🎵
            </p>

            <div className="flex justify-center flex-wrap gap-3 mt-5 text-sm font-pixel">
            <span className="rounded-full bg-emerald-100 text-emerald-800 px-4 py-2">
              🎤 Zapoj zraven
            </span>
              <span className="rounded-full bg-pink-100 text-pink-800 px-4 py-2">
              ✏️ Igraj se z besedami
            </span>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="bevel-box p-5 sm:p-6 mb-7">
            <h3 className="font-pixel text-lg text-y2k-purple mb-4">
              🔍 Poišči naslednjo pesem
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Išči pesmi ali izvajalce ..."
                    className="w-full bevel-box-inset px-4 py-3 font-retro text-foreground bg-background focus:outline-none focus:border-y2k-cyan placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <select
                    value={langFilter}
                    onChange={e => setLangFilter(e.target.value)}
                    className="bevel-box-inset px-4 py-3 font-retro text-foreground bg-background focus:outline-none cursor-pointer"
                >
                  <option value="all">🌍 VSE JEZIKE</option>
                  {LANGUAGES.map(lang => (
                      <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          {recommendedSongs.length > 0 && (
              <div className="bevel-box p-5 sm:p-6 mb-7">
                <h3 className="font-pixel text-lg text-y2k-lime mb-4">
                  ⭐ Izbrano zate
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  {recommendedSongs.map(song => (
                      <SongCard key={song.id} song={song} />
                  ))}
                </div>
              </div>
          )}

          {/* Full song list, grouped by age */}
          <h3 className="font-pixel text-lg text-y2k-cyan mb-4">
            🎵 Vse pesmi{' '}
            <span className="text-sm font-retro text-muted-foreground">
            ({sections.total})
          </span>
          </h3>

          <div className="space-y-7">
            {sections.list.map(section => {
              // Hide the catch-all section when it has nothing to show.
              if (section.key === OTHER_KEY && section.songs.length === 0) {
                return null;
              }

              const isActive = currentAgeGroup?.name === section.key;

              return (
                  <section
                      key={section.key}
                      ref={el => {
                        sectionRefs.current[section.key] = el;
                      }}
                      // Offset so the heading isn't hidden behind the sticky bar.
                      className={`bevel-box p-5 sm:p-6 scroll-mt-40 ${
                          isActive ? 'ring-2 ring-y2k-purple' : ''
                      }`}
                  >
                    <h3 className="font-pixel text-lg text-y2k-purple mb-4">
                      {section.title}{' '}
                      <span className="text-sm font-retro text-muted-foreground">
                    · {section.range} ({section.songs.length})
                  </span>
                    </h3>

                    {section.songs.length === 0 ? (
                        <p className="font-retro text-base text-muted-foreground">
                          V tej skupini ni pesmi za izbran iskalni niz ali jezik.
                        </p>
                    ) : (
                        <div className="grid gap-3 sm:grid-cols-2">
                          {section.songs.map(song => (
                              <SongCard key={song.id} song={song} />
                          ))}
                        </div>
                    )}
                  </section>
              );
            })}
          </div>
        </main>

        <Y2KFooter />
      </div>
  );
};

export default Index;