import React from 'react'
import { hot } from 'react-hot-loader/root';
import './style.css'

const PrepPlate = ({plate}) => {

    const onDragOver = (ev) =>{
        ev.preventDefault();
    }
    return (
        <div className="prepPlateContainer"  onDragOver={(e)=> onDragOver(e)}>
        </div>
    )
}

export default hot(PrepPlate)
