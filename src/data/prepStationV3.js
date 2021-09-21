export class prepStation{
    ingredient = null; 

    constructor() {
        this.ingredient = null;
    }



    
    prep = () =>{
        console.log(this.ingredient);
        debugger;
        this.ingredient.startPrep();
    }

    add = (ingredient) =>{
        //random unique id
        if(ingredient){
            if(!ingredient.id) ingredient.id = Date.now();
            this.ingredient = ingredient;
        }
    }


    remove = () =>{
        //maybe we can use the id here instead of a name :o
        this.ingredient = null;
    }



}