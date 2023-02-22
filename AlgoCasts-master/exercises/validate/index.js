// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
const Node = require("./node");

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }
  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

const n = new Node(10);
n.insert(0);
n.insert(12);
n.insert(-1);
n.insert(4);
n.insert(11);
n.insert(20);
n.insert(17);
n.insert(99);

n.left.left.right = new Node(15);
// const n = new Node(10);
// n.insert(5);
// n.insert(15);
// n.insert(0);
// n.insert(20);

validate(n);
// expect(validate(n)).toEqual(true);

module.exports = validate;
