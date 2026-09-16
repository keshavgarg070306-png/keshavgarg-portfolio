import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import styles from './TerminalSection.module.css';

const TerminalSection = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      cmd: 'welcome',
      output: `Keshav Garg CLI v2.0.0 [New Delhi, IN]
Type 'help' to view all available commands.`
    }
  ]);

  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const rawCmd = inputVal.trim();
      const lowerCmd = rawCmd.toLowerCase();
      let outputStr = '';

      if (lowerCmd === 'help') {
        outputStr = `Available Commands:
  - help      : Show this help message
  - about     : Summary of Keshav's background & education
  - projects  : List featured engineering projects
  - skills    : View technical skills & microservices stack
  - contact   : Get email, phone, & LinkedIn
  - clear     : Clear terminal history
  - matrix    : Launch green matrix protocol
  - sudo hire : Unlock recruitment protocol`;
      } else if (lowerCmd === 'about') {
        outputStr = `Keshav Garg — Full Stack Developer & Backend Architect
B.Tech CS (IoT) Student @ GGSIPU, New Delhi.
Passionate about Spring Boot microservices, real-time WebSockets, and AI workflow automation.`;
      } else if (lowerCmd === 'projects') {
        outputStr = `1. Grassroots Radar [Spring Boot, React, Redis, WebSockets]
2. NexCore ERP      [Spring Boot, React, TypeScript, Docker]
3. AthleteCoach AI  [Spring Boot, AI Microservices, JWT]
4. Outreach Engine  [Node.js, Groq AI API, Gmail API]`;
      } else if (lowerCmd === 'skills') {
        outputStr = `Backend  : Java 21, Spring Boot, Microservices, REST, JWT
Frontend : React 19, TypeScript, Vite, Tailwind CSS
Data     : PostgreSQL, Redis, WebSockets
DevOps   : Docker, Git, Groq AI API`;
      } else if (lowerCmd === 'contact') {
        outputStr = `Email    : keshavgarg070306@gmail.com
Phone    : +91-9518062276
LinkedIn : linkedin.com/in/keshavgarg736
GitHub   : github.com/keshavgarg070306-png`;
      } else if (lowerCmd === 'clear') {
        setHistory([]);
        setInputVal('');
        return;
      } else if (lowerCmd === 'matrix') {
        outputStr = `01001011 01000101 01010011 01001000 01000001 01010110
[SYSTEM OVERRIDE] MATRIX PROTOCOL ACTIVE...
>>> Scaling microservices cluster to 100% capacity...`;
      } else if (lowerCmd === 'sudo hire' || lowerCmd === 'hire') {
        outputStr = `[PERMITTED] Initializing direct recruitment protocol...
Access Granted! Keshav is available for Software Engineering & Full-Stack Internship roles.
Email: keshavgarg070306@gmail.com | Phone: +91-9518062276`;
      } else if (rawCmd === '') {
        outputStr = '';
      } else {
        outputStr = `Command not recognized: '${rawCmd}'. Type 'help' for command list.`;
      }

      setHistory((prev) => [...prev, { cmd: rawCmd, output: outputStr }]);
      setInputVal('');
    }
  };

  return (
    <section className={styles.section} id="terminal">
      <div className={styles.sectionHeader}>
        <motion.div 
          className="section-badge"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-dot"></span>
          <span>[07] INTERACTIVE CLI — TERMINAL INTERACTION</span>
        </motion.div>

        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Interactive <span className="highlight-italic">terminal</span>.
        </motion.h2>
      </div>

      <motion.div 
        className={styles.terminalWindow}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.terminalHeader}>
          <div className={styles.titleText}>
            <TerminalIcon size={16} />
            <span>keshav@delhi-node:~</span>
          </div>
          <Sparkles size={14} style={{ color: 'var(--accent-lime)' }} />
        </div>

        <div className={styles.terminalBody} ref={bodyRef}>
          {history.map((item, idx) => (
            <div key={idx} className={styles.historyLine}>
              {item.cmd && (
                <div>
                  <span className={styles.prompt}>keshav@delhi:~$</span>
                  <span>{item.cmd}</span>
                </div>
              )}
              {item.output && (
                <div className={styles.outputBlock}>{item.output}</div>
              )}
            </div>
          ))}

          <div className={styles.inputRow}>
            <span className={styles.prompt}>keshav@delhi:~$</span>
            <input 
              type="text" 
              className={styles.cliInput}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              placeholder="type 'help'..."
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TerminalSection;
