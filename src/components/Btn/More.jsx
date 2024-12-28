import React, { useRef } from "react";
import styles from "./Btn.module.css";
import { Link } from 'react-router-dom';

function More(){
    return (
        <>
            <Link to="/catsigns">
                <btn className={styles.more}>Открой тайны кошачьих знаков</btn>
            </Link>
        </>
    );
}

export default More;