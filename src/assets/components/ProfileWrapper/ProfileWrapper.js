import React from 'react';
import styles from "../ProfileWrapper/ProfileWrapper.module.scss";


const ProfileWrapper = () => (
<div className={styles.wrapper}>
    <div className={styles.data__container}>
        <h1>Profile</h1>
        <p className={styles.name}>John Doe</p>
        <p className={styles.city}>Gdańsk</p>
    </div>
    <div className={styles.picture__container}>
        <div className={styles.background__picture}>
            <div className={styles.picture}></div>
        </div>
    </div>
</div>
);



export default ProfileWrapper;