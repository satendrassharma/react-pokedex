import React, { useState } from "react";
import Pokesingle from "./Pokesingle";
import InfiniteScroll from "react-infinite-scroller";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

export default function Pokelist({searchedPokes,isSearched}) {
  const [pokelist, setpokelist] = useState([]);

  const [nexturl, setnexturl] = useState(URL);
  const [loading, setloading] = useState(false);

  const loadMore = () => {
    if (!loading) {
      setloading(true);
      fetch(nexturl)
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          const pokes = data.results.map(poke => {
            let arr = poke.url.split("/");
            return {
              ...poke,
              id: arr[arr.length - 2]
            };
          });

          setpokelist(prevpokes => [...prevpokes, ...pokes]);
          setnexturl(data.next);
          setloading(false);
        })
        .catch(err => {
          console.log(err);
          setloading(false);
        });
    }
  };

  if(isSearched){
    return(<div className="container my-5 ">
        <div className="row justify-content-center">
          {searchedPokes &&
            searchedPokes.map(poke => <Pokesingle key={poke.id} {...poke} />)}
        </div>
      </div>)
  }


  return (

    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={nexturl == null ? false : true}
      loader={
        <div className="loader text-center" key={0}>
          Loading ...
        </div>
      }
    >
      <div className="container my-5 ">
        <div className="row justify-content-center">
          {pokelist &&
            pokelist.map(poke => <Pokesingle key={poke.id} {...poke} />)}
        </div>
      </div>
    </InfiniteScroll>
  );
}
