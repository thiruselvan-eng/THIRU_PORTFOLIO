import React from 'react';
import { userData } from '../data/user';

const Contact = () => {
    const styles = {
        section: {
            padding: '100px 0',
            textAlign: 'center',
        },
        title: {
            fontSize: '2.5rem',
            marginBottom: '30px',
        },
        text: {
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '50px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '50px',
        },
    };

    return (
        <section id="contact" style={styles.section}>
            <div className="container">
                <h2 style={styles.title} className="text-gradient">Get In Touch</h2>
                <p style={styles.text}>
                    Whether you want to discuss a new project, ask about my "Vibe Code" philosophy, or just say hi, my inbox is always open.
                </p>
                <div style={styles.buttonContainer}>
                    <a href={userData.social.email} className="btn">Say Hello</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
