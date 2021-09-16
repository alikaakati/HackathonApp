import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader/root';
import './style.css';
const Order = ({price, time, name , ingredients , image , requiresAllCooked}) => {

    useEffect(() => {
        let timer = setInterval(() => {
          time--;
          document.getElementById("order0").innerHTML = time;
          if(time == 0){ 
              document.getElementById("order-parent-0").style.display = "none";
              // updateScore(-1*price)
              clearInterval(timer);
            
            }
        }, 1000);

    }, [])
    //rawImage
    console.log("From order");
    console.log(ingredients);
    return (
        <div id="order-parent-0">
        <div id="station-container" className="station-container">
            <div className="station-food-order">
                <img src={image} />
            </div>
            <div className="station-ingredients-order">
                {ingredients.map(v => {
                    return(
                        <div id="order0" className="station-ingredient-order">                
                            <img src={v.rawImage}/>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}

export default hot(Order)
