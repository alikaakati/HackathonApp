function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

let gameApp = angular.module("gameApp", ["ngRoute", "dndLists"])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/simple', {
                templateUrl: 'kitchen/kitchen-container.html',
                controller: 'KitchenController'
            })
            .otherwise({redirectTo: '/simple'});
    });


gameApp.service('$appConfig', function () {
    this.get = function () {
        return window.kitchenConfig;
    }
});

gameApp.directive('includeReplace', function () {
    return {
        require: 'ngInclude',
        restrict: 'A', /* optional */
        link: function (scope, el, attrs) {
            el.replaceWith(el.children());
        }
    };
});

gameApp.run(function () {
    let dough = new Ingredient("Dough", "https://freepikpsd.com/media/2019/11/dough-png-1-Transparent-Images.png", 5, 'https://atlas-content-cdn.pixelsquid.com/stock-images/raw-dough-in-bowl-4G3JxG3-600.jpg', 5, 'https://cdn.imgbin.com/25/12/13/imgbin-bakery-bread-food-tea-dough-pan-frances-redondo-Eud5MSxyuaeC5a41n5ZSicuer.jpg');
    let cheese = new Ingredient("Cheese", 'https://png.pngtree.com/png-vector/20190219/ourlarge/pngtree-vector-cheese-icon-png-image_563215.jpg', 2, 'https://us.123rf.com/450wm/tanyasid/tanyasid2005/tanyasid200500038/146697574-grated-cheese-isolated-on-white-background-slices-cheese-.jpg?ver=6', 5, 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-cheese-melting-vector-png-image_3556875.jpg');
    let tomato = new Ingredient('Tomato', 'https://cdn-icons-png.flaticon.com/512/199/199620.png', 3, 'https://cdn3.iconfinder.com/data/icons/vegetables-18/100/vegetable_colour-40-512.png', 5, 'https://cdn.iconscout.com/icon/premium/png-256-thumb/tomato-sauce-15-984828.png');
    let pepperoni = new Ingredient('Pepperoni', 'https://cdn.iconscout.com/icon/premium/png-256-thumb/pepperoni-1-891182.png', 2, 'https://cdn-icons-png.flaticon.com/512/1699/1699279.png', 3, null);
    let meat = new Ingredient('Meat', 'https://toppng.com/uploads/preview/meat-icon-png-11552935652heawth3nxj.png', 4, 'https://cdn.imgbin.com/17/19/6/imgbin-meat-grinder-ground-meat-recipe-sausage-meat-7sh4EKB4Cs4b4tzWn2KmAC4iq.jpg', 10, 'https://w7.pngwing.com/pngs/722/325/png-transparent-barbecue-grill-steak-computer-icons-meat-grilling-steak-food-beef-trademark.png');

    let pantry = [dough, cheese, tomato, pepperoni, meat];

    let prepStation1 = new prepStation('prep station 1');
    let prepStation2 = new prepStation('prep station 2');
    let prepStations = [prepStation1, prepStation2];

    let cookingStation1 = new cookingStation('cooking station 1');
    let cookingStation2 = new cookingStation('cooking station 2');
    let cookingStations = [cookingStation1, cookingStation2];

    let servingStation1 = new servingStation('serving station 1');
    let servingStation2 = new servingStation('serving station 2');
    let servingStations = [servingStation1, servingStation2];

    window.kitchenConfig = new KitchenConfig(pantry, prepStations, cookingStations, servingStations);
});

