console.clear()

//Class, node instantiation
var Node = (value) => {
  var node = {}

  node.value = value;
  node.next = null;

  return node;
}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    let newNode = Node(value)

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  removeHead() {
    let valueToDel = this.head.value;
    this.head = this.head.next;
    return valueToDel;

  }

  contains(target) {
    while (this.head) {
      if (this.head.value === target) {
        return true;
      } else {
        this.head = this.head.next;
      }
    }
    return false;
  }
}

let newList = new LinkedList();
newList.addToTail(20);
newList.addToTail(30);
newList.addToTail(40);
console.log('Should have 20 head and 40 tail:\n', newList);
console.log(newList.removeHead());
console.log(newList.removeHead());
newList.addToTail(60);
console.log('\nShould have 40 head and 60 tail:\n', newList);
console.log('\nShould be true: ', newList.contains(60));
console.log('Should be false: ', newList.contains(20));
