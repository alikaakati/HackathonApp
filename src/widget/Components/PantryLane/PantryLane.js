import React from 'react'
import { hot } from 'react-hot-loader/root';
import Pantry from '../Pantry/Pantry';
import './style.css'
const PantryLane = ({title , pantry}) => {
    console.log("pantry");
    console.log(pantry);
    return (
        <div className="pantry-lane-maincontainer">
        <div className="pantry-lane-title">
            <h1>
                {title}
            </h1>
        </div>
        <div className="pantry-lane-container">
            {pantry.map(p => {
                return(
                    <Pantry name={p.name} rawImage={p.rawImage}/>
                );
            })}
        </div>
    </div>
    )
}

export default hot(PantryLane)
