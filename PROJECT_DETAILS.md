# Thiruselvan Portfolio Project Details

## Overview
A personal portfolio website built with React and Vite. The site presents Thiruselvan M's skills, projects, certificates, hackathon experience, and contact information.

## Technology Stack
- React 19
- Vite 7
- JavaScript (ESM)
- CSS
- ESLint

## Project Structure
- `index.html` — app shell entry point
- `package.json` — project metadata, dependencies, and scripts
- `vite.config.js` — Vite build configuration
- `README.md` — template documentation from the initial Vite setup
- `public/` — public assets served directly by Vite
  - `THIRUSELVAN_RESUME.pdf` — active resume file used by the site
  - `CERTIFICATES/` — certificate PDF files referenced in the portfolio
- `src/` — application source code
  - `App.jsx` — main app component and section composition
  - `main.jsx` — React app entry point
  - `index.css` — global CSS for Vite root styles
  - `styles/global.css` — application styles imported by `App.jsx`
  - `data/user.js` — user profile data, skills, projects, social links, certificates, and resume link
  - `components/` — reusable React components for each portfolio section
    - `Navbar.jsx`
    - `Hero.jsx`
    - `About.jsx`
    - `Skills.jsx`
    - `Certificates.jsx`
    - `Projects.jsx`
    - `Hackathons.jsx`
    - `Contact.jsx`
    - `Footer.jsx`
    - `HeroActions.jsx`

## User Data Source
The portfolio content is driven by `src/data/user.js`.
Key fields include:
- `name`
- `title`
- `degree`
- `intro`
- `skills`
- `projects`
- `events`
- `social`
- `certificates`

The resume is referenced using:
- `social.resume: '/THIRUSELVAN_RESUME.pdf'`

## Notable Features
- Single-page portfolio layout
- Dynamic content from a centralized data file
- Certificate and resume files served from `public/`
- Sections for skills, projects, certificates, hackathons, and contact

## NPM Scripts
- `npm run dev` — start local Vite dev server
- `npm run build` — build production bundle
- `npm run lint` — run ESLint on the repository
- `npm run preview` — preview the production build locally

## Running the Project
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production output:
   ```bash
   npm run preview
   ```

## Recent Update
- Updated resume replacement: `public/THIRUSELVAN_RESUME.pdf` was replaced with the newly added root resume file.

## Notes
- `README.md` still contains default Vite template content and is not specific to this portfolio app.
- If the resume or certificate references change, update `src/data/user.js` and corresponding files in `public/`.
