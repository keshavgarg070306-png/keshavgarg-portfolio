import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Wifi } from 'lucide-react';
import styles from './CommandCenter.module.css';

const CommandCenter = () => {
  return (
    <section className={styles.section} id="command-center">
      <div className={styles.sectionHeader}>
        <motion.div 
          className="section-badge"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-dot"></span>
          <span>[06] COMMAND CENTER — WORKSPACE & ENVIRONMENT</span>
        </motion.div>

        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The development <span className="highlight-italic">engine</span>.
        </motion.h2>
      </div>

      <motion.div 
        className={`bento-card ${styles.card}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.leftCol}>
          <h3 className={styles.mainHead}>High-performance dev environment.</h3>
          <p className={styles.description}>
            Engineered for deep work, rapid compilation, and zero distractions. From building microservices architecture in IntelliJ to optimizing React state hooks in VS Code, every tool is tuned for speed and stability.
          </p>

          <div className={styles.specGrid}>
            <div className={styles.specItem}>
              <div className={styles.specLabel}>LOCATION / BASE</div>
              <div className={styles.specVal}>Hisar, Haryana & New Delhi</div>
            </div>
            <div className={styles.specItem}>
              <div className={styles.specLabel}>EDUCATION</div>
              <div className={styles.specVal}>GGSIPU (B.Tech CS IoT 2023-2027)</div>
            </div>
            <div className={styles.specItem}>
              <div className={styles.specLabel}>EXPERIENCE</div>
              <div className={styles.specVal}>Project Engineer (Independent)</div>
            </div>
            <div className={styles.specItem}>
              <div className={styles.specLabel}>CLOUD & CI/CD</div>
              <div className={styles.specVal}>GitHub Actions & Railway</div>
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.sysHeader}>
            <Terminal size={16} />
            <span>SYS_SPECS_V2.0</span>
          </div>

          <div className={styles.sysRow}>
            <span>BACKEND_FRAMEWORK</span>
            <span style={{ color: 'var(--accent-lime)' }}>SPRING BOOT / MVC</span>
          </div>
          <div className={styles.sysRow}>
            <span>FRONTEND_LIB</span>
            <span style={{ color: '#38bdf8' }}>REACT.JS + TAILWIND</span>
          </div>
          <div className={styles.sysRow}>
            <span>DATABASES</span>
            <span style={{ color: '#f472b6' }}>MYSQL & POSTGRESQL</span>
          </div>
          <div className={styles.sysRow}>
            <span>CACHE_STORE</span>
            <span style={{ color: '#ff5f56' }}>REDIS IN-MEMORY</span>
          </div>
          <div className={styles.sysRow}>
            <span>ORCHESTRATION</span>
            <span style={{ color: '#38bdf8' }}>DOCKER, KAFKA, K8S</span>
          </div>
          <div className={styles.sysRow}>
            <span>SECURITY_PROTOCOL</span>
            <span style={{ color: 'var(--accent-lime)' }}>JWT, OAUTH 2.0 & RBAC</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CommandCenter;
