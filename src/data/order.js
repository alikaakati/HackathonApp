export class Ingredient {
    recipe = null;
	time = 0;
	price = 0;
	state = null;

    constructor(recipe, time, price, state) {
        this.recipe = recipe;
        this.time = time;
        this.price = price;
        this.prepImage = prepImage;
        this.state = state;
    }
}

