import React, {  useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { ReactSortable } from "react-sortablejs";

const Order = (props) => {
  const [state, setState] = useState([
    { id: 3, name: "Order shrek" },
    { id: 4, name: "Order fiona" },
  ]);

  useEffect(() => {
    console.log(state);
    }, [state])


  return (
    <ReactSortable 
    onAdd={() => console.log("Added item to this list Order")}
    list={state} 
    setList={setState}       
    group="groupName"
    animation={200}
    >
      {state.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </ReactSortable>
  );
};

export default hot(Order)