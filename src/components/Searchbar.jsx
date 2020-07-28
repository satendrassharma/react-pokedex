import React,{useState} from "react";
import SearchList from "./SearchList";

import {pokemons} from "../pokemon";

export default function Searchbar({setisSearched,setSearchedPokes}) {
  const [pokemontext,setpokemontext]=useState('');
  const [showlist,setshowlist]=useState(false);
  const [filterlist,setfilterlist]=useState(pokemons);

  const handleFocus=(e)=>{
    setshowlist(true);
  }
  const handleFocusOut=(e)=>{
    setshowlist(false);
  }

  const handleInputChange=(e)=>{

    const {value}=e.target;
    setpokemontext(e.target.value);

    const pokes=pokemons.filter(poke=>{
      return poke.name.toLowerCase().indexOf(value.toLowerCase())!==-1
    })

    setfilterlist(pokes);

     if(value===''){
      setisSearched(false);
     }
  }

  const handleSelectPoke=(poke)=>{

        setfilterlist([poke]);
        setpokemontext(poke.name)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    // setshowlist(false);
    setisSearched(true);
    setSearchedPokes(filterlist);

    // console.log(filterlist)
  }

  return (
    <div className="shadow-sm pb-4">
      <div className="container d-flex flex-column align-items-center mt-4 sticky-top ">
        <h1 className="font-weight-normal mb-2">Pokedex</h1>
        <p>by <a href="https://www.github.com/satendrassharma" target="_blank" rel="noopener noreferrer">satendra sharma</a></p>
        <form className="form-inline w-100 justify-content-center align-items-center" onSubmit={handleSubmit}>
          <div className="form-group mb-2 mr-1 w-50 w-md-25">
            <input
              type="text"
              className="form-control w-100 rounded-pill"
              id="searchbox"
              placeholder="Pokemon"
              onChange={handleInputChange}
              value={pokemontext}
              onFocus={handleFocus}
              onBlur={handleFocusOut}
              autoComplete="off"
              aria-autocomplete="list"
            />
            {showlist && <SearchList list={filterlist} handleSelectPoke={handleSelectPoke} /> }
            
           </div> 
          <button
            type="submit"
            className="btn btn-primary mb-2 rounded-pill bg-warning border-0 searchbutton"
            disabled={pokemontext===""?true:false}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
