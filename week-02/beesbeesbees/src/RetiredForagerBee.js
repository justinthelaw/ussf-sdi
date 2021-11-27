/* START SOLUTION */
class RetiredForagerBee extends ForagerBee {
  constructor(food, color, treasureChest) {
    super(food, color, treasureChest);
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey'
  }
  eat () {
    super.eat();
  }

  forage () {
    return `I am too old, let me play cards instead`
  }

  gamble (treasure) {
    this.treasureChest.push(treasure);
  }
}
/* END SOLUTION */
