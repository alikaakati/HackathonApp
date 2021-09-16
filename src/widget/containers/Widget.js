import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Level } from '../../data/levels';
import { IngredientStates } from '../../enums/ingredientStates';
import OrderLane from '../Components/OrderLane/OrderLane';
import PantryLane from '../Components/PantryLane/PantryLane';
import PrepLane from '../Components/PrepLane/PrepLane';
import Score from '../Components/Score/Score'
import {obj} from './../../data/kitchenExample';

function Widget() {
  useEffect(() => {
    let level = new Level(2, 2, [], {}, 0);
    level.setNextLevel(22)
    console.log(level)
    console.log(IngredientStates)
  }, []);  
  

  console.log(obj.orders);

  return (
    <div>
      <Score />
      <OrderLane title="Orders" orders={obj.orders}/>
      <PantryLane title="Pantry" pantry={obj.kitchenConfig.pantry}/>
      <PrepLane title="Prep" plates={["Plate 1","Plate 2"]}/>

    </div>
    )
}

export default hot(Widget);
