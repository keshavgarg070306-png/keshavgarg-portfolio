import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.container}>
        {/* Left Column: Big Headline & Info */}
        <div className={styles.leftColumn}>
          {/* Section Badge */}
          <motion.div 
            className="section-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-dot"></span>
            <span>[01] KESHAV GARG — PORTFOLIO</span>
          </motion.div>

          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Engineering intelligent <span className="highlight-italic">systems</span> that scale and adapt.
          </motion.h1>

          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            B.Tech Computer Science (IoT) student at GGSIPU, New Delhi. Full-stack developer specialized in robust Spring Boot microservices, real-time WebSockets, and AI workflow automation.
          </motion.p>

          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a href="#projects" className={styles.primaryBtn}>
              Explore Systems <ArrowRight size={16} />
            </a>
            <a 
              href="/Keshav_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.secondaryBtn}
            >
              Resume PDF ↗
            </a>
            <a href="#terminal" className={styles.secondaryBtn}>
              <Terminal size={16} /> Open CLI
            </a>
            <a 
              href="https://github.com/keshavgarg070306-png" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.secondaryBtn}
            >
              <FaGithub size={16} /> GitHub ↗
            </a>
          </motion.div>
        </div>

        {/* Right Column: Code & Architecture Preview */}
        <motion.div 
          className={styles.codeCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles.codeHeader}>
            <div className={styles.windowDots}>
              <span className={styles.dotRed}></span>
              <span className={styles.dotYellow}></span>
              <span className={styles.dotGreen}></span>
            </div>
            <span className={styles.fileName}>KeshavEngine.java</span>
            <Sparkles size={14} style={{ color: 'var(--accent-lime)' }} />
          </div>

          <div className={styles.codeBody}>
            <p><span className={styles.codeComment}>// System initialization</span></p>
            <p><span className={styles.codeKeyword}>public class</span> <span className={styles.codeVar}>KeshavEngine</span> {'{'}</p>
            <p style={{ paddingLeft: '1rem' }}><span className={styles.codeKeyword}>private final</span> String <span className={styles.codeVar}>role</span> = <span className={styles.codeString}>"Full Stack Architect"</span>;</p>
            <p style={{ paddingLeft: '1rem' }}><span className={styles.codeKeyword}>private final</span> String <span className={styles.codeVar}>degree</span> = <span className={styles.codeString}>"B.Tech CS (IoT) @ GGSIPU"</span>;</p>
            <p style={{ paddingLeft: '1rem' }}><span className={styles.codeKeyword}>private final</span> List&lt;String&gt; <span className={styles.codeVar}>coreStack</span> = List.of(</p>
            <p style={{ paddingLeft: '2rem' }}><span className={styles.codeString}>"Spring Boot"</span>, <span className={styles.codeString}>"React"</span>, <span className={styles.codeString}>"Redis"</span>, <span className={styles.codeString}>"WebSockets"</span></p>
            <p style={{ paddingLeft: '1rem' }}>);</p>
            <br/>
            <p style={{ paddingLeft: '1rem' }}><span className={styles.codeKeyword}>public boolean</span> <span className={styles.codeVar}>isAvailableForHire</span>() {'{'}</p>
            <p style={{ paddingLeft: '2rem' }}><span className={styles.codeKeyword}>return</span> <span className={styles.codeString}>true</span>; <span className={styles.codeComment}>// Open to SDE & Internship roles</span></p>
            <p style={{ paddingLeft: '1rem' }}>{'}'}</p>
            <p>{'}'}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
