class Level {
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