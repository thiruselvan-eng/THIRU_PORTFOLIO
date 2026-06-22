import React from 'react';
import { userData } from '../data/user';

const Certificates = () => {
    const styles = {
        section: {
            padding: '100px 0',
            background: 'var(--bg-dark)',
        },
        title: {
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '60px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
        },
        card: {
            background: 'var(--bg-card)',
            borderRadius: '16px',
            padding: '25px',
            border: '1px solid var(--border-light)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
        },
        icon: {
            fontSize: '3rem',
            marginBottom: '20px',
            color: 'var(--accent-secondary)',
        },
        certTitle: {
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '10px',
            color: 'var(--text-primary)',
        },
        date: {
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            marginBottom: '20px',
        },
        btn: {
            display: 'inline-block',
            padding: '10px 20px',
            border: '1px solid var(--accent-primary)',
            color: 'var(--accent-primary)',
            borderRadius: '4px',
            fontSize: '0.9rem',
            textDecoration: 'none',
            cursor: 'pointer',
        }
    };

    return (
        <section id="certificates" style={styles.section}>
            <div className="container">
                <h2 style={styles.title} className="text-gradient">Certifications</h2>
                <div style={styles.grid}>
                    {userData.certificates.map((cert, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.icon}>🎓</div>
                            <h3 style={styles.certTitle}>{cert.title}</h3>
                            <p style={styles.date}>{cert.date}</p>
                            {/* Note: Files are expected to he hosted relative to root. If direct link fails, user needs to check path */}
                            <a href={cert.file} target="_blank" rel="noopener noreferrer" style={styles.btn}>View Certificate</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
