import React, {useContext} from 'react';
import styles from "../CurrencyWrapper/CurrencyWrapper.module.scss";
import CurrencyElement from "./CurrencyElement/CurrencyElement";
import {DataContext} from "../../../context"

const CurrencyWrapper = () => {

    const data = useContext(DataContext);

    const mappedCurrencies = data.map(el =>
        <CurrencyElement data={el}/>
        )




return (
         (
            <div className={styles.wrapper}>
        <h3>Currencies</h3>
            {mappedCurrencies}
    </div>
        )
)}


export default CurrencyWrapper;