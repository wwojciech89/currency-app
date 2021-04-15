import React from 'react';
import styles from "../CurrencyCell/CurrencyCell.module.scss";
import axios from "axios"

const CurrencyCell = () => (
    <div className={styles.cell__wrapper}>
        <div className={styles.flag__wrapper}>
            <div className={styles.flag}></div>
        </div>
        <div className={styles.text__wrapper}>
            <p>EUR</p>
            <p>Euro</p>
            <p>4,56zł</p>
        </div>
        <div className={styles.button__wrapper}>
            <div className={styles.delete}>Delete</div>
        </div>
    </div>
)




export default CurrencyCell;