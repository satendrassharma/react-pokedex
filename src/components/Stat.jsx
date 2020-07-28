import React from "react";
import StatChart from "./StatChart";

export default function Stat({poke}){
	return(
			<div className="box px-2 ">
              <StatChart data={poke.stats} />
              </div>

		)
}