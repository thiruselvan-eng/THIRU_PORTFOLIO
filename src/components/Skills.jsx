import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { userData } from '../data/user';

const SKILL_ICONS = {
  'Programming Languages': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'Web Technologies': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  ),
  'Database & Tools': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3S3 13.66 3 12" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'Core CS': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  ),
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55 } }),
};

const SkillCard = memo(({ skill, index }) => (
  <motion.div
    className="skill-card-v2"
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-40px' }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="skill-icon-v2">{SKILL_ICONS[skill.title] || skill.icon}</div>
    <h3 className="skill-card-title">{skill.title}</h3>
    <ul className="skill-item-list" role="list">
      {skill.items.map((item) => (
        <li key={item} className="skill-item-pill">{item}</li>
      ))}
    </ul>
  </motion.div>
));

const Skills = () => (
  <section id="skills" className="section section-alt">
    <div className="container">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        What I work with
      </motion.p>
      <motion.h2
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        Technical Skills
      </motion.h2>
      <motion.p
        className="section-text"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.14 }}
      >
        A focused set of technologies I use to build robust, modern applications.
      </motion.p>

      <div className="skills-grid-v2">
        {userData.skills.map((skill, i) => (
          <SkillCard key={skill.title} skill={skill} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
