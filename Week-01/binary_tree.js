//Functional instantiation

console.clear();

var BinarySearchTree = function(value) {
  //Initialize object
  var obj = {};

  //Initialize properties
  obj.value = value;
  obj.left = null;
  obj.right = null

  //Initialize methods
  obj.insert = function(value) {
    if (value > obj.value) {
      if (obj.right === null) {
        obj.right = BinarySearchTree(value);
      } else {
        obj.right.insert(value);
      }
    } else {
      if (obj.left === null) {
        obj.left = BinarySearchTree(value);
      } else {
        obj.left.insert(value);
      }
    }
  }

  obj.contains = function(value) {
    if (value === obj.value) {return true}

    if (value < obj.value) {
      if (obj.left === null) {return false;}
      if (obj.left.value === value) {
        return true
      } else {
          return obj.left.contains(value);
      }
    } else {
        if (obj.right === null) {return false;}
        if (obj.right.value === value) {
          return true;
        } else {
            return obj.right.contains(value);
        }
      }
  }

  obj.depthFirstLog = function(callback) {
    callback(obj.value);

    if (obj.left) {obj.left.depthFirstLog(callback);}
    if (obj.right) {obj.right.depthFirstLog(callback);}
  }

  return obj
};

//Create a Binary Search Tree
let bst = BinarySearchTree(4);
bst.insert(2);
bst.insert(1);
bst.insert(6);
console.log('Should be true: ', bst.contains(4));
console.log(bst);