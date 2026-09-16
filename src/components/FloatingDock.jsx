import { useState, useEffect } from 'react';
import { ArrowUp, Terminal as TerminalIcon, Mail, Volume2, VolumeX, Palette } from 'lucide-react';
import styles from './FloatingDock.module.css';

const themes = ['default', 'cyan', 'amber', 'emerald', 'purple'];

const FloatingDock = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [themeIdx, setThemeIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cycleTheme = () => {
    const nextIdx = (themeIdx + 1) % themes.length;
    setThemeIdx(nextIdx);
    const nextTheme = themes[nextIdx];
    if (nextTheme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', nextTheme);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // AudioContext not allowed or supported
    }
  };

  return (
    <div className={styles.dock}>
      {/* Theme Accent Cycler */}
      <button 
        className={styles.dockBtn} 
        onClick={() => {
          cycleTheme();
          playClickSound();
        }}
        title={`Current Accent: ${themes[themeIdx].toUpperCase()} (Click to cycle theme accent)`}
      >
        <Palette size={18} />
      </button>

      {/* Sound Toggle */}
      <button 
        className={styles.dockBtn} 
        onClick={() => {
          setSoundEnabled(!soundEnabled);
          playClickSound();
        }}
        title={soundEnabled ? "Mute UI Sounds" : "Enable UI Sounds"}
      >
        {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>

      {/* Terminal Jump */}
      <a 
        href="#terminal" 
        className={styles.dockBtn} 
        onClick={playClickSound}
        title="Open Interactive CLI Terminal"
      >
        <TerminalIcon size={18} />
      </a>

      {/* Direct Mail */}
      <a 
        href="mailto:keshavgarg070306@gmail.com" 
        className={styles.dockBtn} 
        onClick={playClickSound}
        title="Send Quick Email"
      >
        <Mail size={18} />
      </a>

      {/* Scroll to top */}
      {showScroll && (
        <button 
          className={styles.dockBtn} 
          onClick={() => {
            scrollToTop();
            playClickSound();
          }}
          title="Scroll to Top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default FloatingDock;
