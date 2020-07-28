import React from "react";
import {withRouter,Link} from "react-router-dom";
function PokeNav(props){

	const {match,location}=props;

	const matchinfo=location.pathname.split("/");
	const name=matchinfo[matchinfo.length-1];

	return(<nav className="navbar navbar-expand-lg navbar-light p-0 h-25">
            <ul className="navbar-nav m-auto flex-row">
              <li className={`nav-item active rounded-pill  px-2 mr-1 pokelink ${match.url===location.pathname? 'bg-warning':'bg-light'}`}>
                <Link className={`nav-link `} to={`${match.url}`}>
                  Info
                </Link>
              </li>
              <li className={`nav-item active rounded-pill  px-2 mr-1 pokelink ${name==="sprites"? 'bg-warning':'bg-light'}`}>
                <Link className="nav-link" to={`${match.url}/sprites`}>
                  Sprites
                </Link>
              </li>
              <li className={`nav-item active rounded-pill  px-2 mr-1 pokelink ${name==="stat"? 'bg-warning':'bg-light'}`}>
                <Link className="nav-link" to={`${match.url}/stat`}>
                  Stat
                </Link>
              </li>
              <li className={`nav-item active rounded-pill  px-2 mr-1 pokelink ${name==="moveset"? 'bg-warning':'bg-light'}`}>
                <Link className="nav-link" to={`${match.url}/moveset`}>
                  moveset
                </Link>
              </li>
            </ul>
          </nav>)
}

export default withRouter(PokeNav);