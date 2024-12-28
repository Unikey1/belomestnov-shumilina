import React from "react";
import styles from "./Btn.module.css";
import { Link } from 'react-router-dom';

function Cont(){
    return (
        <>
            <Link to="/contacts">
                <btn className={styles.conts}>Наши контакты</btn>
            </Link>
        </>
    );
}

export default Cont;