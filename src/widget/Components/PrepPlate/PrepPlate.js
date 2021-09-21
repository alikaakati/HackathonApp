import React, {  useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { ReactSortable } from "react-sortablejs";
import {obj} from './../../../data/kitchenExample'
import { prepStation } from "../../../data/prepStationV3";
import { Ingredient } from "../../../data/ingredientsV3";

const PrepPlate = (props) => {
    let newPrepStation;
    newPrepStation = new prepStation();
    const [prepElements, setPrepElements] = useState([]);

    useEffect(() => {
        let lastElement;
        if(prepElements.length > 0){
          lastElement = prepElements[prepElements.length - 1]
          newPrepStation.add(new Ingredient(lastElement.name , lastElement.rawImage , lastElement.prepClicks , lastElement.prepImage , lastElement.cookTime , lastElement.cookImage));
          console.log(newPrepStation);
        } 
    }, [prepElements])
    

  return (
    <ReactSortable 
    list={prepElements} 
    setList={setPrepElements}       
    group={{poll:"clone",name:"sharedItems"}}
    animation={200}
    style={{flexDirection:"row",width:"100%",backgroundColor:"green"}}
    >
      {prepElements.map((item) => (
        <div onClick={() => {
            newPrepStation.prep();
        }} key={item.name+""+new Date().toLocaleDateString()} style={{float:"left",width:"20%",height:"100%",marginRight:10,backgroundColor:"red"}}>
            <img src={item.state == "RAW" ? item.rawImage : item.prepImage} style={{width:"50%",height:"50%"}} />
        </div>
      ))}
    </ReactSortable>
  );
};

export default hot(PrepPlate)