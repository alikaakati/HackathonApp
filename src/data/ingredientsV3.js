import { IngredientStates } from "../enums/IngredientStates";
export class Ingredient{

    name = "";
    rawImage = "";
    prepClicked = 0;
    prepClicks = 0;
    prepImage = "";
    cookTime = 0;
    cookImage = "";
    state = null;
    cookingTimer = 0;
    cookingTime = 0;
    cookingBuffer = 5;
    resting = false;


    constructor(name, rawImage, prepClicks,prepImage, cookTime, cookImage){
        this.name = name;
        this.rawImage = rawImage;
        this.prepClicks = prepClicks;
        this.prepImage = prepImage;
        this.cookTime = cookTime;
        this.cookImage = cookImage;
        this.prepClicked = 0;
        this.state = IngredientStates.RAW;
        this.cookingTimer = null;
        this.cookingTime = 0;
        this.cookingBuffer = 5;
        this.resting = false;
    }

    startPrep(){       
        if(this.state == IngredientStates.PREPARED){
            return;
        }

        this.prepClicked++;
        
        if(this.prepClicks === this.prepClicked){
            console.log("PREPARED, STATE UPDATED");
            this.state = IngredientStates.PREPARED;
        }
    }

    rest(){       
        console.log("Ingredient class - resting..");
        console.log("Ingredient class - name:" + this.name);
        this.resting = true;
    }
    continueCooking(){ 
        //continue cooking incase the item was set to resting before.
        console.log("Ingredient class - Continuing to cook");
        console.log("Ingredient class - Continuing to cook, ingredient name: " + this.name);
        this.resting = false;
        if(!this.cookingTimer){
            this.cookingTime = this.cookTime;
            this.startCooking();
            
        }
    }

    startCooking(){
        console.log("Ingredient class - Start cooking");
        this.cookingTimer = setInterval(() => {
            this.cookingTime++;
            if(this.cookingTime === this.cookTime) this.state = IngredientStates.COOKED;
            console.log("Ingredient class - start cooking interval");
            console.log("Ingredient class - name of ingredient: " + this.name);
            console.log("Ingredient class - state of ingredient: " + this.state);
            console.log("Ingredient class - is ingredient resting? : " + this.resting)
            //set to resting to avoid burning the food, this hapeens when we add a new ingredient to the cooking station, we set the previous ones to resting for a while
            if(this.resting){
                if(this.state == IngredientStates.COOKED){
                    if(this.cookingTimer){
                        clearInterval(this.cookingTimer);
                        this.cookingTimer = null;
                    }
                }
                return;
            }
            //add buffer to allow extra time for the item to cook before reaching the overcooked state
            if(this.cookingTime > (this.cookTime + this.cookingBuffer)) {
                console.log("OVERCOOKED: From inside the if condition");
                console.log("OVERCOOKED: Cooking time: "+this.cookingTime);
                console.log("OVERCOOKED: Cook time: "+this.cookTime);
                console.log("OVERCOOKED: Cooking buffer: "+this.cookingBuffer);
                this.state = IngredientStates.OVERCOOKED;
                console.log(this.state);                
                //overcooked! then stop the cooking process
                clearInterval(this.cookingTimer);
                this.cookingTimer = null;
            }
            else{
                console.log("Cooking time: "+this.cookingTime);
                console.log("Cook time: "+this.cookTime);
                console.log("Cooking buffer: "+this.cookingBuffer);
            }
        },1000);
    }
}

