import React from 'react';
import { userData } from '../data/user';

const Skills = () => {
    const styles = {
        section: {
            background: 'var(--bg-card)',
            padding: '100px 0',
        },
        title: {
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '60px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
        },
        skillItem: {
            marginBottom: '25px',
        },
        skillInfo: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
            fontSize: '1.1rem',
            fontWeight: '600',
        },
        progressBar: {
            height: '10px',
            background: 'var(--bg-dark)',
            borderRadius: '5px',
            overflow: 'hidden',
        },
        progressFill: (level) => ({
            height: '100%',
            width: `${level}%`,
            background: 'var(--text-gradient)',
            borderRadius: '5px',
            transition: 'width 1s ease-in-out',
        }),
    };

    return (
        <section id="skills" style={styles.section}>
            <div className="container">
                <h2 style={styles.title} className="text-gradient">Technical Skills</h2>

                <div style={styles.grid}>
                    <div>
                        <h3 style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>Core & Languages</h3>
                        {userData.skills.map((skill, index) => (
                            <div key={index} style={styles.skillItem}>
                                <div style={styles.skillInfo}>
                                    <span>{skill.name}</span>
                                    <span style={{ color: 'var(--accent-primary)' }}>{skill.level}%</span>
                                </div>
                                <div style={styles.progressBar}>
                                    <div style={styles.progressFill(skill.level)}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
