import React,{useContext}from 'react';
import styles from "../CurrencyCell/CurrencyCell.module.scss";
import { FavoritesContext } from '../../../contexts/FavoriteContext';

const CurrencyCell = ({data}) => {

    const {removeFavorite} = useContext(FavoritesContext)

    const handleClick = () => {
        if (window.confirm("jesteś pewny?")) {
        removeFavorite(data.code)
        }
    }

    return (
    <div className={styles.cell__wrapper}>
            <p className={styles.name}>{data.currency}</p>
            <p className={styles.code}>{data.code}</p>
            <p className={styles.mid}>{data.mid}</p>
            <div className={styles.delete} onClick={handleClick}>Delete</div>
    </div>
    )
}




export default CurrencyCell;