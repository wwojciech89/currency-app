import React, {useContext} from 'react';
import styles from "../CurrencyWrapper/CurrencyWrapper.module.scss";
import CurrencyElement from "./CurrencyElement/CurrencyElement";
import {DataContext} from "../../../context"

const CurrencyWrapper = () => {

    const data = useContext(DataContext);
    console.log(data)
return (
         (
            <div className={styles.wrapper}>
        <h3>Currencies</h3>
        <CurrencyElement/>
    </div>
        )
)}


export default CurrencyWrapper;