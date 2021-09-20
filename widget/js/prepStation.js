class prepStation{

    constructor() {
        this.ingredient = null;
    }
    prep = () =>{
        this.ingredient.startPrep();
    }
    add = (ingredient) =>{
        if(!ingredient.id) ingredient.id = Date.now();
        this.ingredient = ingredient;
    }
    remove = () =>{

        this.ingredient = null;
    }

}