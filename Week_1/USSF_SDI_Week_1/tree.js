console.clear();

//functional shared instantiation

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  extend(newTree, treeMethods)

  return newTree;
};

var extend = (tree, treeMethods) => {
  for (var key in treeMethods) {
    tree[key] = treeMethods[key]
  }
}

var treeMethods = {

  addChild: function(value) {
    let newBranch = new Tree(value);
    this.children.push(newBranch);
  },

  contains: function(target) {
    if (this.value === target) {return true}
    this.children.some((child) => {
      return child.value === target;
    })
    if (this.children.length > 0) {
      this.children.contains;
    }
    return false;
  }
}

//Test Tree methods
let chicken = new Tree('Chicken');
chicken.addChild('Fried');
chicken.addChild('Grilled');
chicken.addChild('Baked');
chicken.children[1].addChild('CRAZY');
console.log(JSON.stringify(chicken, null, 2));
console.log(chicken.contains('Baked'));
console.log(chicken.contains('CRAZY'));
console.log(chicken.contains('Chicken'));