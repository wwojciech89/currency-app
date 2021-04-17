import React, {useContext} from 'react';
import styles from "../FavoritesWrapper/FavoritesWrapper.module.scss";
import CurrencyCell from "./CurrencyCell/CurrencyCell"
import {DataContext} from "../../../context"

const FavoritesWrapper = () => {

    const data = useContext(DataContext);


   const favoritesCurrencies = data.map(el =>
        <CurrencyCell data={el} />
        )


    return (
            (<div className={styles.wrapper}>
        <h2>Favorites Currency</h2>
        {favoritesCurrencies}
        </div>
        )
    )}


export default FavoritesWrapper;