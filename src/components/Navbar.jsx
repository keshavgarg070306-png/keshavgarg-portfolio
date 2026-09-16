import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { num: '01', name: 'Profile', href: '#hero' },
    { num: '02', name: 'Projects', href: '#projects' },
    { num: '03', name: 'Stats', href: '#numbers' },
    { num: '04', name: 'Capabilities', href: '#skills' },
    { num: '05', name: 'Process', href: '#process' },
    { num: '06', name: 'Terminal', href: '#terminal' },
    { num: '07', name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#hero" className={styles.logoText}>
            K<span className={styles.logoDot}>.</span>
          </a>
          <div className={styles.statusPill}>
            <span className={styles.pulseDot}></span>
            <span>AVAILABLE FOR WORK</span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav>
          <ul className={styles.navLinks}>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a href={item.href} className={styles.navLink}>
                  <span className={styles.navNum}>[{item.num}]</span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Contact Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#contact" className={styles.contactBtn}>
            Contact Me <ArrowUpRight size={14} />
          </a>

          {/* Mobile Toggle */}
          <button 
            className={styles.mobileToggle} 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: '#0c0c10',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: '#94a3b8',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span style={{ color: 'var(--accent-lime)' }}>[{item.num}]</span>
                <span>{item.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
