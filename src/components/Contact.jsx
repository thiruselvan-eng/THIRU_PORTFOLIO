import React from 'react';
import { motion } from 'framer-motion';
import { userData } from '../data/user';

const CONTACTS = [
  {
    label: 'Email',
    value: 'thiruselvan248@gmail.com',
    href: 'mailto:thiruselvan248@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 6379769744',
    href: 'tel:+916379769744',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.5 12.6 19.8 19.8 0 01.43 4.07 2 2 0 012.42 2H5.4a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.54 9.74a16 16 0 006.29 6.29l1.1-1.1a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'thiruselvan-m',
    href: userData.social.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01 2.5 2.5 0 01.01-5.01zm.02 7.5H2V21h3V11zm7.5 0h-2.98V21h3v-5.5c0-2.78 3.5-3 3.5 0V21h3V14.5c0-5.6-6-5.4-6.02 0V11z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'thiruselvan-eng',
    href: userData.social.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.25-3.25-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 016 0c2.28-1.56 3.29-1.24 3.29-1.24.66 1.65.25 2.87.12 3.17.78.85 1.25 1.93 1.25 3.25 0 4.65-2.8 5.67-5.47 5.97.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 0z" />
      </svg>
    ),
  },
];

const Contact = () => (
  <section id="contact" className="section contact-section">
    <div className="container">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Let's connect
      </motion.p>
      <motion.h2
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="contact-card-v2"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
      >
        <p className="section-text contact-text" style={{ marginBottom: '32px' }}>
          I'm open to <strong className="highlight">internships</strong>, collaborations, and opportunities to
          build meaningful software products. Let's build something great together.
        </p>

        <div className="contact-list-v2">
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              className="contact-item-v2"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -3, scale: 1.01 }}
              aria-label={`${c.label}: ${c.value}`}
            >
              <span className="contact-icon-v2">{c.icon}</span>
              <span className="contact-info">
                <strong className="contact-label">{c.label}</strong>
                <span className="contact-value">{c.value}</span>
              </span>
              <span className="contact-arrow" aria-hidden="true">↗</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href={userData.social.resume} className="hero-btn hero-btn-primary" target="_blank" rel="noreferrer">
            ↓ &nbsp; Download Resume
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
