export const obj = {
    score: 100,
	timer: 300,
	orders: [
        {
            recipe: {
                name: 'Pizza',
                ingredients: [
                    {
                        name: 'Dough',
                        rawImage: 'https://freepikpsd.com/media/2019/11/dough-png-1-Transparent-Images.png',
                        prepClicks: 5,
                        prepImage: 'https://atlas-content-cdn.pixelsquid.com/stock-images/raw-dough-in-bowl-4G3JxG3-600.jpg',
                        cookTime: 5,
                        cookImage: 'https://cdn.imgbin.com/25/12/13/imgbin-bakery-bread-food-tea-dough-pan-frances-redondo-Eud5MSxyuaeC5a41n5ZSicuer.jpg',
                        state: 'RAW'
                    },
                    {
                        name: 'Cheese',
                        rawImage: 'https://png.pngtree.com/png-vector/20190219/ourlarge/pngtree-vector-cheese-icon-png-image_563215.jpg',
                        prepClicks: 3,
                        prepImage: 'https://us.123rf.com/450wm/tanyasid/tanyasid2005/tanyasid200500038/146697574-grated-cheese-isolated-on-white-background-slices-cheese-.jpg?ver=6',
                        cookTime: 5,
                        cookImage: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-cheese-melting-vector-png-image_3556875.jpg',
                        state: 'RAW'
                    },
                    {
                        name: 'Tomato',
                        rawImage: 'https://cdn-icons-png.flaticon.com/512/199/199620.png',
                        prepClicks: 6,
                        prepImage: 'https://cdn3.iconfinder.com/data/icons/vegetables-18/100/vegetable_colour-40-512.png',
                        cookTime: 5,
                        cookImage: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/tomato-sauce-15-984828.png',
                        state: 'RAW'
                    },
                    {
                        name: 'Pepperoni',
                        rawImage: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/pepperoni-1-891182.png',
                        prepClicks: 10,
                        prepImage: 'https://cdn-icons-png.flaticon.com/512/1699/1699279.png',
                        cookTime: 0,
                        cookImage: null,
                        state: 'RAW'
                    }
                ],
                image: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/pizza-2059232-1740563.png',
                requiresAllCooked: true
            },
            time: 20,
            price: 25,
            state: 'WAITING',
        }
    ],
	kitchenConfig: {
        pantry: [
            {
                name: 'Dough',
                rawImage: 'https://freepikpsd.com/media/2019/11/dough-png-1-Transparent-Images.png',
                prepClicks: 5,
                prepImage: 'https://atlas-content-cdn.pixelsquid.com/stock-images/raw-dough-in-bowl-4G3JxG3-600.jpg',
                cookTime: 5,
                cookImage: 'https://cdn.imgbin.com/25/12/13/imgbin-bakery-bread-food-tea-dough-pan-frances-redondo-Eud5MSxyuaeC5a41n5ZSicuer.jpg',
                state: 'RAW'
            },
            {
                name: 'Cheese',
                rawImage: 'https://png.pngtree.com/png-vector/20190219/ourlarge/pngtree-vector-cheese-icon-png-image_563215.jpg',
                prepClicks: 3,
                prepImage: 'https://us.123rf.com/450wm/tanyasid/tanyasid2005/tanyasid200500038/146697574-grated-cheese-isolated-on-white-background-slices-cheese-.jpg?ver=6',
                cookTime: 5,
                cookImage: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-cheese-melting-vector-png-image_3556875.jpg',
                state: 'RAW'
            },
            {
                name: 'Tomato',
                rawImage: 'https://cdn-icons-png.flaticon.com/512/199/199620.png',
                prepClicks: 6,
                prepImage: 'https://cdn3.iconfinder.com/data/icons/vegetables-18/100/vegetable_colour-40-512.png',
                cookTime: 5,
                cookImage: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/tomato-sauce-15-984828.png',
                state: 'RAW'
            },
            {
                name: 'Pepperoni',
                rawImage: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/pepperoni-1-891182.png',
                prepClicks: 10,
                prepImage: 'https://cdn-icons-png.flaticon.com/512/1699/1699279.png',
                cookTime: 0,
                cookImage: null,
                state: 'RAW'
            },
            {
                name: 'Meat',
                rawImage: 'https://toppng.com/uploads/preview/meat-icon-png-11552935652heawth3nxj.png',
                prepClicks: 8,
                prepImage: 'https://cdn.imgbin.com/17/19/6/imgbin-meat-grinder-ground-meat-recipe-sausage-meat-7sh4EKB4Cs4b4tzWn2KmAC4iq.jpg',
                cookTime: 10,
                cookImage: 'https://w7.pngwing.com/pngs/722/325/png-transparent-barbecue-grill-steak-computer-icons-meat-grilling-steak-food-beef-trademark.png',
                state: 'RAW'
            }
        ],
        prepStation: [
            { occupied: false, ingredients: [ ] },
            { occupied: false, ingredients: [ ] }
        ],
        cookingStation: [
            {
                ingredients: [],
                recipe: {},
                recipeMatched: false,
                totalCookingTime: 0,
                cookingTimer: null
            },
            {
                ingredients: [],
                recipe: {},
                recipeMatched: false,
                totalCookingTime: 0,
                cookingTimer: null
            }
        ],
        servingStation: [
            {
                ingredients: [],
                recipe: {},
                recipeMatched: false
            },
            {
                ingredients: [],
                recipe: {},
                recipeMatched: false
            }
        ]
    },
	nextLevelAt: 200
}