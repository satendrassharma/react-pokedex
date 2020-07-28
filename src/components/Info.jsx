import React,{useEffect,useState} from "react";
import DescriptionModal from "./DescriptionModal";

export default function Info({poke,id}){
  const [Description,setDescription]=useState("");
  const [isOpen,setIsOpen]=useState(false);

  const openModal=()=>{
    setIsOpen(true);
  }
  const closeModal=()=>{
    setIsOpen(false);
  }

  useEffect(()=>{

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    .then(res=>res.json())
    .then(data => {
      console.log(data)
      const description = data.flavor_text_entries.filter((desc) => (desc.language.name === "en")).map(desc => desc.flavor_text);
      const unique_desc = Array.from(new Set(description));
      setDescription(unique_desc.join(""));
    })
    .catch(err=>console.log(err));
  },[id])

	return(
			<div className="box px-2 py-2">
          <p>
            <strong>Height</strong>:{poke.height}
          </p>
          <p>
            <strong>Weight</strong>:{poke.weight}
          </p>
          <p>
            <strong>Type</strong>:
            {poke.types.map(type => (
              <span className="badge badge-warning px-2 mx-2" key={type}>{type} </span>
            ))}
          </p>
          {Description!=="" && <>
             <p>
            <strong>Description</strong>:
          </p>
          <p>
            {Description.substr(0,300)}
            {Description.length>300 && <strong className="text-primary read-more" onClick={openModal}>  Read more...</strong>}
          </p>
          </>}
         
          {isOpen && <DescriptionModal Description={Description} onClose={closeModal} />}
        </div>
		)
}