import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiSpringboot, SiNodedotjs, SiPostgresql, SiTailwindcss, SiVite, SiDocker, SiGit, SiRedis } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Network } from 'lucide-react';
import styles from './Skills.module.css';

const allSkills = [
  { name: 'Java', icon: <FaJava size={32} /> },
  { name: 'Spring Boot', icon: <SiSpringboot size={32} /> },
  { name: 'React', icon: <SiReact size={32} /> },
  { name: 'Redis', icon: <SiRedis size={32} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={32} /> },
  { name: 'WebSockets', icon: <Network size={32} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={32} /> },
  { name: 'Microservices', icon: <SiDocker size={32} /> },
];

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.sectionHeader}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Core <span className="text-gradient">Capabilities</span>
        </motion.h2>
      </div>

      <div className={styles.skillsGrid}>
        {allSkills.map((skill, i) => (
          <motion.div 
            key={i} 
            className={`glass-panel ${styles.skillTile}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className={styles.skillIcon}>
              {skill.icon}
            </div>
            <span className={styles.skillName}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
