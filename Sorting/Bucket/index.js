// only when all the values fit in finite range 0 - 10000

function BucketSort(arr) {
  const bucket = {};
  for (let item of arr) {
    bucket[item] = bucket[item] ? bucket[item] + 1 : 1;
  }

  let i = 0;
  for ([key, value] of Object.entries(bucket)) {
    let j = value;
    while (j > 0) {
      // arr[i] = Number.parseInt(key);
      arr[i] = key;
      j--;
      i++;
    }
  }
  return arr;
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  insert(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return this;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(data);
    return this;
  }

  size() {
    let counter = 0;
    let current = this.head;
    while (current.next) {
      current = current.next;
      counter++;
    }
    return counter;
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
      current = current.next;
      counter++;
    }
    return current;
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
    }
  }
}

function BucketSortWithLinkedList(arr) {
  let bucket = {};
  for (let item of arr) {
    if (!bucket[item]) {
      const linkedList = new LinkedList();
      bucket[item] = linkedList.insert(item);
    } else {
      bucket[item].insert(item);
    }
  }

  let i = 0;
  for ([key, value] of Object.entries(bucket)) {
    for (let node of value) {
      if (node) {
        arr[i] = node.data;
        i++;
      }
      node;
    }
  }

  return arr;
}

BucketSortWithLinkedList([2, 2, 1, 0, 1, 0]);

module.exports = {
  BucketSort,
  BucketSortWithLinkedList,
};
