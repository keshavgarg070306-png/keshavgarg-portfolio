import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Column: Big Headline */}
        <div className={styles.leftColumn}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          >
            Hello, I'm Keshav
          </motion.h1>
        </div>

        {/* Right Column: Subtitle & Text */}
        <div className={styles.rightColumn}>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Designing, building & scaling high-performance platforms. Whether it's robust Spring Boot microservices, real-time WebSockets, or dynamic React interfaces, I focus on engineering seamless systems that work.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
