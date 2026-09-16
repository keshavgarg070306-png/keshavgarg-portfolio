import { motion } from 'framer-motion';
import { ExternalLink, Database, Zap, Bot, Code2, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

const projectsData = [
  {
    title: 'Grassroots Radar',
    subtitle: 'SPORTS RECRUITMENT PLATFORM (2025 - PRESENT)',
    description: 'Developed a full-stack sports recruitment platform connecting athletes and scouts. Features Framer Motion animations, ApexCharts analytics dashboards, Redis caching with PostgreSQL, real-time WebSocket messaging, and Google OAuth + JWT security.',
    tech: ['React.js', 'Spring Boot', 'PostgreSQL', 'Redis', 'WebSockets', 'ApexCharts', 'Google OAuth'],
    icon: <Zap size={24} />,
    image: '/grassroots_radar.png',
    github: 'https://github.com/keshavgarg070306-png/grassroots-backend',
    live: '#'
  },
  {
    title: 'AthleteCoach AI',
    subtitle: 'CLOUD-NATIVE MICROSERVICES (2025 - PRESENT)',
    description: 'Engineered a full stack cloud-native microservices platform supporting concurrent users. Features responsive React.js UI, REST APIs, WebSocket real-time updates, MySQL query indexing, JWT + RBAC security, and CI/CD pipelines for zero-downtime releases.',
    tech: ['Spring Boot', 'Microservices', 'MySQL', 'React.js', 'JWT', 'WebSockets', 'CI/CD Pipelines'],
    icon: <Database size={24} />,
    image: '/athletecoach_ai.png',
    github: 'https://github.com/keshavgarg070306-png/athletecoach-ai',
    live: '#'
  },
  {
    title: 'NexCore ERP',
    subtitle: 'ENTERPRISE MONOREPO SYSTEM (2025 - 2026)',
    description: 'Developed a cloud-native monorepo ERP system implementing multi-role access control (RBAC), real-time financial auditing, interactive payroll/HR dashboards with Zod & Zustand, automated inventory tracking, and Docker containerization.',
    tech: ['Spring Boot', 'React', 'TypeScript', 'Tailwind CSS', 'Zod', 'Zustand', 'Docker'],
    icon: <Code2 size={24} />,
    image: '/nexcore_erp.png',
    github: 'https://github.com/keshavgarg070306-png/erp',
    live: '#'
  },
  {
    title: 'Outreach Engine',
    subtitle: 'AI WORKFLOW AUTOMATION',
    description: 'Developer-centric cold email workflow automation. Parses CSVs, dynamically generates highly personalized, results-oriented emails via Groq AI API and dispatches via Gmail API.',
    tech: ['Node.js', 'Groq AI API', 'Gmail API', 'Express'],
    icon: <Bot size={24} />,
    image: '/outreach_engine.png',
    github: 'https://github.com/keshavgarg070306-png/C-emails',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.sectionHeader}>
        <motion.div 
          className="section-badge"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-dot"></span>
          <span>[02] SELECTED SYSTEMS — FEATURED WORKS</span>
        </motion.div>
        
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Architected <span className="highlight-italic">solutions</span>.
        </motion.h2>
      </div>

      <div className={styles.grid}>
        {projectsData.map((project, index) => (
          <motion.div 
            key={index} 
            className={`bento-card ${styles.card}`}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div>
              {project.image && (
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                  <div className={styles.imageOverlay}></div>
                </div>
              )}

              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>{project.icon}</div>
                <div className={styles.links}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.linkBtn}
                    title="View GitHub Repository"
                  >
                    <FaGithub size={18} />
                  </a>
                  {project.live !== '#' && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.linkBtn}
                      title="View Live System"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <div className={styles.cardSubtitle}>{project.subtitle}</div>
              <p className={styles.cardDesc}>{project.description}</p>
            </div>

            <div className={styles.techList}>
              {project.tech.map((t, i) => (
                <span key={i} className={styles.techTag}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
