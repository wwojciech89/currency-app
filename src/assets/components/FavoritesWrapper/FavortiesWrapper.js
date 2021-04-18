import React, {useContext, useState} from 'react';
import styles from "../FavoritesWrapper/FavoritesWrapper.module.scss";
import CurrencyCell from "./CurrencyCell/CurrencyCell";
import {FavoritesContext} from "../../contexts/FavoriteContext";

const FavoritesWrapper = () => {

    const {favorites} = useContext(FavoritesContext)
    // console.log('favorites', favorites)

   const favoritesCurrencies = favorites?.map(el => {

        return <CurrencyCell data={el} key={el.code}/>
        })


    return (
            (<div className={styles.wrapper}>
        <h3>Favorites Currency</h3>
        {favoritesCurrencies}
        </div>
        )
    )}


export default FavoritesWrapper;