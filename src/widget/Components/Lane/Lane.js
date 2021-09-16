import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Station from '../Station/Station';
import './style.css';
const Lane = ({title , stations , plates}) => {
    return(
        <div className="lane-maincontainer">
            <div className="lane-title">
                <h1>
                    {title}
                </h1>
            </div>
            <div className="lane-container">
                {stations && stations.map(s => {
                    return(
                        <Station isOrder={true} food="Pizza" ingredients={["Tomato" , "Buns" , "Peperonni"]}/>
                    );
                })}
                {plates && plates.map(p => {
                    // <Plate ingredient />
                })
                }
            </div>
        </div>
    );
}

export default hot(Lane);
