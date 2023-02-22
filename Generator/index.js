// generators can be nested
// function* number() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield* moreNumbers();
//   yield 6;
//   yield 7;
// }

// function* moreNumbers() {
//   yield 4;
//   yield 5;
// }

// const generator = number();

// const values = [];

// for (value of generator) {
//   values.push(value);
// }

class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  *printDFS() {
    yield this.value;
    for (let child of this.children) {
      yield* child.printDFS();
    }
  }
}

const tree = new Tree(1, [new Tree(2, [new Tree(4, [])]), new Tree(3, [])]);

const treeValues = [];

for (let value of tree.printDFS()) {
  treeValues.push(value);
}

treeValues;
