import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { userData } from '../data/user';

const BADGE_COLORS = {
  hackathon: { bg: 'rgba(0,240,255,0.1)', color: '#00f0ff', label: 'Hackathon' },
  workshop: { bg: 'rgba(112,0,255,0.12)', color: '#b080ff', label: 'Workshop' },
};

const AWARD_ICONS = {
  'Excellence Prize Winner': '🏆',
  Participant: '🎯',
};

const EventCard = memo(({ event, index }) => {
  const style = BADGE_COLORS[event.category] || BADGE_COLORS.workshop;
  return (
    <motion.div
      className="event-card-v2"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="event-card-top">
        <span
          className="event-category-badge"
          style={{ background: style.bg, color: style.color }}
        >
          {style.label}
        </span>
        {event.award && (
          <span className="event-award-badge">
            {AWARD_ICONS[event.award] || '🏅'} {event.award}
          </span>
        )}
      </div>
      <h3 className="event-title">{event.title}</h3>
      <p className="event-detail">{event.detail}</p>
      {event.meta && <p className="event-meta-v2">{event.meta}</p>}
    </motion.div>
  );
});

const Hackathons = () => {
  const hackathons = userData.events.filter((e) => e.category === 'hackathon');
  const workshops = userData.events.filter((e) => e.category === 'workshop');

  return (
    <section id="hackathons" className="section section-alt">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Beyond the classroom
        </motion.p>
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Hackathons &amp; Workshops
        </motion.h2>

        <div className="events-section">
          {/* Hackathons */}
          <div>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              ⚡ Hackathons
            </motion.p>
            <div className="event-grid-v2">
              {hackathons.map((e, i) => <EventCard key={i} event={e} index={i} />)}
            </div>
          </div>

          {/* Workshops */}
          <div>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              🔬 Workshops &amp; Training
            </motion.p>
            <div className="event-grid-v2">
              {workshops.map((e, i) => <EventCard key={i} event={e} index={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
