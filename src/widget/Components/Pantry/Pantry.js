import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root';
import './style.css'
import { cookingStation } from '../../../data/cookingStationV3.js';
const Pantry = ({rawImage , name, event, clicks}) => {
    const [pantryClicks, setPantryClicks] = useState(clicks)
    const onDragStart = (ev , name) =>{
        ev.dataTransfer.setData("name" , name)
    }
    return (
        <div onClick={() => setPantryClicks(p => p+1)} className="sPantry">
            <h1>{pantryClicks}</h1>
            <img src={rawImage} style={{width:"100%",height:"100%"}} />
        </div>
    )
}

export default hot(Pantry)
