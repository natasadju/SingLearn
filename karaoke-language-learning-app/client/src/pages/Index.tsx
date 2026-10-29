import { useState, useMemo, useEffect } from 'react';
import { songs, LANGUAGES } from '@/data/songs';
import SongCard from '@/components/SongCard';
import Y2KHeader from '@/components/Y2KHeader';
import Y2KFooter from '@/components/Y2KFooter';

const Index = () => {
  const [search, setSearch] = useState('');
  const [langFilter, setLangFilter] = useState('all');
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    const langHistory = JSON.parse(localStorage.getItem('lang-history') || '[]') as string[];
    const recentSongs = JSON.parse(localStorage.getItem('recent-songs') || '[]') as string[];
    
    if (langHistory.length > 0) {
      const topLang = langHistory[0];
      const recs = songs
        .filter(s => s.language === topLang && !recentSongs.includes(s.id))
        .map(s => s.id);
      setRecommendations(recs);
    }
  }, []);

  const filtered = useMemo(() => {
    return songs.filter(song => {
      const matchesSearch = search === '' || 
        song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase());
      const matchesLang = langFilter === 'all' || song.language === langFilter;
      return matchesSearch && matchesLang;
    });
  }, [search, langFilter]);

  const recommendedSongs = useMemo(() => {
    return songs.filter(s => recommendations.includes(s.id));
  }, [recommendations]);

  return (
    <div className="min-h-screen flex flex-col">
      <Y2KHeader />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-7 sm:py-10">
        {/* Welcome box */}
        <div className="bevel-box p-6 sm:p-9 mb-7 text-center relative overflow-hidden">
          <div className="text-4xl mb-2" aria-hidden="true">🎶 ⭐ 🎤</div>
          <h2 className="font-pixel text-2xl sm:text-3xl text-y2k-purple mb-2">
            Dobrodošel v SingLearn!
          </h2>
          <p className="font-retro text-foreground text-lg sm:text-xl">
            Izberi pesem, zapoj zraven in odkrij nove besede! 🎵
          </p>
          <div className="flex justify-center flex-wrap gap-3 mt-5 text-sm font-pixel">
            <span className="rounded-full bg-emerald-100 text-emerald-800 px-4 py-2">🎤 Zapoj zraven</span>
            <span className="rounded-full bg-pink-100 text-pink-800 px-4 py-2">✏️ Igraj se z besedami</span>
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
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Išči pesmi ali izvajalce ..."
                className="w-full bevel-box-inset px-4 py-3 font-retro text-foreground bg-background focus:outline-none focus:border-y2k-cyan placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <select
                value={langFilter}
                onChange={(e) => setLangFilter(e.target.value)}
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
            🎵 Pesmi za raziskovanje <span className="text-sm font-retro text-muted-foreground">({filtered.length})</span>
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
      </main>

      <Y2KFooter />
    </div>
  );
};

export default Index;
