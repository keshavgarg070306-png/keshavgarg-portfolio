import { motion } from 'framer-motion';
import styles from './Numbers.module.css';

const stats = [
  {
    num: '04+',
    label: 'Core Systems Built',
    desc: 'Full-stack platforms including ERP, AI Athlete Tracking, Scouting Radar, and Outreach Automation.'
  },
  {
    num: '100%',
    label: 'Decoupled Security',
    desc: 'Role-specific JWT authentication, RBAC access control, and real-time financial auditing.'
  },
  {
    num: '95%',
    label: 'Outreach Efficiency',
    desc: 'Automated CSV parsing with dynamic Groq AI API prompt generation and Gmail API dispatch.'
  },
  {
    num: '2027',
    label: 'GGSIPU B.Tech CS (IoT)',
    desc: 'Computer Science & IoT degree at Guru Gobind Singh Indraprastha University, New Delhi.'
  }
];

const Numbers = () => {
  return (
    <section className={styles.numbersSection} id="numbers">
      <div className={styles.sectionHeader}>
        <motion.div 
          className="section-badge"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-dot"></span>
          <span>[03] THE NUMBERS — DATA DRIVEN</span>
        </motion.div>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Metrics & <span className="highlight-italic">achievements</span>.
        </motion.h2>
      </div>

      <div className={styles.grid}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className={`bento-card ${styles.card}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div>
              <div className={styles.statNumber}>{stat.num}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
            <div className={styles.statDesc}>{stat.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Numbers;
