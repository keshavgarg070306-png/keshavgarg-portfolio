import { motion } from 'framer-motion';
import { Server, Layout, Database, Cpu } from 'lucide-react';
import { SiSpringboot, SiReact, SiPostgresql, SiRedis, SiDocker, SiNodedotjs, SiTailwindcss, SiVite, SiTypescript, SiGit } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import styles from './Skills.module.css';

const categories = [
  {
    title: 'Backend & Microservices',
    icon: <Server size={20} className={styles.categoryIcon} />,
    desc: 'Distributed systems in Java, Spring Boot, Spring MVC, REST APIs, Microservices, Redis, Kafka, and Kubernetes.',
    items: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Microservices', icon: <Server /> },
      { name: 'REST APIs', icon: <Cpu /> },
      { name: 'Kafka', icon: <Server /> },
      { name: 'Kubernetes', icon: <SiDocker /> },
    ]
  },
  {
    title: 'Frontend & UI Engine',
    icon: <Layout size={20} className={styles.categoryIcon} />,
    desc: 'Responsive, highly interactive web applications built with React.js, Tailwind CSS, Framer Motion, and ApexCharts.',
    items: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'JavaScript (ES6+)', icon: <SiTypescript /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Vite', icon: <SiVite /> },
      { name: 'UI/UX Principles', icon: <Layout /> },
    ]
  },
  {
    title: 'Databases, Realtime & Security',
    icon: <Database size={20} className={styles.categoryIcon} />,
    desc: 'MySQL, PostgreSQL, Redis caching, WebSockets for live updates, JWT security, OAuth 2.0, and RBAC control.',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiPostgresql /> },
      { name: 'Redis Caching', icon: <SiRedis /> },
      { name: 'WebSockets', icon: <Cpu /> },
      { name: 'JWT & OAuth 2.0', icon: <Cpu /> },
    ]
  },
  {
    title: 'DevOps, Cloud & System Design',
    icon: <Cpu size={20} className={styles.categoryIcon} />,
    desc: 'GitHub Actions, CI/CD pipelines, Docker containerization, Railway Cloud, API Gateways, Rate Limiting, and System Design.',
    items: [
      { name: 'GitHub Actions', icon: <SiGit /> },
      { name: 'CI/CD Pipelines', icon: <SiGit /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Railway Cloud', icon: <Server /> },
      { name: 'System Design', icon: <Cpu /> },
    ]
  }
];

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.sectionHeader}>
        <motion.div 
          className="section-badge"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-dot"></span>
          <span>[04] CORE CAPABILITIES — TECHNICAL ARSENAL</span>
        </motion.div>
        
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Verified <span className="highlight-italic">arsenal</span>.
        </motion.h2>
      </div>

      <div className={styles.grid}>
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            className={`bento-card ${styles.categoryCard}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className={styles.categoryTitle}>
              {cat.icon}
              <span>{cat.title}</span>
            </div>
            <p className={styles.categoryDesc}>{cat.desc}</p>
            <div className={styles.skillsPills}>
              {cat.items.map((item, idx) => (
                <div key={idx} className={styles.skillPill}>
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
