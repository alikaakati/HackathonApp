import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
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
    <div>
      <Score />
      <Lane title="Orders" stations={["Station 1" , "Station 2"]}/>
      <Lane title="Ingredients" plates={["Tomato" , ""]}/>
      <Lane title="Cooking Station" plates={["Station 1" , "Station 2"]}/>
      <Lane title="Prep Station" plates={["Station 1" , "Station 2"]}/>
      <Lane title="Serving Station" plates={["Station 1" , "Station 2"]}/>
      {/* <Orders title="Orders" orders={orders} /> */}
    </div>
    )
}

export default hot(Widget);
