import React from 'react'
import { hot } from 'react-hot-loader/root';
import './style.css';
const Station = ({ingredients ,food, timer = 0 , isOrder=false}) => {
    if(isOrder){
        return (
            <div className="station-container">
                <div className="station-food-order">
                    {food}
                </div>
                <div className="station-ingredients-order">
                    {ingredients.map(v => {
                        return(
                            <div className="station-ingredient-order">                
                                <h1 style={{fontSize:8}}>{v}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
            <div className="station-container">
                <div className="station-food">
                    {food}
                </div>
                <div className="station-ingredients">
                    {ingredients.map(v => {
                        return(
                            <div className="station-ingredient">                
                                <h1 style={{fontSize:8}}>{v}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
        );
    }
}

export default hot(Station);
