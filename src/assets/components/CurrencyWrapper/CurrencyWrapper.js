import React, {useContext} from 'react';
import styles from "../CurrencyWrapper/CurrencyWrapper.module.scss";
import CurrencyElement from "./CurrencyElement/CurrencyElement";
import {DataContext} from "../../contexts/DataContext"

const CurrencyWrapper = () => {

    const data = useContext(DataContext);


    const mappedCurrencies = data.map(el => (

         <CurrencyElement data={el} key={el.code}/>
    ));

return (
         (
            <div className={styles.wrapper}>
            <h3>Currencies</h3>
            {mappedCurrencies}
    </div>
        )
)}


export default CurrencyWrapper;