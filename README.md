# Thiruselvan M — Portfolio

A personal portfolio website built with **React 19** and **Vite 7**, showcasing my skills, projects, certifications, and hackathon experience.

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 7 | Build tool & dev server |
| Framer Motion | latest | Animations & transitions |
| JavaScript (ESM) | — | Application logic |
| CSS | — | Styling (no frameworks) |
| ESLint | — | Code quality |

---

## 📁 Project Structure

```
THIRUSELVAN_PORTFOLIO/
├── public/
│   ├── THIRUSELVAN_RESUME.pdf       # Resume file
│   └── CERTIFICATES/                # Certificate PDF files
├── src/
│   ├── assets/
│   │   └── THIRU_PROFILE.jpg        # Profile photo
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Certificates.jsx
│   │   ├── Projects.jsx
│   │   ├── Hackathons.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── HeroActions.jsx
│   ├── data/
│   │   ├── user.js                  # All profile content (skills, projects, etc.)
│   │   └── certificates.js          # Certificate data
│   ├── styles/
│   │   └── global.css               # Global design system & component styles
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Vite root styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ✨ Features

- **Single-page portfolio** with smooth scroll navigation
- **Animated Hero section** with floating profile image and gradient border
- **Skills section** categorized by domain
- **Projects section** with highlights and tech tags
- **Certificates section** — searchable, filterable, with fullscreen PDF modal and "View All" expand
- **Hackathons & Events** section
- **Contact section** with social links
- **Fully responsive** across mobile, tablet, and desktop
- **Dark luxury design** inspired by Vercel, Linear, Apple, and GitHub
- **Framer Motion** animations throughout

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📝 Updating Content

All portfolio content is centralized in **`src/data/user.js`**:

| Field | Description |
|---|---|
| `name` | Your full name |
| `title` | Job title/role |
| `degree` | Degree name |
| `intro` | Short bio |
| `skills` | Skill categories with items |
| `projects` | Project list with descriptions, highlights, and tags |
| `events` | Hackathons and workshops |
| `social` | LinkedIn, GitHub, email, resume link |
| `certificates` | Certificate list (also see `src/data/certificates.js`) |

To update the resume, replace `public/THIRUSELVAN_RESUME.pdf`.  
To add certificates, place PDF files in `public/CERTIFICATES/` and update `src/data/certificates.js`.

---

## 👤 Author

**Thiruselvan M**  
B.E. Computer Science Engineering — Adhi College of Engineering and Technology (2023–2027)

- GitHub: [github.com/thiruselvan-eng](https://github.com/thiruselvan-eng)
- LinkedIn: [linkedin.com/in/thiruselvan-m-9a2253393](https://www.linkedin.com/in/thiruselvan-m-9a2253393)

---

## 📄 License

This project is personal and not open for redistribution. All content, designs, and assets belong to **Thiruselvan M**.
"# THIRU_PORTFOLIO" 
