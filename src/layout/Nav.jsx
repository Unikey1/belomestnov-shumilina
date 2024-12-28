import React, { useState } from 'react';
import { Link, useLocation} from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../images/logo.png";
import More from "../components/Btn/More"

function Nav() {
    const location = useLocation();

    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(true);

        setTimeout(() => {
            setAnimate(false);
        }, 1000); 
    };

    return (
        <>
            <div className={styles.backg}>
                <header className={styles.header}>
                    <img src={logo} onClick={handleClick} className={`animate__animated ${animate ? 'animate__flip' : ''} ${styles.logo}`}/>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Преимущества</Link>
                            </li>
                            <li>
                                <Link to="/catsigns" className={location.pathname === '/catsigns' ? styles.active : ''}>Кошачьи знаки</Link>
                            </li>
                            <li>
                                <Link to="/aboutus" className={location.pathname === '/aboutus' ? styles.active : ''}>О нас</Link>
                            </li>
                            <li>
                                <Link to="/reviews" className={location.pathname === '/reviews' ? styles.active : ''}>Отзывы</Link>
                            </li>
                            <li>
                                <Link to="/contacts" className={location.pathname === '/contacts' ? styles.active : ''}>Контакты</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className={styles.textContainer}>
                    <div className={styles.line}>Узнай, какой</div>
                    <div className={styles.imageLine}>
                        <span className={styles.imageText}>ГОРОСКОП</span>
                    </div>
                    <div className={styles.line}>подходит твоему коту!</div>
                </div>
                <div className={styles.moreBtnCont}>
                    <More />
                </div>
            </div>
        </>
    );
}

export default Nav;