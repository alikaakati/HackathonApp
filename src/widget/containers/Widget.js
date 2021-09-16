import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
<<<<<<< HEAD
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
=======
import { Level } from '../../data/levels';
import { IngredientStates } from '../../enums/ingredientStates';



function Widget() {
  useEffect(() => {
    let level = new Level(2, 2, [], {}, 0);
    level.setNextLevel(22)
    console.log(level)
    console.log(IngredientStates)
  }, []);  

  return (
    <h1>Widget - Hello World!</h1>
  )
}
>>>>>>> 1c1d2f76791f97d41879b9d740ffd98b5d82e85f

export default hot(Widget);
