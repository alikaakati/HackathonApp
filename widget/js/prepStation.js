class prepStation {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
        this.ingredients = [];
    }

    prep = () => {
        if (this.ingredients.length === 0)
            return;

        this.ingredients[0].startPrep();
    }
    add = (ingredient) => {
        if (this.ingredients.length > 0)
            return;

        if (!ingredient.id) ingredient.id = Date.now();

        this.ingredients.push(ingredient);
    }
    remove = () => {
        this.ingredients = [];
    }
}