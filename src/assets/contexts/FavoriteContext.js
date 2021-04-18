import React, {createContext, useContext, useEffect, useState, } from "react";
import { DataContext } from "./DataContext";


export const FavoritesContext = createContext();

export const FavoritesContextProvider =({children}) => {
    const [favorites,setFavorites] = useState([]);

    const data = useContext(DataContext);

    useEffect(() => {

        let codes = localStorage.getItem("favoriteCodes");
        codes = codes ? JSON.parse(codes) : [];

        if (codes.length) {
            setFavorites(data.filter(el => {
                return codes.includes(el.code)
            }))
        }
    }, [data]);

    const addFavorite = (code) => {
        const newFavorites = [...favorites]
        const newFavorite = data.find(el => el.code === code)
        newFavorites.push(newFavorite)
        setFavorites(newFavorites)
    }


    const removeFavorite = (code) => {
        const removeFavorite = [...favorites]
        const newRemoveFavorite = removeFavorite.filter(el => el != code)
        setFavorites(newRemoveFavorite)
    }


    useEffect(() => {
        if (!favorites.length) return;
        const codes = favorites.map(el => {
            return el.code})

            
        localStorage.setItem("favoriteCodes", JSON.stringify(codes))
    },[favorites])


    return <FavoritesContext.Provider value={{favorites,addFavorite, removeFavorite}}>{children}</FavoritesContext.Provider>;
}

