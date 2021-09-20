import {Recipe} from "./recipe";
let pizzaIngredients = [
    {
        name: 'Dough',
        rawImage: 'https://freepikpsd.com/media/2019/11/dough-png-1-Transparent-Images.png',
        prepClicks: 0,
        prepImage: 'https://atlas-content-cdn.pixelsquid.com/stock-images/raw-dough-in-bowl-4G3JxG3-600.jpg',
        cookTime: 5,
        cookImage: 'https://cdn.imgbin.com/25/12/13/imgbin-bakery-bread-food-tea-dough-pan-frances-redondo-Eud5MSxyuaeC5a41n5ZSicuer.jpg',
        state: 'COOKED'
    },
    {
        name: 'Cheese',
        rawImage: 'https://png.pngtree.com/png-vector/20190219/ourlarge/pngtree-vector-cheese-icon-png-image_563215.jpg',
        prepClicks: 0,
        prepImage: 'https://us.123rf.com/450wm/tanyasid/tanyasid2005/tanyasid200500038/146697574-grated-cheese-isolated-on-white-background-slices-cheese-.jpg?ver=6',
        cookTime: 5,
        cookImage: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-cheese-melting-vector-png-image_3556875.jpg',
        state: 'COOKED'
    },
    {
        name: 'Tomato',
        rawImage: 'https://cdn-icons-png.flaticon.com/512/199/199620.png',
        prepClicks: 0,
        prepImage: 'https://cdn3.iconfinder.com/data/icons/vegetables-18/100/vegetable_colour-40-512.png',
        cookTime: 5,
        cookImage: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/tomato-sauce-15-984828.png',
        state: 'COOKED'
    },
    {
        name: 'Pepperoni',
        rawImage: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/pepperoni-1-891182.png',
        prepClicks: 0,
        prepImage: 'https://cdn-icons-png.flaticon.com/512/1699/1699279.png',
        cookTime: 4,
        cookImage: null,
        state: 'COOKED'
    }
]
let Pizza = new Recipe('Pizza',pizzaIngredients,'https://cdn.iconscout.com/icon/premium/png-256-thumb/pizza-2059232-1740563.png',true);
export const recipes = [Pizza];
