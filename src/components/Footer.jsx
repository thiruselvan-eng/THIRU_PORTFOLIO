import React from 'react';

const Footer = () => {
    const styles = {
        footer: {
            padding: '30px 0',
            textAlign: 'center',
            borderTop: '1px solid var(--border-light)',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
        },
        heart: {
            color: 'var(--accent-primary)',
        }
    };

    return (
        <footer style={styles.footer}>
            <div className="container">
                <p>
                    &copy; {new Date().getFullYear()} Thiruselvan. Built with <span style={styles.heart}>Vibe</span> & Code.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
