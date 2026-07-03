import React from 'react';
import { motion } from 'framer-motion';
import profileAvatar from '../assets/THIRU_PROFILE.jpg';
import { userData } from '../data/user';
import HeroActions from './HeroActions';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const Hero = () => {
  return (
    <section id="hero" className="section hero-section">
      <div className="container hero-grid">
        {/* Text side */}
        <div className="hero-content">
          <motion.p className="eyebrow" {...fadeUp(0.1)}>Hello, I'm</motion.p>

          <motion.h1 className="text-gradient hero-title" {...fadeUp(0.18)}>
            {userData.name}
          </motion.h1>

          <motion.h2 className="hero-subtitle" {...fadeUp(0.25)}>
            {userData.title}
          </motion.h2>

          <motion.p className="hero-degree" {...fadeUp(0.3)}>
            {userData.degree}
          </motion.p>

          <motion.p className="hero-intro" {...fadeUp(0.36)}>
            {userData.intro}
          </motion.p>

          {/* Quick stats bar */}
          <motion.div className="hero-stats" {...fadeUp(0.42)}>
            <div className="hero-stat">
              <span className="hero-stat-num">10+</span>
              <span className="hero-stat-label">Certificates</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <span className="hero-stat-num">3+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <span className="hero-stat-num">3+</span>
              <span className="hero-stat-label">Hackathons</span>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.48)}>
            <HeroActions />
          </motion.div>
        </div>

        {/* Visual side */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <motion.div
            className="hero-avatar-ring"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={profileAvatar}
              alt="Professional portrait of Thiruselvan M"
              className="profile-image"
              draggable="false"
            />
          </motion.div>

          {/* Status badge */}
          <motion.div
            className="hero-status-badge"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="hero-status-dot" aria-hidden="true" />
            Available for opportunities
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
