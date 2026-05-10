import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
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
    <div className="app-container">
      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--text-secondary)',
        borderTop: '1px solid var(--glass-border)',
        marginTop: '50px',
        position: 'relative',
        zIndex: 10
      }}>
        <p>© {new Date().getFullYear()} Built with React & Framer Motion. Engineered for Performance.</p>
      </footer>
    </div>
  );
}

export default App;
