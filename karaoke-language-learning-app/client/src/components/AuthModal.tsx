import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

const NATIONALITIES = [
  'Afghan', 'Albanian', 'Algerian', 'Argentinian', 'Australian', 'Austrian',
  'Belgian', 'Bolivian', 'Brazilian', 'British', 'Bulgarian', 'Canadian',
  'Chilean', 'Chinese', 'Colombian', 'Croatian', 'Czech', 'Danish', 'Dutch',
  'Ecuadorian', 'Egyptian', 'Finnish', 'French', 'German', 'Greek',
  'Guatemalan', 'Hungarian', 'Indian', 'Indonesian', 'Iranian', 'Iraqi',
  'Irish', 'Israeli', 'Italian', 'Japanese', 'Jordanian', 'Kenyan',
  'Korean', 'Lebanese', 'Malaysian', 'Mexican', 'Moroccan', 'New Zealander',
  'Nigerian', 'Norwegian', 'Pakistani', 'Paraguayan', 'Peruvian', 'Philippine',
  'Polish', 'Portuguese', 'Romanian', 'Russian', 'Saudi', 'Serbian',
  'Singaporean', 'South African', 'Spanish', 'Swedish', 'Swiss', 'Syrian',
  'Taiwanese', 'Thai', 'Tunisian', 'Turkish', 'Ukrainian', 'Uruguayan',
  'Venezuelan', 'Vietnamese', 'Other',
];

interface Props { onClose: () => void; }

const AuthModal = ({ onClose }: Props) => {
  const { login, register } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');

  // Login fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Register extra fields
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [nationality, setNationality] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  const resetFields = () => {
    setUsername(''); setPassword(''); setEmail('');
    setAge(''); setNationality(''); setConfirmPassword('');
    setError('');
  };

  const handleSubmit = () => {
    setError('');

    if (!username || !password) return setError('Izpolni vsa polja!');

    if (mode === 'login') {
      const ok = login(username, password);
      if (!ok) setError('Napačno uporabniško ime ali geslo!');
      else onClose();
      return;
    }

    // Register validations
    if (!email || !age || !nationality || !confirmPassword)
      return setError('Izpolni vsa polja!');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setError('Vnesi veljaven e-poštni naslov!');
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 7 || ageNum > 15)
      return setError('Vnesi veljavno starost (7–15)!');
    if (password !== confirmPassword)
      return setError('Gesli se ne ujemata!');
    if (password.length < 6)
      return setError('Geslo mora imeti vsaj 6 znakov!');

    const ok = register(username, password, email, ageNum, nationality);
    if (!ok) setError('To uporabniško ime je že zasedeno!');
    else onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bevel-box p-6 w-full max-w-sm mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-pixel text-[10px] text-y2k-yellow">
            {mode === 'login' ? '🔑 PRIJAVA' : '📝 REGISTRACIJA'}
          </h2>
          <button onClick={onClose} className="font-pixel text-[10px] text-y2k-pink hover:text-y2k-yellow">✕</button>
        </div>

        <div className="space-y-3">
          {/* Common fields */}
          <input
            type="text"
            placeholder="Uporabniško ime ..."
            value={username}
            onChange={e => { setUsername(e.target.value); setError(''); }}
            className="w-full bevel-box-inset px-3 py-2 font-retro text-y2k-cyan bg-background focus:outline-none"
          />
          <input
            type="password"
            placeholder="Geslo ..."
            value={password}
            onChange={e => { setPassword(e.target.value); setError(''); }}
            className="w-full bevel-box-inset px-3 py-2 font-retro text-y2k-cyan bg-background focus:outline-none"
          />

          {/* Register-only fields */}
          {mode === 'register' && (
            <>
              <input
                type="password"
                placeholder="Ponovi geslo ..."
                value={confirmPassword}
                onChange={e => { setConfirmPassword(e.target.value); setError(''); }}
                className="w-full bevel-box-inset px-3 py-2 font-retro text-y2k-cyan bg-background focus:outline-none"
              />
              <input
                type="email"
                placeholder="E-poštni naslov ..."
                value={email}
                onChange={e => { setEmail(e.target.value); setError(''); }}
                className="w-full bevel-box-inset px-3 py-2 font-retro text-y2k-cyan bg-background focus:outline-none"
              />
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                min="7"
                max="15"
                placeholder="Starost ..."
                value={age}
                onChange={e => { setAge(e.target.value); setError(''); }}
                className="w-full bevel-box-inset px-3 py-2 font-retro text-y2k-cyan bg-background focus:outline-none"
              />
              <select
                value={nationality}
                onChange={e => { setNationality(e.target.value); setError(''); }}
                className="w-full bevel-box-inset px-3 py-2 font-retro text-y2k-cyan bg-background focus:outline-none cursor-pointer"
              >
                <option value="">Izberi državljanstvo ...</option>
                {NATIONALITIES.map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </>
          )}

          {error && <p className="font-pixel text-[8px] text-y2k-pink">{error}</p>}

          <button
            onClick={handleSubmit}
            className="w-full bevel-box py-2 font-pixel text-[9px] text-y2k-lime hover:text-y2k-yellow transition-colors"
          >
            {mode === 'login' ? '→ PRIJAVI SE' : '→ USTVARI RAČUN'}
          </button>

          <p className="font-retro text-center text-muted-foreground">
            {mode === 'login' ? "Še nimaš računa? " : "Že imaš račun? "}
            <button
              onClick={() => { resetFields(); setMode(mode === 'login' ? 'register' : 'login'); }}
              className="text-y2k-cyan hover:text-y2k-yellow"
            >
              {mode === 'login' ? 'Ustvari ga tukaj!' : 'Prijavi se!'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
