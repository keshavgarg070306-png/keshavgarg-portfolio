import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Numbers from './components/Numbers';
import Skills from './components/Skills';
import Process from './components/Process';
import CommandCenter from './components/CommandCenter';
import TerminalSection from './components/TerminalSection';
import Faq from './components/Faq';
import Contact from './components/Contact';
import FloatingDock from './components/FloatingDock';
import { motion } from 'framer-motion';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="app-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Top Navbar */}
      <Navbar />

      {/* Ambient drifting background blobs */}
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>
      
      {/* Interactive Mouse Spotlight */}
      <motion.div
        className="interactive-bg-glow"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 60, mass: 1 }}
      />
      
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Projects />
        <Numbers />
        <Skills />
        <Process />
        <CommandCenter />
        <TerminalSection />
        <Faq />
        <Contact />
      </main>
      
      {/* Floating Action Dock */}
      <FloatingDock />
      
      <footer style={{
        textAlign: 'center',
        padding: '2.5rem 1.5rem',
        color: 'var(--text-tertiary)',
        borderTop: '1px solid var(--glass-border)',
        marginTop: '20px',
        position: 'relative',
        zIndex: 10,
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem'
      }}>
        <p>© {new Date().getFullYear()} KESHAV GARG — ENGINEERED IN ARCH / LINUX & REACT</p>
      </footer>
    </div>
  );
}

export default App;

