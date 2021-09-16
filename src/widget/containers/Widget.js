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
    <h1>Widget - Hello World!</h1>
  )
}

export default hot(Widget);
