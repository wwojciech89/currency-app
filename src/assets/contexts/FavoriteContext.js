import React, {createContext, useEffect, useState, } from "react";
import axios from 'axios';

const url = "http://api.nbp.pl/api/exchangerates/tables/a/"

async function getData(url) {
const res = await axios.get(url);

const favorites = res.data[0].rates;

return data
}



export const DataContext = createContext();

export const DataContextProvider =({children}) => {
    const [favorites,setFavorites] = useState([]);

    useEffect(async () => {
        setFavorites(await getData(url));
    }, []);
    return <DataContext.Provider value={favorites}>{children}</DataContext.Provider>;
}

