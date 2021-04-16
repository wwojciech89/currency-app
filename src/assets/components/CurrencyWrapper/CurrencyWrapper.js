import React from 'react';
import styles from "../CurrencyWrapper/CurrencyWrapper.module.scss";
import CurrencyElement from "./CurrencyElement/CurrencyElement";
import AppContext from "../../../context"

const CurrencyWrapper = () => {
return (
    <AppContext.Consumer>
        {(context) => (
            <div className={styles.wrapper}>
        <h3>Currencies</h3>
        <CurrencyElement context={context}/>
    </div>
        )}
    </AppContext.Consumer>
)
}


export default CurrencyWrapper;