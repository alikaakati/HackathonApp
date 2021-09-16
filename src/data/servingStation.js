export class ServingStation {
    ingredients = [];
	recipe = {};
	recipeMatched = false;

    constructor(ingredients, recipe, recipeMatched) {
        this.ingredients = ingredients;
        this.recipe = recipe;
        this.recipeMatched = recipeMatched;
    }
}

