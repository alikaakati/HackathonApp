import React from 'react'
import { hot } from 'react-hot-loader/root';
import { Ingredient } from '../../../data/ingredientsV3';
import { obj } from '../../../data/kitchenExample';
import { prepStation } from '../../../data/prepStationV3';
import Pantry from '../Pantry/Pantry';
import './style.css'
const PantryLane = ({title , pantry}) => {
    let newPrepStation;
    let pantryElements = obj.kitchenConfig.pantry[0];
    newPrepStation = new prepStation();
    newPrepStation.add(pantryElements);
    console.log(newPrepStation);
    const _handleClickButton = () =>{
        newPrepStation.prep()
        console.log(newPrepStation.ingredient.prepClicked);
    }
    return (
        <div className="pantry-lane-maincontainer">
        <div className="pantry-lane-title">
            <h1>
                {title}
            </h1>
        </div>
        <div className="pantry-lane-container">
            <Pantry rawImage={newPrepStation.ingredient.state == "PREPARED" ? newPrepStation.ingredient.prepImage : newPrepStation.ingredient.rawImage} name={pantryElements.name} event={_handleClickButton} clicks = {newPrepStation.ingredient.prepClicked}  />
        </div>
    </div>
    )
}

export default hot(PantryLane)
