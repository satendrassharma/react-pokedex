import React from "react";

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const Row = ({ handleSelectPoke }) => ({ style, index, data }) => {
  // console.log({otherprops});

  return (
    <div
      className="pokelist-item"
      style={style}
      onClick={() => {
        console.log("called");
        handleSelectPoke(data[index]);
      }}
    >
      {data[index].name}
    </div>
  );
};

const SearchList = ({ list, handleSelectPoke }) => (
  <div className="pokelist shadow">
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          itemCount={list.length}
          itemSize={25}
          itemData={list}
          width={width}
          overscanCount={3}
        >
          {Row({ handleSelectPoke })}
        </List>
      )}
    </AutoSizer>
  </div>
);

// function SearchList({list,handleSelectPoke}){

// 	return(
// 		<div className="pokelist shadow">
// 	      <ul>
// 	      	{list.map(l=>(<li key={l.id} onClick={()=>handleSelectPoke(l)}>{l.name}</li>))}

// 	      </ul>
//    		 </div>

// 		)
// }

export default React.memo(SearchList);
