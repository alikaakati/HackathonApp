import React, {  useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { ReactSortable } from "react-sortablejs";
import {obj} from './../../../data/kitchenExample'

const Pantry = (props) => {
    console.log(obj.kitchenConfig.pantry);
    const [pantryElements, setPantryElements] = useState(obj.kitchenConfig.pantry);


    

  return (
      <div     style={{flexDirection:"row",backgroundColor:"green"}}>

        <ReactSortable 
        onAdd={() => console.log("Added item to this list PANTRY")}
        list={pantryElements} 
        setList={setPantryElements}       
        group={{pull:"clone",name:"sharedItems"}}
        animation={200}
        multiDrag={false}
        >
        {pantryElements.map((item) => (
            <div key={item.name+""+new Date().toLocaleDateString()} item={item} style={{float:"left",width:"20%",height:"100%"}}>
                <img src={item.state == "RAW" ? item.rawImage : item.prepImage} style={{width:"50%",height:"50%"}} />
            </div>
        ))}
        </ReactSortable>
      </div>
  );
};

export default hot(Pantry)