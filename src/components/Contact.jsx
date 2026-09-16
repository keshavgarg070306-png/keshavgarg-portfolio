import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSent(true);
    setTimeout(() => {
      window.location.href = `mailto:keshavgarg070306@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    }, 500);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.sectionHeader}>
        <motion.div 
          className="section-badge"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-dot"></span>
          <span>[09] CONNECT — INITIALIZE INQUIRY</span>
        </motion.div>

        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's talk <span className="highlight-italic">systems</span>.
        </motion.h2>
      </div>

      <motion.div 
        className={`bento-card ${styles.card}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Column: Direct Info */}
        <div className={styles.leftCol}>
          <div>
            <h3 className={styles.heading}>Ready to build or hire?</h3>
            <p className={styles.subText}>
              I'm actively seeking Software Engineering and Full Stack Internship roles. Whether you have a project inquiry or an open engineering role, reach out directly.
            </p>

            <div className={styles.contactList}>
              <a href="mailto:keshavgarg070306@gmail.com" className={styles.contactItem}>
                <Mail size={18} style={{ color: 'var(--accent-lime)' }} />
                <span>keshavgarg070306@gmail.com</span>
              </a>
              <a href="tel:+919518062276" className={styles.contactItem}>
                <Phone size={18} style={{ color: 'var(--accent-lime)' }} />
                <span>+91-9518062276</span>
              </a>
            </div>
          </div>

          <div className={styles.socialRow}>
            <a 
              href="https://github.com/keshavgarg070306-png" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialBtn}
            >
              <FaGithub size={16} /> GitHub ↗
            </a>
            <a 
              href="https://linkedin.com/in/keshavgarg736" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialBtn}
            >
              <FaLinkedin size={16} /> LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right Column: Briefing Form */}
        <div className={styles.rightCol}>
          <h4 className={styles.formTitle}>Send a Quick Message</h4>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Your Name</label>
              <input 
                type="text" 
                className={styles.input}
                placeholder="e.g. Alex Rivera"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address *</label>
              <input 
                type="email" 
                required
                className={styles.input}
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Subject / Role</label>
              <input 
                type="text" 
                className={styles.input}
                placeholder="Full Stack Developer Role / Contract"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Message Details *</label>
              <textarea 
                required
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Outline the project scope, requirements, or role details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              {sent ? 'Opening Mail Client...' : 'Transmit Message'} <Send size={16} />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
