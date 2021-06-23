class HoneyMakerBee extends Bee {
  /* START SOLUTION */
  constructor(food, color) {
    super(food, color)
    this.age = 10;
    this.job = `make honey`
    this.honeyPot = 0;
  }

  eat () {
    super.eat();
  }

  makeHoney () {
    this.honeyPot++
  }

  giveHoney() {
    this.honeyPot--
  }

  /* END SOLUTION */
}
