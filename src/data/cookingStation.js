export class CookingStation {
    ingredients = [];
	recipe = {};
	recipeMatched = false;
    totalCookingTime = 0;
    cookingTimer = null;
    

    constructor(ingredients, recipe, recipeMatched, totalCookingTime, cookingTimer) {
        this.ingredients = ingredients;
        this.recipe = recipe;
        this.recipeMatched = recipeMatched;
        this.totalCookingTime = totalCookingTime;
        this.cookingTimer = cookingTimer;
    }
}

