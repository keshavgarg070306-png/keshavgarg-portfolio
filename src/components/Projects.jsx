import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Database, Zap, Bot, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

const projectsData = [
  {
    title: 'Grassroots Radar',
    subtitle: 'Full-Stack Analytical Platform',
    description: 'High-performance platform bridging Scouts and Athletes. Features real-time analytical components, radar-scanning animations, and a secure, decoupled role-specific architecture.',
    tech: ['Spring Boot', 'React', 'Redis', 'WebSockets'],
    icon: <Zap size={32} />,
    image: '/grassroots_radar.png',
    github: 'https://github.com/keshavgarg070306-png/grassroots-backend',
    live: '#',
    span: 'col-span-2 row-span-2'
  },
  {
    title: 'NexCore ERP',
    subtitle: 'Enterprise Systems',
    description: 'A cloud-native monorepo ERP system. Implements multi-role access control (RBAC), real-time financial auditing, HR payroll dashboards, inventory tracking, and automated stock notifications.',
    tech: ['Spring Boot', 'React', 'TypeScript', 'Tailwind', 'Docker'],
    icon: <Code2 size={32} />,
    image: '/nexcore_erp.png',
    github: 'https://github.com/keshavgarg070306-png/erp',
    live: '#',
    span: 'col-span-1 row-span-2'
  },
  {
    title: 'AthleteCoach AI',
    subtitle: 'Sports Analytics',
    description: 'Cloud-native microservices platform for athlete performance tracking. Deep integration of AI-driven insights with robust JWT security.',
    tech: ['Spring Boot', 'React', 'Docker'],
    icon: <Database size={32} />,
    image: '/athletecoach_ai.png',
    github: 'https://github.com/keshavgarg070306-png/athletecoach-ai',
    live: '#',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Outreach Engine',
    subtitle: 'Workflow Automation',
    description: 'Developer-centric cold email workflow automation. Parses CSVs, dynamically generates highly personalized, results-oriented emails via Groq AI API.',
    tech: ['Node.js', 'Groq AI API', 'Gmail API'],
    icon: <Bot size={32} />,
    image: '/outreach_engine.png',
    github: 'https://github.com/keshavgarg070306-png/C-emails',
    live: '#',
    span: 'col-span-2 row-span-1'
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`project-card-${index}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.sectionHeader}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Selected <span className="text-gradient">Systems</span>
        </motion.h2>
      </div>

      <div className={styles.bentoGrid}>
        {projectsData.map((project, index) => (
          <motion.div 
            id={`project-card-${index}`}
            key={index} 
            className={`glass-panel ${styles.bentoCard} ${styles[project.span.split(' ')[0]]} ${styles[project.span.split(' ')[1]]}`}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {project.image && (
              <div className={styles.cardImageWrapper}>
                <img src={project.image} alt={project.title} className={styles.cardImage} />
                <div className={styles.imageOverlay}></div>
              </div>
            )}
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{project.icon}</div>
                <div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectSubtitle}>{project.subtitle}</p>
                </div>
              </div>
              
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={styles.revealContent}
                  >
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.techStack}>
                      {project.tech.map((tech, i) => (
                        <span key={i} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className={styles.projectLinks}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                <FaGithub size={18} />
              </a>
              {project.live !== '#' && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
