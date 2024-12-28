import React, { useRef, useEffect } from 'react';
import styles from "./Pages.module.css"
import ContactCard from '../components/Card/ContactCard';

function Contacts() {
    const titleRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <section className={styles.sectionContacts}>
            <div className={styles.contacts}>
                <p className={styles.title} ref={titleRef}>НАШИ КОНТАКТЫ</p>
                <div className={styles.cardContainer}>
                    <ContactCard prof="Специалист по котикам №1" name="Шумилина Елизавета Игоревна" email="spec1mail@mail.ru" phone="+7(900)123-45-67"/>
                    <ContactCard prof="Специалист по котикам №2" name="Беломестнов Павел Николаевич" email="spec2mail@mail.ru" phone="+7(900)987-65-43"/>
                </div>
            </div>
        </section>
    );
}

export default Contacts; 
