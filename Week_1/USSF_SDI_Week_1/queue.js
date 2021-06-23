//Class instantiation

class Queue {

  constructor() {
      this.items = [];
  }

  enqueue(element) {
      this.items.splice(this.items.length, 0, element);
  }

  size() {
      return this.items.length;
  }

  dequeue() {
      this.items.splice(this.items[0], 1)
      return this.items[0];
  }

  front() {
      return this.items[0];
  }

  isEmpty() {
      return this.items.length === 0;
  }

  printQueue() {
      let itemsArr = [];

      for (let i = this.items.length - 1; i >= 0; i--) {
          itemsArr.push(this.items[i]);
      }

      return itemsArr.join(" ");
  }
}

let waitingLine = new Queue;
waitingLine.enqueue('Joseph');
console.log(waitingLine);