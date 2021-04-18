import React, {useContext, useState} from 'react';
import styles from "../FavoritesWrapper/FavoritesWrapper.module.scss";
import CurrencyCell from "./CurrencyCell/CurrencyCell"
import {DataContext} from "../../contexts/DataContext"

const FavoritesWrapper = () => {

    const [localData, setLocalData] = useState();


    const data = useContext(DataContext);
    let local = "";

   const favoritesCurrencies = data.map(el => {

        local = localStorage.getItem(`code${el.code}`)

        if (el.code === local) {
        return <CurrencyCell data={el} key={el.code}/>
        }}
        )


    return (
            (<div className={styles.wrapper}>
        <h3>Favorites Currency</h3>
        {favoritesCurrencies}
        </div>
        )
    )}


export default FavoritesWrapper;