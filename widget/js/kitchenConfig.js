class KitchenConfig {
    pantry = [];
	prepStations = [];
	cookingStations = [];
	servingStations = [];

    constructor(pantry, prepStation, cookingStation, servingStation) {
        this.pantry = pantry;
        this.prepStations = prepStation;
        this.cookingStations = cookingStation;
        this.servingStations = servingStation;
    }
}