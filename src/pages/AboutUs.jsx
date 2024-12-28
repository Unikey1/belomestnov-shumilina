import React, { useRef, useEffect } from 'react';
import styles from "./Pages.module.css"
import Cont from "../components/Btn/Cont";
import ReviewBtn from '../components/Btn/ReviewBtn';

function AboutUs() {
    const titleRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <section className={styles.sectionAbout}>
            <div className={styles.aboutus}>
                <p className={styles.title} ref={titleRef}>О НАС</p>
                <div className={styles.content}>
                    Добро пожаловать на наш сайт, посвященный кошачьим гороскопам! <br/>
                    Мы — преданные любители кошек и астрологии, объединивших свои знания и страсть, чтобы помочь вам лучше понять своих пушистых друзей.<br/>
                    Наши гороскопы основаны на уникальных астрологических характеристиках, которые влияют на поведение и настроение ваших кошек. Мы верим, что каждая кошка — это индивидуальность, и ее поведение может быть связано с ее астрологическим знаком.<br/>
                    На нашем сайте вы найдете гороскопы для кошек и узнаете, как звезды влияют на характер и привычки вашей кошки.
                </div>
                <div className={styles.btnContainer}>
                    <Cont />
                    <ReviewBtn />
                </div>
            </div>
      </section>
    );
}

export default AboutUs; 