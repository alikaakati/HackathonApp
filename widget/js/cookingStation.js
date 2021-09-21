class cookingStation {
    constructor(name, ingredients) {
        this.id = uuidv4();
        this.name = name;
        this.ingredients = ingredients || [];
        this.cookingTimer = null;
        this.recipe = [];
        this.recipeMatched = false;
        this.isRecipeBurnt = false;
    }

    getLastAddedIngredient = () => {
        let lastAddedOne = null;
        if (this.ingredients.length > 0) {
            lastAddedOne = this.ingredients[this.ingredients.length - 1];
        }
        return lastAddedOne;
    }

    setOtherIngredientsToRest = (restAll = false) => {
        let lastAddedOne = this.getLastAddedIngredient();
        if (lastAddedOne) {
            if (this.ingredients.length > 1) {
                for (const ingredient of this.ingredients) {
                    if (restAll || lastAddedOne.id !== ingredient.id)
                        ingredient.rest();
                }
            }
        }

    }


    add = (ingredient) => {
        console.log("Adding ingredients right now from cooking station");
        //random unique id
        ingredient.id = Date.now();
        this.ingredients.push(ingredient);
        ingredient.startCooking();

        //if it's off then start cooking
        if (!this.cookingTimer)
            this.startCooking();

        //if there are any ingredients before, then put them to rest for a while.
        this.setOtherIngredientsToRest();

        //check if the ingredients matches any of the recipes we have
        this.isRecipeMatched();
    }

    startCooking = () => {
        this.cookingTimer = setInterval(() => {
            if (this.recipeMatched) {
                clearInterval(this.cookingTimer);
                return;
            }
            let lastAddedOne = this.ingredients[this.ingredients.length - 1];
            console.log("starting to cook");
            if (lastAddedOne.state === IngredientStates.OVERCOOKED) {
                for (const ingredient of this.ingredients) {
                    ingredient.continueCooking();
                }
                clearInterval(this.cookingTimer);
            }

            this.isRecipeMatched();

            // ...dispatch cooking event
            let event = new Event("cookingStateChange-" + this.id, {}); // (2)
            window.dispatchEvent(event);

        }, 1000);
    }


    recipeMatchedBuffer = () => {
        let counter = 0;
        let interval = setInterval(() => {
            counter++;
            if (counter == 5) {
                this.isRecipeBurnt = true;
                clearInterval(interval);
            }
            let event = new Event("cookingStateChange-" + this.id, {}); // (2)
            window.dispatchEvent(event);
        }, 5000);

    }

    isRecipeMatched = () => {
        //first check if the all ingredients are cooked
        let isAllIngredientsCooked = this.ingredients.every(item => item.state === IngredientStates.COOKED);
        const compare = (recipe) => {
            if (this.recipeMatched) return;
            let numberOfMatchedItems = 0;

            for (const rIngredient of recipe.ingredients) {
                let rIngredientJSONStr = JSON.stringify({
                    name: rIngredient.name,
                    prepClicks: rIngredient.prepClicks,
                    state: rIngredient.state

                });

                for (let i = 0; i < this.ingredients.length; i++) {

                    let cIngredient = this.ingredients[i];

                    let cIngredientJSONStr = JSON.stringify({
                        name: cIngredient.name,
                        prepClicks: cIngredient.prepClicked,
                        state: cIngredient.state

                    })

                    if (cIngredientJSONStr === rIngredientJSONStr) {
                        numberOfMatchedItems++;
                        break;
                    }
                }

            }

            if (numberOfMatchedItems === recipe.ingredients.length) {
                console.log("Matched recipe");
                console.log(recipe);

                return {match: true, recipe: recipe};
            } else {
                return {match: false, recipe: null};
            }
        }

        for (const recipe of recipes) {
            if (recipe.requiresAllCooked === isAllIngredientsCooked) {
                let result = compare(recipe);
                this.recipeMatched = result.match;
                this.recipe = [result.recipe];
                console.log("recipeMatchedBuffer");
                this.recipeMatchedBuffer();
            }
        }
    }


    remove = (ingredient) => {
        //maybe we can use the id here instead of a name :o
        let removedIngredient = this.ingredients.splice(this.ingredients.findIndex(function (i) {
            return i.id === ingredient.id;
        }), 1);
        removedIngredient.stopCooking();

        let lastAddedIngredient = this.getLastAddedIngredient();
        if (lastAddedIngredient) {
            lastAddedIngredient.continueCooking();
        } else {
            //empty station clear the interval.
            clearInterval(this.cookingTimer);
            this.cookingTimer = null;
        }
        this.isRecipeMatched();
    }


}