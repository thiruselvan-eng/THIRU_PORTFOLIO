import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { userData } from '../data/user';

const EDUCATION = [
  {
    degree: 'B.E. Computer Science Engineering',
    institution: 'Adhi College of Engineering and Technology',
    period: '2023 – 2027',
    badge: 'Current • Final Year',
    icon: '🎓',
  },
  {
    degree: 'Higher Secondary (HSC)',
    institution: 'Government Higher Secondary School, Kiliyur',
    period: '2021 – 2023',
    badge: '64%',
    icon: '📚',
  },
  {
    degree: 'Secondary School (SSLC)',
    institution: 'Government Higher Secondary School, Kiliyur',
    period: '2020 – 2021',
    badge: '100%',
    icon: '🏫',
  },
];

const STATS = [
  { number: '10+', label: 'Certificates' },
  { number: '3+', label: 'Projects Built' },
  { number: '3+', label: 'Hackathons' },
  { number: '2027', label: 'Grad Year' },
];

const About = memo(() => (
  <section id="about" className="section">
    <div className="container">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Who I am
      </motion.p>
      <motion.h2
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        About Me
      </motion.h2>

      <div className="about-grid-v2">
        {/* Bio */}
        <motion.div
          className="about-card-v2"
          initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="section-text" style={{ marginBottom: '16px' }}>
            I am a <strong className="highlight">Computer Science Engineering student</strong> passionate about building
            modern, reliable, and user-friendly digital products.
          </p>
          <p className="section-text">
            My focus lies in <strong className="highlight">Full-Stack Development</strong>, where I enjoy turning ideas into
            polished web experiences with clean architecture and thoughtful design. I thrive on solving complex
            problems and continuously improving my craft.
          </p>

          {/* Stats row */}
          <div className="about-stats-row">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="about-stat"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.07 }}
              >
                <span className="about-stat-number">{s.number}</span>
                <span className="about-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="education-card-v2"
          initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="education-header">
            <div className="education-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3.5 2 8.5 2 12 0v-5" />
              </svg>
            </div>
            <div>
              <p className="eyebrow">Education</p>
              <h3 className="education-section-title">Academic Background</h3>
            </div>
          </div>

          <div className="education-timeline">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                className="edu-item"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className="edu-item-top">
                  <span className="edu-icon" aria-hidden="true">{edu.icon}</span>
                  <div className="edu-item-body">
                    <div className="edu-item-heading">
                      <p className="edu-degree">{edu.degree}</p>
                      <span className="edu-badge">{edu.badge}</span>
                    </div>
                    <p className="edu-institution">{edu.institution}</p>
                    <p className="edu-period">{edu.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
));

export default About;
