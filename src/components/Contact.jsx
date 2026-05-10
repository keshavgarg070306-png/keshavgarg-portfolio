import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

const MagneticButton = ({ children, className, href }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={buttonRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
    >
      {children}
    </motion.a>
  );
};

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.sectionHeader}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Initialize <span className="text-gradient">Connection</span>
        </motion.h2>
      </div>

      <motion.div 
        className={`glass-panel ${styles.contactCard}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.contactText}>
          I'm actively seeking Software Engineering and Full Stack Internship roles. Let's discuss how my skills can scale your systems.
        </p>
        
        <div className={styles.contactActions}>
          <MagneticButton href="mailto:keshavgarg070306@example.com" className={styles.actionBtn}>
            <Mail size={20} /> Transmit Email
          </MagneticButton>
          <MagneticButton href="tel:+919518062276" className={styles.actionBtnSecondary}>
            <Phone size={20} /> +91-9518062276
          </MagneticButton>
        </div>

        <div className={styles.socialLinks}>
          <MagneticButton href="https://github.com/keshavgarg070306-png" className={styles.socialIcon}>
            <FaGithub size={24} />
          </MagneticButton>
          <MagneticButton href="https://linkedin.com/in/keshavgarg736" className={styles.socialIcon}>
            <FaLinkedin size={24} />
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
