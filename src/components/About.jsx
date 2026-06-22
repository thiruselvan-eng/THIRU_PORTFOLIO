import React from 'react';
import { userData } from '../data/user';

const About = () => {
    const styles = {
        section: {
            padding: '100px 0',
        },
        container: {
            maxWidth: '1200px', // Increased width
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '60px',
            flexWrap: 'wrap', // Responsive
        },
        contentLeft: {
            flex: 1,
            minWidth: '300px',
        },
        contentRight: {
            flex: 1,
            minWidth: '300px',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
        },
        title: {
            fontSize: '2.5rem',
            marginBottom: '40px',
        },
        text: {
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '30px',
            lineHeight: '1.8',
        },
        highlight: {
            color: 'var(--text-primary)',
            fontWeight: '600',
        },
        statCard: {
            background: 'var(--bg-card)',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            textAlign: 'center',
            flex: 1,
            minWidth: '150px',
            transition: 'transform 0.3s ease',
        },
        statNumber: {
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '10px',
        }
    };

    return (
        <section id="about" style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.contentLeft}>
                    <h2 style={styles.title} className="text-gradient">About Me</h2>
                    <p style={styles.text}>
                        I'm not just writing code; I'm <span style={styles.highlight}>Vibe Coding</span>.
                        My journey started with a deep dive into <span style={styles.highlight}>Java and C</span>, mastering the fundamentals before conquering Object-Oriented Programming.
                    </p>
                    <p style={styles.text}>
                        With strong expertise in arrays and advanced algorithms, I've tackled <span style={styles.highlight}>50+ LeetCode</span> and <span style={styles.highlight}>200+ CodeChef</span> problems.
                        On the web, I craft responsive interfaces using <span style={styles.highlight}>React and Modern CSS</span>, bringing backend logic to life with seamless frontend experiences.
                    </p>
                </div>

                <div style={styles.contentRight}>
                    <div style={styles.statCard}>
                        <div style={{ ...styles.statNumber, color: 'var(--accent-secondary)' }}>{userData.stats.leetcode}</div>
                        <div style={{ fontSize: '1.1rem' }}>LeetCode</div>
                    </div>
                    <div style={styles.statCard}>
                        <div style={{ ...styles.statNumber, color: 'var(--accent-primary)' }}>{userData.stats.codechef}</div>
                        <div style={{ fontSize: '1.1rem' }}>CodeChef</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
