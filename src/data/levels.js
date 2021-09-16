export class Level {
    score = 0;
	timer = 0;
	orders = [];
    kitchenConfig = null;
    nextLevelAt = 0;

    constructor(score, timer, orders, kitchenConfig, nextLevelAt) {
        this.score = score;
        this.timer = timer;
        this.orders = orders;
        this.kitchenConfig = kitchenConfig;
        this.nextLevelAt = nextLevelAt;
    }

    setNextLevel(score) {
        this.nextLevelAt = score;
    }

}