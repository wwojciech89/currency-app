import React from 'react';
import "./App.css"
import ProfileWrapper from "./assets/components/ProfileWrapper/ProfileWrapper";
import FavoritesWrapper from "./assets/components/FavoritesWrapper/FavortiesWrapper";
import CurrencyWrapper from "./assets/components/CurrencyWrapper/CurrencyWrapper";
import {DataContextProvider} from "./assets/contexts/DataContext";
import {FavoritesContextProvider} from "./assets/contexts/FavoriteContext";

 function App() {
  return(
  <DataContextProvider>
    <FavoritesContextProvider>
    <ProfileWrapper />
    <div className="main__wrapper">
      <CurrencyWrapper/>
      <FavoritesWrapper />
    </div>
    </FavoritesContextProvider>
    </DataContextProvider>
  )
}

export default App;
