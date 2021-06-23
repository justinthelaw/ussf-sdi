//Class instantiation

class Stack {

  constructor() {
      this.items = [];
  }

  push(element) {
      this.items.push(element);
  }

  pop() {
      return this.items.pop();
  }

  size() {
      return this.items.length;
  }

  peek() {
      return this.items[this.items.length - 1];
  }

  isEmpty() {
      return this.items.length === 0;
  }

  printStack() {
      return this.items.join(" ");
  }
}

let plates = new Stack;
plates.push('orange plate');
console.log(plates);