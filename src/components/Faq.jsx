import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './Faq.module.css';

const faqs = [
  {
    q: 'What roles are you actively looking for?',
    a: 'I am actively seeking Software Engineering, Backend Developer, and Full-Stack Internship roles. I focus on building scalable systems, microservices, and high-performance Web applications.'
  },
  {
    q: 'What is your primary engineering stack?',
    a: 'My core stack centers around Java 21, Spring Boot 3, React 19, Redis, WebSockets, PostgreSQL, and Docker containerization. I also build automated AI workflows with Node.js.'
  },
  {
    q: 'Do you build custom enterprise platforms?',
    a: 'Yes. I have designed cloud-native monorepo ERP systems featuring multi-role access control (RBAC), real-time financial auditing, HR payroll dashboards, and automated stock alerts.'
  },
  {
    q: 'Are you open to remote or relocation work?',
    a: 'Absolutely. Based in New Delhi (MH/Delhi NCR), I handle both local India placements and fully remote global software engineering teams seamlessly.'
  },
  {
    q: 'How do you ensure microservice reliability and zero-lag performance?',
    a: 'By enforcing decoupled microservice boundaries, utilizing Redis in-memory caching for hot data, handling asynchronous events via WebSockets, and indexing database schema queries.'
  },
  {
    q: 'Do clients and teams get full access to the source code?',
    a: 'Yes. Once a project or module is completed, you receive complete repository ownership, clean documentation, and exclusive deployment rights. No vendor lock-in.'
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.sectionHeader}>
        <motion.div 
          className="section-badge"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-dot"></span>
          <span>[08] BRIEFING — ANSWERS UP FRONT</span>
        </motion.div>

        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Answers up <span className="highlight-italic">front</span>.
        </motion.h2>
      </div>

      <div className={styles.accordionList}>
        {faqs.map((faq, idx) => (
          <motion.div 
            key={idx} 
            className={styles.faqCard}
            onClick={() => toggle(idx)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <div className={styles.questionRow}>
              <h3 className={styles.questionText}>{faq.q}</h3>
              <div className={styles.toggleIcon}>
                {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </div>

            <AnimatePresence>
              {openIndex === idx && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={styles.answerText}
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
