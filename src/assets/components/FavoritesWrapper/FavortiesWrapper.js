import React from 'react';
import styles from "../FavoritesWrapper/FavoritesWrapper.module.scss";

const FavoritesWrapper = () => {
    return (
    <div className={styles.wrapper}>
        <h2>Favorites Currency</h2>
        <a href="/">Add favorites</a>
    </div>
    )
}


export default FavoritesWrapper;