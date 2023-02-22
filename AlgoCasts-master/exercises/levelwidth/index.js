// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require("./node");

function levelWidth(root) {
  root.data;
  let parentQueue = [];
  let childrenQueue = [];
  let map = {};
  let level = 0;
  parentQueue.push(root);

  while (parentQueue.length > 0) {
    let parent = parentQueue.shift();
    map[level] = map[level] ? [...map[level], parent.data] : [parent.data];
    childrenQueue.push(...parent.children);

    if (parentQueue.length === 0) {
      parentQueue = childrenQueue;
      childrenQueue = [];
      level++;
    }
  }

  return Object.values(map).map((item) => item.length);
}

const root = new Node(10);
root.add(11);
root.add(12);
root.add(13);
root.children[0].add(14);

root.children[2].add(15);
root.children[2].add(16);

levelWidth(root) === [1, 3, 2];

root;

module.exports = levelWidth;
