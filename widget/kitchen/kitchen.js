gameApp.controller("KitchenController", function ($scope, $appConfig) {
    $scope.appConfig = $appConfig.get();
    $scope.models = {
        selected: null
    };

    $scope.prepStationDropCallback = function (index, item, external, type, list) {
        let prepStation = $scope.appConfig.prepStations.find(x => x.id === list.id);
        let ingredient = new Ingredient(item.name, item.rawImage, item.prepClicks, item.prepImage, item.cookTime, item.cookImage, item.state, item.prepClicked);
        prepStation.add(ingredient);
        if (!$scope.$$phase) {
            //$digest or $apply
            $scope.$apply();
        }
        return true;
    };

    $scope.cookingStationDropCallback = function (index, item, external, type, list) {
        let cookingStations = $scope.appConfig.cookingStations.find(x => x.id === list.id);
        let ingredient = new Ingredient(item.name, item.rawImage, item.prepClicks, item.prepImage, item.cookTime, item.cookImage, item.state, item.prepClicked);
        cookingStations.add(ingredient);
        let refreshInterval = setInterval(function () {
            if (!$scope.$$phase) {
                //$digest or $apply
                $scope.$apply();
            }
        }, 1000);

        window.addEventListener("cookingStateChange-" + list.id, function () {
            if (!$scope.$$phase) {
                //$digest or $apply
                $scope.$apply();
            }
        });
        return true;
    };

    $scope.prepClicks = function (item, index) {
        $scope.appConfig.prepStations[index].prep();
    }
});
