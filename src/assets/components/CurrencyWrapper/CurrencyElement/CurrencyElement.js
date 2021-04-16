import React from 'react';
import styles from "../CurrencyElement/CurrencyElement.module.scss";


const CurrencyElement = ({data}) => {
    console.log(data)
    return(
       <div className={styles.element}>
        <p>{data.currency}</p>
        <p>{data.code}</p>
        <p>{data.mid}</p>
    </div>)
}


export default CurrencyElement;