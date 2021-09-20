class servingStation{

    
    constructor(ingredients) {
        this.ingredients = ingredients;
        this.recipe = null;
        this.recipeMatched = false
    }



    

    add = (ingredient) =>{
        console.log("Adding ingredients right now from cooking station");
        //random unique id
        if(!ingredient.id) ingredient.id = Date.now();
        this.ingredients.push(ingredient);

        this.isRecipeMatched();
    }

    isRecipeMatched = () =>{
        //first check if the all ingredients are cooked
        let isAllIngredientsCooked = this.ingredients.every(item => item.state === IngredientStates.COOKED);
         const compare = (recipe) =>{
             if(this.recipeMatched) return;
            let numberOfMatchedItems = 0;

            for(const rIngredient of recipe.ingredients){
                let rIngredientJSONStr = JSON.stringify({
                            name: rIngredient.name,
                            prepClicks: rIngredient.prepClicks,
                            state: rIngredient.state

                });

                for(let i = 0; i < this.ingredients.length ; i++ ){

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
                console.log("Matched recipe");
                console.log(recipe);
                
                return {match: true, recipe: recipe};
            }else {
                return {match: false, recipe: null};
            }
        }
        
        for(const recipe of recipes){
            if(recipe.requiresAllCooked === isAllIngredientsCooked){
               let result = compare(recipe);
                this.recipeMatched = result.match;
                this.recipe = result.recipe;
                console.log("recipeMatchedBuffer");
            }
        }
    }


    remove = (ingredient) =>{
        //maybe we can use the id here instead of a name :o
        this.ingredients.splice(this.ingredients.findIndex(function(i){ return i.id === ingredient.id; }), 1);
        this.isRecipeMatched();
    }



}