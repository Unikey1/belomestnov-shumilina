import React, { useState } from 'react';
import styles from "./Card.module.css";

function SignCard(props) {
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
        <div className={`animate__animated ${animate ? 'animate__pulse' : ''} ${styles.signCard}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>      
        <p className={styles.title}>{props.title}</p>
        <p className={styles.text}>{props.text}</p>
        <img className={styles.img} src={props.img}/>
        </div>
    );
}

export default SignCard;