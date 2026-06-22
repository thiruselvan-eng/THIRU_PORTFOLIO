import React from 'react';
import { userData } from '../data/user';

const Projects = () => {
    const styles = {
        section: {
            padding: '100px 0',
            background: 'var(--bg-card)',
        },
        title: {
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '60px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
        },
        card: {
            background: 'var(--bg-dark)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--border-light)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            position: 'relative',
        },
        cardContent: {
            padding: '30px',
        },
        projectTitle: {
            fontSize: '1.5rem',
            marginBottom: '15px',
            color: 'var(--text-primary)',
        },
        description: {
            color: 'var(--text-secondary)',
            marginBottom: '20px',
            lineHeight: '1.6',
        },
        tags: {
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '20px',
        },
        tag: {
            fontSize: '0.8rem',
            padding: '5px 12px',
            background: 'rgba(0, 240, 255, 0.1)',
            color: 'var(--accent-primary)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 240, 255, 0.2)',
        },
        link: {
            display: 'inline-block',
            color: 'var(--accent-secondary)',
            fontWeight: '600',
            textDecoration: 'none',
        },
        // Hover effect class equivalent (handled via CSS usually, but inline for consistency in this example style object usage)
    };

    return (
        <section id="projects" style={styles.section}>
            <div className="container">
                <h2 style={styles.title} className="text-gradient">Featured Projects</h2>
                <div style={styles.grid}>
                    {userData.projects.map((project) => (
                        <div key={project.id} style={styles.card} className="project-card">
                            <div style={styles.cardContent}>
                                <h3 style={styles.projectTitle}>{project.title}</h3>
                                <p style={styles.description}>{project.description}</p>
                                <div style={styles.tags}>
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} style={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} style={styles.link}>View Project &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
