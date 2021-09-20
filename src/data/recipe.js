export class Recipe {
	name = null;
	ingredients = null;
	image = null;
	requiresAllCooked = null;

    constructor(name, ingredients, image, requiresAllCooked) {
        this.name = name;
        this.ingredients = ingredients;
        this.image = image;
        this.requiresAllCooked = requiresAllCooked;
    }
}

