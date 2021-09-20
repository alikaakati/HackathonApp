class cookingStation 
{

    ingredients: Array 
    totalCookingTime: Number, 
    cookingTimer: Number
    recipe: recipe,
    recipeMatched: Boolean

    getLastAddedIngredient(){
        let lastAddedOne = null;
        if(this.ingredients.length > 0){
            lastAddedOne = this.ingredients[this.ingredients.length - 1];
        }

        return lastAddedOne;
    }

    setOtherIngredientsToRest(){
        let lastAddedOne = this.getLastAddedIngredient();

        if(lastAddedOne){
            if(this.ingredients.length > 1){
                for(const ingredient of this.ingredients){
                    if(lastAddedOne.id !== ingredient.id)
                        ingredient.rest();
                }
            }    
        }
        
    }

    add(ingredient){
        //random unique id
        ingredient.id = Date.now();
        this.ingredients.push(ingredient);
        ingredient.startCooking();

        //if it's off then start cooking
        if(!this.cookingTimer)
            this.startCooking();

        //if there are any ingredients before, then put them to rest for a while.
        this.setOtherIngredientsToRest();

        //check if the ingredients matches any of the recipes we have
        this.isRecipeMatched();
    }

    startCooking(){
        this.cookingTimer = setInterval(() => {
            let lastAddedOne = this.ingredients[this.ingredients.length - 1];

            if(lastAddedOne.state === ingredientStates.OVERCOOKED){
                for(const ingredient of this.ingredients){
                    ingredient.continueCooking();
                }
                clearInterval(this.cookingTimer);
            }

            this.isRecipeMatched();

        },1000);
    }

    isRecipeMatched(){
        //first check if the all ingredients are cooked
        let isAllIngredientsCooked = this.ingredients.every(item => item.state === ingredientStates.COOKED);

        function compare(recipe){
            let numberOfMatchedItems = 0;

            for(const rIngredient of recipe.ingredients){

                let rIngredientJSONStr = JSON.stringify({
                            name: rIngredient.name,
                            prepClicks: rIngredient.prepClicks,
                            state: rIngredient.state

                });

                for(let i = 0; i < this.ingredients ; i++ ){

                    let cIngredient = this.ingredients[i];

                    let cIngredientJSONStr = JSON.stringify({
                            name: cIngredient.name,
                            prepClicks: cIngredient.prepClicked,
                            state: cIngredient.state

                    })

                    if(cIngredientJSONStr === rIngredientJSONStr){
                        numberOfMatchedItems++;
                        break;
                    }
                }

            }

            if(numberOfMatchedItems === recipe.ingredients.length){
                return {match: true, recipe: recipe};
            }else {
                return {match: false, recipe: null};
            }
        }

        let recipeMatch = null;
        for(const recipe of recipes){
            if(recipe.requiresAllCooked === isAllIngredientsCooked){
               let result = compare(recipe);
               if(result.match){
                    recipeMatch = result.recipe;
               }
            }
        }
    }

    remove(ingredient){
        //maybe we can use the id here instead of a name :o
        let removedIngredient = this.ingredients.splice(this.ingredients.findIndex(function(i){ return i.id === ingredient.d; }), 1);
        removedIngredient.stopCooking();

        let lastAddedIngredient = this.getLastAddedIngredient();
        if(lastAddedIngredient){
            lastAddedIngredient.continueCooking();
        }else {
            //empty station clear the interval.
            clearInterval(this.cookingTimer);
            this.cookingTimer = null;
        }
    }
}