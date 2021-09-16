import React from 'react'
import { hot } from 'react-hot-loader/root';
import './style.css'
import PrepPlate from '../PrepPlate/PrepPlate';
const PrepLane = ({title , plates}) => {
    return (
        <div className="prepLaneMainContainer">
            <h1>{title}</h1>
            <div className="prepLaneContainer">
                {plates.map(p => {
                    return(
                        <PrepPlate plate={p}/>
                    );
                })}
            </div>
        </div>
    )
}

export default hot(PrepLane)
