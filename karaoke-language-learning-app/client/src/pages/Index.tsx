
import { useState, useMemo, useEffect } from 'react';
import { songs, LANGUAGES } from '@/data/songs';
import SongCard from '@/components/SongCard';
import Y2KHeader from '@/components/Y2KHeader';
import Y2KFooter from '@/components/Y2KFooter';

type AgeGroup = {
  name: string;
  min: number;
  max: number;
};

const AGE_GROUPS: AgeGroup[] = [
  { name: 'Kindergarten', min: 3, max: 6 },
  { name: 'Lower Primary', min: 7, max: 9 },
  { name: 'Upper Primary', min: 10, max: 12 },
  { name: 'Lower Secondary', min: 13, max: 15 },
  { name: 'Upper Secondary', min: 16, max: 19 },
];

// Determine the age group for a selected age.
const getAgeGroup = (age: number): AgeGroup | undefined => {
  return AGE_GROUPS.find(group => age >= group.min && age <= group.max);
};

// Check whether a song belongs to the selected age group.
// Supports minAge/maxAge, ageRange, or schoolGroup metadata.
const songMatchesAge = (song: (typeof songs)[number], age: number) => {
  const metadata = song as typeof song & {
    minAge?: number;
    maxAge?: number;
    ageRange?: string;
    schoolGroup?: string;
  };

  if (
      typeof metadata.minAge === 'number' &&
      typeof metadata.maxAge === 'number'
  ) {
    return age >= metadata.minAge && age <= metadata.maxAge;
  }

  if (metadata.ageRange) {
    const ages = metadata.ageRange.match(/\d+/g);

    if (ages && ages.length >= 2) {
      return age >= Number(ages[0]) && age <= Number(ages[1]);
    }
  }

  if (metadata.schoolGroup) {
    const group = getAgeGroup(age);
    return metadata.schoolGroup.toLowerCase() === group?.name.toLowerCase();
  }

  return false;
};

const Index = () => {
  const [search, setSearch] = useState('');
  const [langFilter, setLangFilter] = useState('all');
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const [age, setAge] = useState<number | null>(null);
  const [ageInput, setAgeInput] = useState('');

  const [showAgeEditor, setShowAgeEditor] = useState(false);

  useEffect(() => {
    // Restore previously selected age.
    const savedAge = localStorage.getItem('user-age');

    if (savedAge) {
      const parsedAge = Number(savedAge);

      if (Number.isInteger(parsedAge) && parsedAge >= 3 && parsedAge <= 19) {
        setAge(parsedAge);
        setAgeInput(String(parsedAge));
      }
    }

    // Load language-based recommendations.
    const langHistory = JSON.parse(
        localStorage.getItem('lang-history') || '[]'
    ) as string[];

    const recentSongs = JSON.parse(
        localStorage.getItem('recent-songs') || '[]'
    ) as string[];

    if (langHistory.length > 0) {
      const topLang = langHistory[0];

      const recs = songs
          .filter(s => s.language === topLang && !recentSongs.includes(s.id))
          .map(s => s.id);

      setRecommendations(recs);
    }
  }, []);

  const handleAgeSubmit = () => {
    const selectedAge = Number(ageInput);

    if (
        !Number.isInteger(selectedAge) ||
        selectedAge < 3 ||
        selectedAge > 19
    ) {
      return;
    }

    setAge(selectedAge);
    localStorage.setItem('user-age', String(selectedAge));
    setShowAgeEditor(false);
  };

  const filtered = useMemo(() => {
    if (age === null) return [];

    return songs.filter(song => {
      const matchesAge = songMatchesAge(song, age);

      const matchesSearch =
          search === '' ||
          song.title.toLowerCase().includes(search.toLowerCase()) ||
          song.artist.toLowerCase().includes(search.toLowerCase());

      const matchesLang =
          langFilter === 'all' || song.language === langFilter;

      return matchesAge && matchesSearch && matchesLang;
    });
  }, [search, langFilter, age]);

  const recommendedSongs = useMemo(() => {
    if (age === null) return [];

    return songs.filter(
        song =>
            recommendations.includes(song.id) &&
            songMatchesAge(song, age)
    );
  }, [recommendations, age]);

  const currentAgeGroup = age !== null ? getAgeGroup(age) : undefined;

  return (
      <div className="min-h-screen flex flex-col">
        <Y2KHeader />

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

          {/* Age selection */}
          <div className="bevel-box p-5 sm:p-6 mb-7">
            <h3 className="font-pixel text-lg text-y2k-purple mb-3">
              🎂 Koliko si star?
            </h3>

            {age === null || showAgeEditor ? (
                <>
                  <p className="font-retro text-foreground text-base mb-4">
                    Vnesi svojo starost, da ti lahko pokažemo pesmi,
                    primerne tvoji starostni skupini.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="number"
                        min="3"
                        max="19"
                        value={ageInput}
                        onChange={e => setAgeInput(e.target.value)}
                        onKeyDown={e => {
                          if (e.key === 'Enter') handleAgeSubmit();
                        }}
                        placeholder="Vnesi starost (3–19)"
                        className="flex-1 bevel-box-inset px-4 py-3 font-retro text-foreground bg-background focus:outline-none focus:border-y2k-cyan"
                    />

                    <button
                        type="button"
                        onClick={handleAgeSubmit}
                        disabled={
                            !Number.isInteger(Number(ageInput)) ||
                            Number(ageInput) < 3 ||
                            Number(ageInput) > 19
                        }
                        className="bevel-box px-6 py-3 font-pixel text-y2k-purple hover:bg-y2k-purple hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Potrdi starost ✨
                    </button>
                  </div>

                  <p className="font-retro text-sm text-muted-foreground mt-3">
                    Pesmi so razdeljene v starostne skupine od 3 do 19 let.
                  </p>
                </>
            ) : (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <p className="font-retro text-foreground text-lg">
                      Tvoja starost: <strong>{age} let</strong>
                    </p>

                    <p className="font-pixel text-y2k-lime mt-1">
                      ⭐ {currentAgeGroup?.name}
                    </p>
                  </div>

                  <button
                      type="button"
                      onClick={() => setShowAgeEditor(true)}
                      className="bevel-box px-5 py-2 font-pixel text-y2k-purple hover:bg-y2k-purple hover:text-white transition-colors"
                  >
                    Spremeni starost
                  </button>
                </div>
            )}

            {(age === null || showAgeEditor) &&
                ageInput !== '' &&
                (
                    !Number.isInteger(Number(ageInput)) ||
                    Number(ageInput) < 3 ||
                    Number(ageInput) > 19
                ) && (
                    <p className="text-y2k-pink font-retro text-sm mt-3">
                      Prosim, vnesi starost med 3 in 19 let.
                    </p>
                )}
          </div>

          {/* Show catalogue only after age selection */}
          {age !== null && !showAgeEditor && (
              <>
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

                {/* Song List */}
                <div className="bevel-box p-5 sm:p-6">
                  <h3 className="font-pixel text-lg text-y2k-cyan mb-4">
                    🎵 Pesmi za raziskovanje{' '}
                    <span className="text-sm font-retro text-muted-foreground">
                  ({filtered.length})
                </span>
                  </h3>

                  {filtered.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="font-pixel text-lg text-y2k-pink">
                          Nismo našli nobene pesmi
                        </p>

                        <p className="font-retro text-base text-muted-foreground mt-2">
                          Poskusi drugačen iskalni niz ali izberi drug jezik!
                        </p>
                      </div>
                  ) : (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {filtered.map(song => (
                            <SongCard key={song.id} song={song} />
                        ))}
                      </div>
                  )}
                </div>
              </>
          )}
        </main>

        <Y2KFooter />
      </div>
  );
};

export default Index;
