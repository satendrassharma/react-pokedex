import React from "react"

export default function Moveset({poke}){
	return(

		 <div className="box px-2 movesetbox">
            <ul className="d-flex justify-content-center mt-2 moveset flex-wrap">
              {poke.moves.map(move => (
                <li
                  key={move}
                  className="rounded-pill bg-warning px-2 m-2"
                >
                  {move}
                </li>
              ))}
            </ul>
          </div>
		)
}