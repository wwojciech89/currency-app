import React from 'react';
import styles from "../FavoritesWrapper/FavoritesWrapper.module.scss";
import CurrencyCell from "./CurrencyCell/CurrencyCell"

const FavoritesWrapper = () => {
    return (
    <div className={styles.wrapper}>
        <h2>Favorites Currency</h2>
        <CurrencyCell />
    </div>
    )
}


export default FavoritesWrapper;