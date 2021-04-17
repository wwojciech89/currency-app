import React from 'react';
import styles from "../CurrencyCell/CurrencyCell.module.scss";

const CurrencyCell = ({data}) => {

    return (
    <div className={styles.cell__wrapper}>
        <div className={styles.flag__wrapper}>
            <div className={styles.flag}></div>
        </div>
        <div className={styles.text__wrapper}>
            <p>{data.currency}</p>
            <p>{data.code}</p>
            <p>{data.mid}</p>
        </div>
        <div className={styles.button__wrapper}>
            <div className={styles.delete}>Delete</div>
        </div>
    </div>
    )
}




export default CurrencyCell;