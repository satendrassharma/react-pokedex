import React from "react"

export default function Sprites({poke,setpokeimg,pokeimg}){

	return(
			 <div className="box px-2 sprite_wrapper">
                <div className="sprite text-center d-flex align-items-center justify-content-center">
                  <img src={pokeimg} alt="poke" />
                </div>

                <div className="sprites">
                  {poke.sprites.map(sprite => (
                    <img
                      className=""
                      src={sprite}
                      alt="poke"
                      key={sprite}
                      onClick={e => {
                        setpokeimg(sprite);
                      }}
                    />
                  ))}
                </div>
              </div>

		)
}