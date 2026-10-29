import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import AuthModal from './AuthModal';

const Y2KHeader = () => {
  const [visitors, setVisitors] = useState(0);
  const [showAuth, setShowAuth] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const count = parseInt(localStorage.getItem('y2k-visitors') || '0') + 1;
    localStorage.setItem('y2k-visitors', count.toString());
    setVisitors(count);
  }, []);

  return (
    <header className="px-3 pt-3 sm:px-6">
      {/* Marquee bar */}
      <div className="bg-y2k-purple text-white py-2 rounded-full marquee-container shadow-sm">
        <span className="marquee-text font-pixel text-xs">
          🎵 Dobrodošel v SingLearn! 🎵 Poj, igraj se in se nauči nove besede! 🌟
        </span>
      </div>

      <div className="bevel-box p-4 sm:px-6 star-bg mt-3 max-w-6xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Left: login/profile button */}
          <div className="flex items-center gap-2">
            {user ? (
              <button
                onClick={() => navigate('/profile')}
                className="bevel-box px-3 py-2 font-pixel text-xs text-y2k-lime hover:text-y2k-yellow transition-colors"
              >
                👾 {user.username}
              </button>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="bevel-box px-3 py-2 font-pixel text-xs text-y2k-cyan hover:text-y2k-yellow transition-colors"
              >
                🔑 LOGIN
              </button>
            )}
          </div>

          {/* Center: logo */}
          <Link to="/" className="flex items-center gap-3 no-underline">
            <span className="text-4xl">🎤</span>
            <div>
              <h1 className="font-pixel text-2xl sm:text-3xl y2k-text-gradient leading-tight">
                SingLearn
              </h1>
              <p className="text-xs text-y2k-cyan font-retro">
                ～ angleščina skozi glasbo ～
              </p>
            </div>
          </Link>

          {/* Right: nav */}
          <nav className="flex gap-2 flex-wrap">
            <Link to="/" className="bevel-box px-4 py-2 text-y2k-purple hover:text-y2k-lime no-underline text-sm font-pixel transition-colors">
              🏠 Domov
            </Link>
          </nav>
        </div>

        {/* Visitor counter */}
        <div className="mt-2 flex justify-end">
          <div className="text-xs font-retro text-muted-foreground">
            🎈 Radovedni obiskovalci: {visitors}
          </div>
        </div>
      </div>

      {/* Auth modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </header>
  );
};

export default Y2KHeader;
