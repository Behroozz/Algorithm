// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let current = this.head;
    while (current) {
      current = current.next;
      counter++;
    }
    return counter;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let current = this.head;
    // while (current) {
    //   if (!current.next) {
    //     return current;
    //   }
    //   current = current.next;
    // }
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    // [] -> [] -> []
    // prev  current

    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let current = this.head.next;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    const node = new Node(data);
    let last = this.getLast();

    if (last) {
      last.next = node;
    } else {
      this.head = node;
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let counter = 0;
    while (current) {
      if (counter === index) {
        return current;
      }
      counter++;
      current = current.next;
    }
    return current;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let prev = this.getAt(index - 1) || this.getLast();
    prev.next = new Node(data, prev.next);
  }

  forEach(fn) {
    let current = this.head;
    let counter = 0;
    while (current) {
      fn(current);
      current = current.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
    }
  }
}

const l = new LinkedList();
l.insertLast("a");
l.insertLast("b");
l.insertLast("d");
l.insertLast("e");

l.insertAt("f", 4);
console.log(l.getAt(3).data);

// const list = new LinkedList();

// list.insertLast(1);
// list.insertLast(2);
// list.insertLast(3);
// list.insertLast(4);

// list.forEach((node) => {
//   node.data += 10;
// });
// list.getAt(0); // Returns node with data '11'

module.exports = { Node, LinkedList };
