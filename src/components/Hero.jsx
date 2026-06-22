import React from 'react';
import { userData } from '../data/user';

const Hero = () => {
    const styles = {
        section: {
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
        },
        content: {
            textAlign: 'center',
            zIndex: 2,
        },
        greeting: {
            fontSize: '1.2rem',
            color: 'var(--accent-primary)',
            marginBottom: '20px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
        },
        title: {
            fontSize: '5rem',
            fontWeight: '800',
            marginBottom: '10px',
            lineHeight: '1.1',
        },
        subtitle: {
            fontSize: '2rem',
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            fontWeight: '300',
        },
        glow: {
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(0,240,255,0.1) 0%, rgba(0,0,0,0) 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            pointerEvents: 'none',
        }
    };

    return (
        <section id="hero" style={styles.section}>
            <div style={styles.glow}></div>
            <div className="container" style={styles.content}>
                <p style={styles.greeting}>Hello, I'm</p>
                <h1 style={styles.title} className="text-gradient">{userData.name}</h1>
                <h2 style={styles.subtitle}>{userData.title}</h2>
                <div>
                    <a href="#projects" className="btn">View My Work</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
