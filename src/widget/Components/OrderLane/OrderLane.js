import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Order from '../Order/Order';
import './style.css';
const OrderLane = ({title , orders}) => {

    return(
        <div className="order-lane-maincontainer">
            <div className="lane-title">
                <h1>
                    {title}
                </h1>
            </div>
            <div className="order-lane-container">
                {orders && orders.map(o => {
                    return(
                        <Order price={o.price} time={o.time} name={o.recipe.name} ingredients={o.recipe.ingredients} image={o.recipe.image} requiresAllCooked={o.recipe.requiresAllCooked}/>
                    );
                })}
            </div>
        </div>
    );
}

export default hot(OrderLane);
