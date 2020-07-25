// https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65
// Heaps data structure, unlike Object, Map, and Set is not supported natively in JavaScript.

// Heap is tree data-structure, complete tree
// Complete Tree: all level is filled, except last layer
// node are far left

// MinHeap: Parent node is always less than child node
// MaxHeap: Parent node is always more or equal child node

// Getting min and max data at anytime O(1)

// https://www.dofactory.com/javascript/design-patterns/adapter


// Access max and min value:
// Heap -> O(1) 
// LinkedList , Array -> Object(n)
// BST --> O(Logn)

// Heap
// Insert, delete -> O(LogN)

// Operating system use heap for scheduling job on priority basis


// Heap --> Represent as tree, Store as Array

//       10
//      /  \
//    23   36
//   / \   / \
//  32 38 45 57

//  10 | 23 | 36 | 32 | 38 | 45 | 57

// add elements to array level by level

//  child from parent
//  0 --> 1, 2 ----> i --> 2i+1, 2i+2 
//  1 --> 3, 4 ---->
//  2 --> 5, 6 ---->

// child to parent --> i-1/2 
// 4 --> Math.floor(4-1/2) ==> 1

// Heap can implemented by Array or Linked list

// min heap

class Heap {
  constructor(type = 'min') {
    this.heap = []
    this.type = type
  }

  // O(1)
  getMin() {
    return this.heap[0]
  }

  printHeap() {
    console.log(this.heap)
  }

  // Insert from top to bottom
  // left to right
  // We first insert and then balance the heap 

  // O(LogN)
  insert(node) {
    // Insert node to the end of the heap
    this.heap.push(node)
    // Find the correct position of the new Node
    if (this.heap.length > 1) {
      let currentLength = this.heap.length - 1
      let currentParent = this.heap[Math.floor(currentLength / 2)]
      let currentValue = this.heap[currentLength]

      // Traverse until the current node is greater than the parent // HeapifyUp
      const heapRole = this.type === 'min' ? currentParent > currentValue : currentParent < currentValue

      while (currentLength >= 1 && heapRole) {
        // Swap two nodes 
        [this.heap[Math.floor(currentLength / 2)], this.heap[currentLength]] = [this.heap[currentLength], this.heap[Math.floor(currentLength / 2)]]
        currentLength = Math.floor(currentLength / 2)
      }
    }
  }

  remove() {
    let nextHead = this.heap[0]

    // When there are two or more element in heap:
    // We put right most element to the top and compare with child nodes
    if (this.heap.length > 2) {
      this.heap[0] = this.heap[this.heap.length - 1]
      this.heap.splice(this.heap.length - 1)

      if(this.heap.length === 2) {
        if(this.heap[0] > this.heap[1]) {
          [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]]
        }
        return nextHead
      }

      let current = 0

      while (this.shouldMove(current)) {
        const { heap, newCurrent} = this.swapRemove(current)
        current = newCurrent
        this.heap = heap
      }
    } else if(this.heap.length === 2){
        this.heap.splice(0,1)
    } else {
      return null
    }

    return nextHead
  }

  shouldMove(current) {
    let { leftChild, rightChild } = this.getChild(current)

    const heapCondition = this.type === 'min' ?
      this.heap[leftChild] < this.heap[current] || this.heap[rightChild] < this.heap[current] :
      this.heap[leftChild] > this.heap[current] || this.heap[rightChild] > this.heap[current]

    return this.heap[leftChild] && this.heap[rightChild] && heapCondition
  }

  swapRemove(current) {
    let { leftChild, rightChild } = this.getChild(current)

    if(this.heap[leftChild] < this.heap[rightChild]) {
      if(this.type === 'min') {
        [this.heap[leftChild], this.heap[current]] = [this.heap[current], this.heap[leftChild]]
        current = leftChild
      } else {
        [this.heap[rightChild], this.heap[current]] = [this.heap[current], this.heap[rightChild]]
        current = rightChild
      }
    } else {
      if(this.type === 'min') {
        [this.heap[rightChild], this.heap[current]] = [this.heap[current], this.heap[rightChild]]
        current = rightChild
      } else {
        [this.heap[leftChild], this.heap[current]] = [this.heap[current], this.heap[leftChild]]
        current = leftChild
      }
    }
    return {
      heap: this.heap,
      newCurrent: current
    }
  }

  getChild(current) {
    return {
      leftChild: 2 * current + 1,
      rightChild: 2 * current + 2
    }
  }

}



const testMiniHeap = new Heap()
console.log(`MinHeap initial min is null, test result:`, testMiniHeap.getMin() === undefined)
testMiniHeap.insert(10)
// console.log(`MinHeap size after 1 insertion is insertion value, test result:`, testMiniHeap.getMin())
testMiniHeap.insert(23)
//console.log(`MinHeap size after 1 insertion is insertion value, test result:`, testMiniHeap.getMin())
testMiniHeap.insert(36)
//console.log(`MinHeap size after 1 insertion is insertion value, test result:`, testMiniHeap.getMin())
testMiniHeap.insert(32)
// //console.log(`MinHeap size after 1 insertion is insertion value, test result:`, testMiniHeap.getMin())
testMiniHeap.insert(38)
// //console.log(`MinHeap size after 1 insertion is insertion value, test result:`, testMiniHeap.getMin())
testMiniHeap.insert(45)
testMiniHeap.insert(57)

testMiniHeap.printHeap()
testMiniHeap.getMin()
const head = testMiniHeap.remove()
console.log('head', head)
testMiniHeap.printHeap()