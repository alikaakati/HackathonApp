import React from 'react'
import { hot } from 'react-hot-loader/root';
import './style.css'

const Pantry = ({rawImage , name}) => {

    const onDragStart = (ev , name) =>{
        ev.dataTransfer.setData("name" , name)
    }
    return (
        <div className="sPantry" draggable={true} onDragStart = {(e) => onDragStart(e, name)}>
            <img src={rawImage} style={{width:"100%",height:"100%"}} />
        </div>
    )
}

export default hot(Pantry)
