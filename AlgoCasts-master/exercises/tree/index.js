// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((child) => child.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    let queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let node = queue.shift();
      fn(node);
      // add to the end of the array
      queue.push(...node.children);
    }
  }

  traverseDF(fn) {
    let stack = [];
    stack.push(this.root);
    while (stack.length > 0) {
      let current = stack.shift();
      fn(current);
      // add to begining of the array
      stack.unshift(...current.children);
    }
  }
}

const t = new Tree();
t.root = new Node(1);
t.root.add(2);
t.root.add(3);
t.root.add(4);
t.root.children[0].add(5);
t.root.children[0].add(6);

module.exports = { Tree, Node };
