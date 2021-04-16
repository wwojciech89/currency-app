import React from 'react';
import styles from "../CurrencyElement/CurrencyElement.module.scss";


const CurrencyElement = (props) => {
    console.log(props)
    return(
       <div className={styles.element}>
        <p></p>
        <p>EURO</p>
        <p>4,56zł</p>
    </div>)
}


export default CurrencyElement;