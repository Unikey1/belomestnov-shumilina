import styles from './Form.module.css';
import React, { useState, useRef, useEffect  } from 'react';

function Review(){
    const [counter,setCounter] = useState(1);

    function increment() {
        if (counter < 10) {
            setCounter(prev => prev + 1);
        }
    };

    function decrement() {
        if (counter > 1) {
            setCounter(prev => prev - 1);
        }
    };

    const titleRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState(''); 
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !surname || !email || !feedback){
            alert('Все поля обязательны для заполнения');
            return;
        }

        const namePattern =  /^[А-ЯЁ][а-яё]+$/;
        if (!namePattern.test(name)) {
            alert('Введите имя используя только русские буквы и начиная его с заглавной буквы!');
            return;
        }

        const surnamePattern = /^[А-ЯЁ][а-яё]+$/;
        if (!surnamePattern.test(surname)) {
            alert('Введите фамилию используя только русские буквы и начиная её с заглавной буквы!');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Введите адрес электронной почты в формате examle@mail.ru!');
            return;
        }

        if (feedback.length > 100) {
           alert('Отзыв должен содержать не более 100 символов!');
            return;
        }

        alert(`Спасибо, что оставили отзыв и оценили наш сайт! Ваше мнение очень важно для нас, ${surname} ${name}. На адерс вашей электронной почты, ${email}, придет письмо c благодарностью!`);

        setName('');
        setSurname('');
        setEmail('');
        setFeedback('');
        setCounter('1');
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.form}>
            <p ref={titleRef}>ОСТАВЬТЕ ОТЗЫВ О НАШЕМ САЙТЕ</p>
            <form id="horoscope-form" onSubmit={handleSubmit}>
                <input type="text" id="nickname" name="nickname" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" id="surname" name="surname"  placeholder="Ваша фамилия" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                <input type="text" id="email" name="email" placeholder="Ваш E-mail"value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input id="feedback"  name="feedback" placeholder="Ваш отзыв" value={feedback} onChange={(e) => setFeedback(e.target.value)}/>
                <div className={styles.PCounter}>
                    <button onClick={(e) => { e.preventDefault(); decrement(); }}className={styles.btn1}>-</button>
                    <button disabled className={styles.countB}>{counter}</button>
                    <button onClick={(e) => { e.preventDefault(); increment(); }} className={styles.btn3}>+</button>
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default Review;