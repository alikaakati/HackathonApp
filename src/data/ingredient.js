export class Ingredient {
    name = null;
	rawImage = null;
	prepClicks = 0;
	prepImage = 0;
	cookTime = 0;
	cookImage = null;
	state = null;


    constructor(name, rawImage, prepClicks, prepImage, cookTime, cookImage, state) {
        this.name = name;
        this.rawImage = rawImage;
        this.prepClicks = prepClicks;
        this.prepImage = prepImage;
        this.cookTime = cookTime;
        this.cookImage = cookImage;
        this.state = state;
    }
}

