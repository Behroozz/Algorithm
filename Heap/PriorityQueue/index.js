// Priority Queue is a Queue that is complete Binary Tree
// every level is full except leaf
// items added left to right
// entire point is to find min or max very fast
// for min heap, we want to keep in root

// recursively every value in left subtree be greater that root
// recursively every value in right subtree be greater that root

// we allow to have duplicate

// implemented by array

// root always is at index 1
// https://neetcode.io/courses/dsa-for-beginners/23
// [0, root, left child, right child, left child left child,....]

// left child = 2 * i
// right child = 2 * i + 1
// parent = i / 2

// Sorting
// O(nLog(n))
class MinHeap {
  constructor() {
    // initilize the heap with 1 element, we dont care about the index 0
    this.heap = [0];
  }

  push(data) {
    // First we add the element to end of the array, we do this since the heap is Balanced complete tree
    // we want to fill it from left to right
    // 20 -> [x,y,z,20]
    this.heap.push(data);
    // get the last element index
    let i = this.heap.length - 1;

    this.perculateUp(i);
  }

  // O(log(n))
  pop() {
    if (this.heap.length === 1) {
      // nothing to pop since we only have dummy first value
      return;
    }
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    // response is the first element
    let res = this.heap[1];

    // Move the last element to the top
    this.heap[1] = this.heap.pop();
    let i = 1;

    this.perculateDown(i);
    return res;
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // perculate up the element
  perculateUp(i) {
    while (
      // there is more than one element in heap and
      // index i is less than parent
      i > 1 &&
      this.heap[i] < this.heap[Math.floor(i / 2)]
    ) {
      this.swap(i, Math.floor(i / 2));
      i = Math.floor(i / 2);
    }
  }

  // perculate down
  perculateDown(i) {
    while (
      // there is still an element since the last left element (2*i) still in bound with the array
      2 * i <
      this.heap.length
    ) {
      // right element exist
      // right element is less than left element
      // element in index i is bigger than element in right index
      if (
        2 * i + 1 < this.heap.length &&
        this.heap[2 * i + 1] < this.heap[2 * i] &&
        this.heap[i] > this.heap[2 * i + 1]
      ) {
        this.swap(i, 2 * i + 1);
        i = 2 * i + 1;
      } else if (this.heap[i] > this.heap[2 * i]) {
        this.swap(i, i * 2);
        i = i * 2;
      } else {
        break;
      }
    }
  }

  // Build Heap
  // O(n)
  heapify(arr) {
    // since the original array is not in any particualr order
    // take the first element and move it to the end of element
    // this will satisfy empty the first element in index 0
    arr.push(arr[0]);
    arr[0] = -1;
    this.heap = arr;

    // We want to keep the order property
    // every node should be less than its childrens
    // we start from bottom node and move up
    // since we can ignore all the leafs and always every level of balanced tree have the same size of the rest of tree
    let current = Math.floor((this.heap.length - 1) / 2);

    while (current > 0) {
      let i = current;
      this.perculateDown(i);
      current--;
    }
    return;
  }
}

// const minHeap = new MinHeap();
// minHeap.heapify([60, 50, 80, 40, 30, 10, 70, 20, 90]);
// console.log(minHeap.heap);

module.exports = MinHeap;
