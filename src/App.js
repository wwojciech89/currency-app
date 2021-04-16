import React from 'react';
import "./App.css"
import ProfileWrapper from "./assets/components/ProfileWrapper/ProfileWrapper";
import FavoritesWrapper from "./assets/components/FavoritesWrapper/FavortiesWrapper";
import CurrencyWrapper from "./assets/components/CurrencyWrapper/CurrencyWrapper";
import AppContext from './context';
import axios from "axios";

const url = "http://api.nbp.pl/api/exchangerates/tables/a/"


async function getData() {
const res = await axios.get(url);

const data = await res.data[0].rates;

console.log(data)

}
getData()

function App() {
  return(
  <AppContext.Provider value={getData}>
    <ProfileWrapper />
    <div className="main__wrapper">
      <CurrencyWrapper/>
      <FavoritesWrapper />
    </div>
    </AppContext.Provider>
  )
}

export default App;
