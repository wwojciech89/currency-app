import React from 'react';
import styles from "../CurrencyElement/CurrencyElement.module.scss";


const CurrencyElement = () => (
    <div className={styles.element}>
        <p>EUR</p>
        <p>EURO</p>
        <p>4,56zł</p>
    </div>
)

export default CurrencyElement;