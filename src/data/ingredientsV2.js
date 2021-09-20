
class ingredient 
{
    name: String,
    rawImage: String,
    prepClicked: Number,
    prepClicks: Number,
    prepImage: String,
    cookTime: Number,
    cookImage: String,
    state: ingredientStates,
    cookingTimer: Number,
    cookingTime: Number,
    cookingBuffer: 5,
    rest: false,

  
    startPrep(){       
        if(this.state == ingredientStates.PREPARED){
            return;
        }

        this.prepClicked++;

        if(this.prepClicks === this.prepClicked)
            this.state = ingredientStates.PREPARED;
    }

    rest(){       
        this.rest = true;
    }

    continueCooking(){ 
        //continue cooking incase the item was set to rest before.
        this.rest = false;
        if(!this.cookingTimer){
            this.cookingTime = this.cookTime;
            this.startCooking();
            
        }
    }

    startCooking(){
        this.cookingTimer = setInterval(() => {
            this.cookingTime++;
            if(this.cookingTime === this.cookTime) this.state = ingredientStates.COOKED;

            //set to rest to avoid burning the food, this hapeens when we add a new ingredient to the cooking station, we set the previous ones to rest for a while
            if(this.rest){
                if(this.state == ingredientStates.COOKED){
                    if(this.cookingTimer){
                        clearInterval(this.cookingTimer);
                        this.cookingTimer = null;
                    }
                }
                return;
            }

            //add buffer to allow extra time for the item to cook before reaching the overcooked state

            if(this.cookingTime > (this.cookTime + this.cookingbuffer)) {
                this.state = ingredientStates.OVERCOOKED;
                //overcooked! then stop the cooking process
                clearInterval(this.cookingTimer);
                this.cookingTimer = null;
            }
        },1000);
    }
}