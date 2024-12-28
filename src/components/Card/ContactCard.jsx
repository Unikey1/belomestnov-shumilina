import React, { useState } from 'react';
import styles from "./Card.module.css";

function ContactCard({ prof, name, email, phone }) {
    const [animate, setAnimate] = useState(false);
    const [animationTimeout, setAnimationTimeout] = useState(null);

    const handleMouseEnter = () => {
        setAnimate(true);
        if (animationTimeout) {
            clearTimeout(animationTimeout);
            setAnimationTimeout(null);
        }
    };
    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setAnimate(false);
        }, 100);

        setAnimationTimeout(timeout);
    };

    return (
        <div className={`animate__animated ${animate ? 'animate__headShake' : ''} ${styles.cardContact}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>      
            {prof}<br/>
            {name}<br/>
            {email}<br/>
            {phone}
        </div>
    );
}

export default ContactCard;