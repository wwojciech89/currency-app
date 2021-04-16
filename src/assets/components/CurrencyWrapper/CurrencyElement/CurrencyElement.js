import React from 'react';
import styles from "../CurrencyElement/CurrencyElement.module.scss";
import heartGreen from "../../../images/heart-green.png"
import heartPink from "../../../images/heart-pink.png"

const CurrencyElement = ({data}) => {
    console.log(data)
    return(
       <div className={styles.element}>
        <p className={styles.name}>{data.currency}</p>
        <p className={styles.code}>{data.code}</p>
        <p className={styles.mid}>{data.mid}</p>
        <img className={styles.picture} src={heartGreen} alt="heart"/>
    </div>)
}


export default CurrencyElement;