import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { userData } from '../data/user';

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.58 } }),
};

const ProjectCard = memo(({ project, index }) => (
  <motion.article
    className="project-card-v2"
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-40px' }}
    whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.22 } }}
    aria-label={`Project: ${project.title}`}
  >
    {/* Top accent bar */}
    <div className="project-card-accent" aria-hidden="true" />

    {/* Header */}
    <div className="project-header">
      <div className="project-folder-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
          <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
        </svg>
      </div>
      <div className="project-header-links">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-icon-link"
          aria-label={`GitHub - ${project.title}`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.25-3.25-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 016 0c2.28-1.56 3.29-1.24 3.29-1.24.66 1.65.25 2.87.12 3.17.78.85 1.25 1.93 1.25 3.25 0 4.65-2.8 5.67-5.47 5.97.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 0z" />
          </svg>
        </a>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-icon-link"
            aria-label={`Live demo - ${project.title}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </div>

    {/* Content */}
    <h3 className="project-title-v2">{project.title}</h3>
    <p className="project-desc-v2">{project.description}</p>

    {project.highlights && (
      <ul className="project-highlights-v2" aria-label="Key highlights">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="project-highlight-item">
            <span className="project-highlight-dot" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>
    )}

    <div className="tag-list-v2" aria-label="Technologies used">
      {project.tags.map((tag, idx) => (
        <span key={idx} className="tag-v2">{tag}</span>
      ))}
    </div>
  </motion.article>
));

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        What I've built
      </motion.p>
      <motion.h2
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="section-text"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.14 }}
      >
        A selection of real-world projects showcasing my engineering and problem-solving skills.
      </motion.p>

      <div className="projects-grid-v2">
        {userData.projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
