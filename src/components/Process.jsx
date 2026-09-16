import { motion } from 'framer-motion';
import styles from './Process.module.css';

const steps = [
  {
    step: '01',
    title: 'Strategy & Specs',
    desc: 'Map out the system requirements, database schema, security model, and API contracts before writing a single line of code.'
  },
  {
    step: '02',
    title: 'Architecture & Backend',
    desc: 'Engineer decoupled microservices in Java & Spring Boot, integrating Redis caching layers and role-based JWT security.'
  },
  {
    step: '03',
    title: 'Build & Realtime UI',
    desc: 'Develop pixel-perfect React/Vite interfaces connected to real-time WebSockets and responsive backend pipelines.'
  },
  {
    step: '04',
    title: 'Launch & Optimization',
    desc: 'Containerize with Docker, benchmark database query performance, audit security logs, and deploy for high availability.'
  }
];

const Process = () => {
  return (
    <section className={styles.processSection} id="process">
      <div className={styles.sectionHeader}>
        <motion.div 
          className="section-badge"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-dot"></span>
          <span>[05] ENGINEERING PROCESS — HOW I BUILD</span>
        </motion.div>

        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Zero friction <span className="highlight-italic">workflow</span>.
        </motion.h2>
      </div>

      <div className={styles.grid}>
        {steps.map((item, i) => (
          <motion.div
            key={i}
            className={`bento-card ${styles.card}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div>
              <div className={styles.stepNum}>STEP {item.step}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>
            <p className={styles.cardDesc}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
