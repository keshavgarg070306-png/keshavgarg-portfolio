import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    company: "AthleteCoach AI",
    role: "Full-Stack Developer",
    date: "2025 - Present"
  },
  {
    company: "NexCore ERP",
    role: "Full-Stack Engineer",
    date: "2025 - 2026"
  },
  {
    company: "Grassroots Radar",
    role: "Backend Architect",
    date: "2025"
  },
  {
    company: "Outreach Automation",
    role: "Node.js Developer",
    date: "2025"
  },
  {
    company: "GGSIPU, New Delhi",
    role: "B.Tech CS (IoT)",
    date: "Expected 2027"
  }
];

const Experience = () => {
  return (
    <section className={styles.experienceSection} id="experience">
      <div className={styles.container}>
        {/* Left Column: Heading */}
        <div className={styles.leftColumn}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h2>
        </div>

        {/* Right Column: Content */}
        <div className={styles.rightColumn}>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            With a deep focus on backend architecture and full-stack development, I've spent my academic and independent career building <strong>scalable, cloud-native platforms</strong> and engineering <strong>seamless, high-performance web applications</strong>. Whether it's designing complex microservices with Spring Boot or crafting engaging UIs with React, I thrive on turning intricate challenges into elegant solutions.
            <br/><br/>
            When I'm not deep in my IDE, you'll probably find me exploring open-source projects or finding new ways to automate my workflows.
          </motion.p>

          <motion.div 
            className={styles.experienceGrid}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {experiences.map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <h3 className={styles.companyName}>{exp.company}</h3>
                <p className={styles.roleTitle}>{exp.role}</p>
                <p className={styles.dateText}>{exp.date}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="/KCV_FS.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
              View resume <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
