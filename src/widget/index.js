import './widget.less';
import React from 'react';
import { render } from 'react-dom';
import Widget from './containers/Widget';
import { recipes } from '../data/recipes';
import {cookingStation} from '../data/cookingStationV3';
import { obj } from "./../data/kitchenExample";

// let newInstance = new cookingStation([]);

// setTimeout(() => {
//     newInstance.add(obj.kitchenConfig.pantry[0]);
//     setTimeout(() => {
//         newInstance.add(obj.kitchenConfig.pantry[1]);
//     }, 3000);
//     setTimeout(() => {
//         newInstance.add(obj.kitchenConfig.pantry[2]);
//     }, 4000);
//     setTimeout(() => {
//         newInstance.add(obj.kitchenConfig.pantry[3]);
//     }, 5000);
// }, 5000);

const target = document.getElementById('mount');
render(<Widget />, target);
