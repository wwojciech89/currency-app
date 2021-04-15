import React from 'react';
import styles from "../CurrencyWrapper/CurrencyWrapper.module.scss";
import CurrencyElement from "./CurrencyElement/CurrencyElement"

const CurrencyWrapper = () => {
return (
    <div className={styles.wrapper}>
        <h3>Currencies</h3>
        <CurrencyElement/>
    </div>
)
}


export default CurrencyWrapper;