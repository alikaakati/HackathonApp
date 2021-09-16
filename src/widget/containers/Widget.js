import React from 'react';
import { hot } from 'react-hot-loader/root';
import Lane from '../Components/Lane/Lane';
import Score from '../Components/Score/Score';

const Widget = () => {
  const orders = [
    {
      recipe:{
        name: "Pizza",
    ingredients: [{
      
    }],
    image: "",
    requiresAllCooked: Boolean
      }
    }
  ];
  return(
    <div>
      <Score />
      <Lane title="Orders" stations={["Station 1" , "Station 2"]}/>
      <Lane title="Ingredients" plates={["Tomato" , ""]}/>
      <Lane title="Cooking Station" plates={["Station 1" , "Station 2"]}/>
      <Lane title="Prep Station" plates={["Station 1" , "Station 2"]}/>
      <Lane title="Serving Station" plates={["Station 1" , "Station 2"]}/>
      {/* <Orders title="Orders" orders={orders} /> */}
    </div>
  );
};

export default hot(Widget);
