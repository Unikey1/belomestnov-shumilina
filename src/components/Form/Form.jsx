import styles from './Form.module.css';
import React, { useState } from 'react';

function Form(){
    const [nickname, setNickname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!nickname || !birthdate || !email) {
            alert('Все поля обязательны для заполнения');
            return;
        }

        const namePattern = /^[А-Яа-яЁё\s]+$/;
        if (!namePattern.test(nickname)) {
            alert('Введите кличку вашего питомца используя только русские буквы');
            return;
        }

        const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;
        if (!datePattern.test(birthdate)) {
            alert('Введите дату в формате ДД.ММ.ГГГГ');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Введите адрес электронной почты в формате examle@mail.ru');
            return;
        }

        alert(`Спасибо, что воспользовались нашим сайтом! На вашу почту ${email} придет письмо с гороскопом для вашего питомца ${nickname},относительно его даты рождения ${birthdate}, на ближайщую неделю. Ожидайте :з`);

        setNickname('');
        setBirthdate('');
        setEmail('');
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.form}>
            <p>ФОРМА ДЛЯ РАСЧЕТА ГОРОСКОПА</p>
            <form id="horoscope-form" onSubmit={handleSubmit}>
                <input type="text" id="nickname" name="nickname" placeholder="Кличка" value={nickname} onChange={(e) => setNickname(e.target.value)}/>
                <input type="text" id="birthdate" name="birthdate" placeholder="ДД.ММ.ГГГГ" value={birthdate} onChange={(e) => setBirthdate(e.target.value)}/>
                <input type="text" id="email" name="email" placeholder="Ваш E-mail"value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default Form;