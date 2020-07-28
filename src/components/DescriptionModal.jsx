import React from "react";


export default function DescriptionModal({Description,onClose}){
	
	return(
		<div className="backdropstyle" >
		
        <div className="modalstyle" >
        	<div className="closebutton">
            <button onClick={onClose}>
              x
            </button>
          </div>
          <p><strong>Description </strong></p>
          <p>{Description}</p>
        </div>
      </div>
		)

}