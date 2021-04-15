import React from 'react';
import "./App.css"
import ProfileWrapper from "./assets/components/ProfileWrapper/ProfileWrapper";
import FavoritesWrapper from "./assets/components/FavoritesWrapper/FavortiesWrapper";
import CurrencyWrapper from "./assets/components/CurrencyWrapper/CurrencyWrapper";

import axios from "axios"

function App() {
  return(
  <>
    <ProfileWrapper />
    <div className="main__wrapper">
      <CurrencyWrapper/>
      <FavoritesWrapper />
    </div>
    </>
  )
}

export default App;
