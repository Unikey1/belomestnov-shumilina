import React from 'react';
import styles from "./Pages.module.css";
import Review from '../components/Form/Review';

function Reviews() {
    return (
        <section className={styles.reviews}>
            <Review />
        </section>
    );
}

export default Reviews; 
