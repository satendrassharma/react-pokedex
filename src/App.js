import React ,{useState}from "react";
import Searchbar from "./components/Searchbar";
import Pokelist from "./components/Pokelist";

import { Route, Switch } from "react-router-dom";
import Pokemon from "./components/Pokemon";

// import {pokemons} from "./pokemon";

function App() {
   
   const [searchedPokes,setSearchedPokes]=useState([]);
   const [isSearched,setisSearched]=useState(false);

  return (
    <div className="App">
      <Switch>
        <Route path="/pokemon/:id">
          <Pokemon />
        </Route>
        <Route path="/">
          <Searchbar setSearchedPokes={setSearchedPokes} setisSearched={setisSearched}/>
          <Pokelist searchedPokes={searchedPokes} isSearched={isSearched}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
