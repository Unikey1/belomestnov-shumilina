import React from "react";
import styles from "./Btn.module.css";
import { Link } from 'react-router-dom';

function ReviewBtn(){
    return (
        <>
            <Link to="/reviews">
                <btn className={styles.reviewBtn}>Оставить отзыв</btn>
            </Link>
        </>
    );
}

export default ReviewBtn;