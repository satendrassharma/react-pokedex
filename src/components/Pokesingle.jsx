import React from "react";
import pokemon from "./Pokemon.png";
import {Link} from "react-router-dom";

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png



export default function Pokesingle({ name, id }) {
  const handleImageError = e => {
    e.target.src = pokemon;
  };
  return (
    <div className="col-5 col-md-2 p-0 m-2 shadow pokecard">
      <Link to={`/pokemon/${id}`} >
        <div className="card">
          <p className="id">#{id}</p>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            className=" card-img-top img-fluid p-4"
            onError={handleImageError}
            alt="..."
          />

          <div className="card-body p-0">
            <h5 className="card-title text-center text-warning">{name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}
