import React, { useState,useEffect } from "react";
import pokemon from "./Pokemon.png";
import pokeball from "../pokeball.gif";
import Sprites from "./Sprites";
import Info from "./Info";
import Moveset from "./Moveset";
import PokeNav from "./PokeNav";
import Stat from "./Stat";

import {
  useParams,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

export default function Pokemon() {
  const { id } = useParams();
  const match = useRouteMatch();
  const [poke, setpoke] = useState(null);
  const [loading, setloading] = useState(true);
  const [pokeimg, setpokeimg] = useState(pokemon);


  useEffect(() => {
    setloading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(({ height, weight, moves, types, stats, sprites, name }) => {
        setpoke({
          height,
          weight,
          moves: moves.map(move => move.move.name),
          types: types.map(type => type.type.name),
          stats:stats.map(({base_stat,effort,stat})=>({base_stat,effort,name:stat.name})),
          sprites: Object.values(sprites).filter(sprite => sprite != null),
          name
        });
        setloading(false);
      })
      .catch(err => console.dir(err));
  }, [id]);

  return (
    <>
      {loading && <div className="vh-100 d-flex justify-content-center align-items-center"><img src={pokeball} alt="pokeball" /></div>}
      {!loading && (
        <div className="container-md min-vh-100 d-flex align-items-center justify-content-center pokecontainer">
          <div className="card mb-3 shadow pokecardwrapper" >
            <div className="row no-gutters h-100">
              <div className="col-md-4 d-flex flex-column justify-content-center bg-light">
              <span id="back"><Link to="/">&#8592;</Link></span>

                <img
                  src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                  className="card-img img-fluid m-auto w-75 mobile-img"
                  alt="..."
                />
                <h5 className="card-title text-center py-5 text-warning mobile-text">
                  {poke.name}
                </h5>
              </div>

              <div className="col-md-8 d-flex h-100">
                <div className="card-body d-flex flex flex-column h-100 w-100 pokebody">
                 
                  <PokeNav />
                  <Switch>
                  
                    <Route  path={`${match.path}/sprites`}>
                     <Sprites poke={poke} setpokeimg={setpokeimg} pokeimg={pokeimg}/>
                    </Route>

                    <Route  path={`${match.path}/moveset`}>
                     <Moveset poke={poke} />
                    </Route>

                    <Route path={`${match.path}/stat`}>
                      <Stat poke={poke} />
                    </Route>

                    <Route  path={`${match.path}`}>
                      <Info poke={poke} id={id}/>
                    </Route>

                  </Switch>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
