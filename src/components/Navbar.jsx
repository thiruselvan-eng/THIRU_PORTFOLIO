import React, { useState, useEffect } from 'react';
import { userData } from '../data/user';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const styles = {
        nav: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: scrolled ? '15px 0' : '25px 0',
            background: scrolled ? 'rgba(5, 5, 5, 0.9)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            borderBottom: scrolled ? '1px solid var(--border-light)' : 'none',
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
        },
        highlight: {
            color: 'var(--accent-primary)',
        },
        links: {
            display: 'flex',
            gap: '30px',
        },
        link: {
            fontSize: '0.9rem',
            fontWeight: '500',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
        },
    };

    return (
        <nav style={styles.nav}>
            <div className="container" style={styles.container}>
                <div style={styles.logo}>
                    Thiru<span style={styles.highlight}>.code</span>
                </div>
                <ul style={styles.links}>
                    <li><a href="#hero" style={styles.link}>Home</a></li>
                    <li><a href="#about" style={styles.link}>About</a></li>
                    <li><a href="#skills" style={styles.link}>Skills</a></li>
                    <li><a href="#projects" style={styles.link}>Projects</a></li>
                    <li><a href="#contact" style={styles.link}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
