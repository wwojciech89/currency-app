import React from 'react';
import "./App.css"
import ProfileWrapper from "./assets/components/ProfileWrapper/ProfileWrapper";
import FavoritesWrapper from "./assets/components/FavoritesWrapper/FavortiesWrapper";
import CurrencyWrapper from "./assets/components/CurrencyWrapper/CurrencyWrapper";
import {DataContextProvider} from "./assets/contexts/DataContext"

 function App() {
  return(
  <DataContextProvider>
    <ProfileWrapper />
    <div className="main__wrapper">
      <CurrencyWrapper/>
      <FavoritesWrapper />
    </div>
    </DataContextProvider>
  )
}

export default App;
