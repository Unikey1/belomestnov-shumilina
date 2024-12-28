import React from 'react';
import styles from "./Card.module.css";

function Card(props) {
    return (
        <div className={styles.card}>
            <p className={styles.titleCard}>{props.title}</p>
            <p className={styles.textCard}>{props.text}</p>
            <button className={styles.learnMore}>Узнать больше</button>
        </div>
    );
}

export default Card;