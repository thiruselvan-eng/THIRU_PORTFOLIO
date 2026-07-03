import React from 'react';
import { userData } from '../data/user';

const HeroActions = () => {
  return (
    <div className="hero-actions" role="navigation" aria-label="Hero action links">
      <a
        href={userData.social.resume}
        className="hero-btn hero-btn-primary"
        target="_blank"
        rel="noreferrer"
        aria-label="Open resume"
      >
        <span className="hero-btn-icon" aria-hidden="true">⬇</span>
        <span>Resume</span>
      </a>

      <a
        href={userData.social.github}
        className="hero-btn hero-btn-icon-link"
        target="_blank"
        rel="noreferrer"
        aria-label="Open GitHub profile"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.25-3.25-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 016 0c2.28-1.56 3.29-1.24 3.29-1.24.66 1.65.25 2.87.12 3.17.78.85 1.25 1.93 1.25 3.25 0 4.65-2.8 5.67-5.47 5.97.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 0z" fill="currentColor" />
        </svg>
      </a>

      <a
        href={userData.social.linkedin}
        className="hero-btn hero-btn-icon-link"
        target="_blank"
        rel="noreferrer"
        aria-label="Open LinkedIn profile"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01 2.5 2.5 0 01.01-5.01zm.02 7.5H2V21h3V11zm7.5 0h-2.98V21h3v-5.5c0-2.78 3.5-3 3.5 0V21h3V14.5c0-5.6-6-5.4-6.02 0V11z" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
};

export default HeroActions;
