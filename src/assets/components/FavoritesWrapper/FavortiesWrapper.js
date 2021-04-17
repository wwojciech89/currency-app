import React, {useContext} from 'react';
import styles from "../FavoritesWrapper/FavoritesWrapper.module.scss";
import CurrencyCell from "./CurrencyCell/CurrencyCell"
import {DataContext} from "../../../context"

const FavoritesWrapper = () => {

    const data = useContext(DataContext);


   const favoritesCurrencies = data.map(el =>
        <CurrencyCell data={el} key={el.code}/>
        )


    return (
            (<div className={styles.wrapper}>
        <h3>Favorites Currency</h3>
        {favoritesCurrencies}
        </div>
        )
    )}


export default FavoritesWrapper;