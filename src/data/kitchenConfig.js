export class KitchenConfig {
    pantry = [];
	prepStation = [];
	cookingStation = [];
	servingStation = [];

    constructor(pantry, prepStation, cookingStation, servingStation) {
        this.pantry = pantry;
        this.prepStation = prepStation;
        this.cookingStation = cookingStation;
        this.servingStation = servingStation;
    }
}