/**
 * Certificate Registry
 * ─────────────────────────────────────────────────────────────
 * Every certificate in public/CERTIFICATES/ is listed here with
 * rich metadata. To add a future certificate:
 *   1. Drop the PDF/image into public/CERTIFICATES/
 *   2. Add a new object below — that's it.
 * ─────────────────────────────────────────────────────────────
 */

export const CERTIFICATES = [
  {
    id: 'cert-ai',
    title: 'Artificial Intelligence',
    organization: 'Online Certification Platform',
    issueDate: 'Apr 2025',
    category: 'AI',
    skills: ['Machine Learning', 'Neural Networks', 'Deep Learning', 'AI Fundamentals'],
    file: '/CERTIFICATES/ARTIFICIAL INTELIGENTS.pdf',
    type: 'pdf',
    color: '#00f0ff',
  },
  {
    id: 'cert-cyber',
    title: 'Cyber Security — Under Attack Social Media',
    organization: 'Online Certification Platform',
    issueDate: 'Apr 2025',
    category: 'Other',
    skills: ['Cyber Security', 'Social Engineering', 'Threat Analysis', 'Network Security'],
    file: '/CERTIFICATES/CYBER SECURITY  -UNDER ATTAK  SOCIAL MEDIA.pdf',
    type: 'pdf',
    color: '#ff6b6b',
  },

  {
    id: 'cert-excel',
    title: 'Excel Bootcamp',
    organization: 'Online Bootcamp',
    issueDate: 'Apr 2025',
    category: 'Other',
    skills: ['Microsoft Excel', 'Spreadsheets', 'Data Analysis', 'Formulas & Functions'],
    file: '/CERTIFICATES/EXCEL BOOTCAM.pdf',
    type: 'pdf',
    color: '#f7971e',
  },
  {
    id: 'cert-html-css',
    title: 'HTML & CSS Bootcamp',
    organization: 'Online Bootcamp',
    issueDate: 'Apr 2025',
    category: 'Web Development',
    skills: ['HTML5', 'CSS3', 'Responsive Design', 'Web Development', 'UI Fundamentals'],
    file: '/CERTIFICATES/HTML & CSS BOOT CXAMP.pdf',
    type: 'pdf',
    color: '#f953c6',
  },
  {
    id: 'cert-iv',
    title: 'Industrial Visit Certificate',
    organization: 'Adhi College of Engineering & Technology',
    issueDate: 'Apr 2025',
    category: 'Workshop',
    skills: ['Industry Exposure', 'Professional Development', 'Technical Visit'],
    file: '/CERTIFICATES/IVCertificate of - THIRUSELVAN M.pdf',
    type: 'pdf',
    color: '#4facfe',
  },
  {
    id: 'cert-oci-ai',
    title: 'Oracle Cloud Infrastructure — AI Foundations',
    organization: 'Oracle',
    issueDate: 'Apr 2025',
    category: 'Cloud',
    skills: ['Oracle Cloud', 'AI Foundations', 'Cloud Computing', 'Machine Learning', 'OCI'],
    file: '/CERTIFICATES/OCI - AI [THIRU].pdf',
    type: 'pdf',
    color: '#00c6ff',
  },
  {
    id: 'cert-oci',
    title: 'Oracle Cloud Infrastructure Foundations',
    organization: 'Oracle',
    issueDate: 'Apr 2025',
    category: 'Cloud',
    skills: ['Oracle Cloud', 'Cloud Infrastructure', 'Cloud Architecture', 'OCI', 'DevOps'],
    file: '/CERTIFICATES/OCI [THIRU].pdf',
    type: 'pdf',
    color: '#0072ff',
  },
  {
    id: 'cert-python',
    title: 'Python Bootcamp',
    organization: 'Online Bootcamp',
    issueDate: 'Apr 2025',
    category: 'Python',
    skills: ['Python', 'OOP', 'Data Structures', 'Automation', 'Scripting'],
    file: '/CERTIFICATES/PYTHON BOOTCAMP.pdf',
    type: 'pdf',
    color: '#56ab2f',
  },
];

export const CERTIFICATE_CATEGORIES = [
  'All',
  'Python',
  'Web Development',
  'Cloud',
  'AI',
  'Workshop',
  'Hackathon',
  'Other',
];
