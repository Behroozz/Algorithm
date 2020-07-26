class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(data) {
    this.queue.push(data)
  }

  dequeue() {
    return this.queue.shift()
  }

  getLength() {
    return this.queue.length
  }
}

class Stack {
  constructor() {
    this.stack = []
  }

  push(data) {
    this.push(data)
  }

  pop() {
    return this.stack.pop()
  }

  getLength() {
    return this.stack.length
  }
}
 
class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)
    if(this.root === null) {
      this.root = newNode
      return
    }

    let current = this.root

    while(current) {
      if(current.value > newNode.value) {
        if(!current.left) {
          current.left = newNode
          break
        }
        current = current.left
      } else if(current.value < newNode.value) {
        if(!current.right) {
          current.right = newNode
          break
        }
        current = current.right 
      } else {
        console.log('Node exists')
        break
      }
    }
  }

  getMin() {
    let current = this.root
    let minValue = null
    let counter = 0
    while(current) {
      minValue = current.value
      counter +=1
      current = current.left
    }
    return {
      minValue,
      counter
    }
  }

  getMax() {
    let current = this.root
    let maxValue = null
    let counter = 0
    while(current) {
      maxValue = current.value
      current = current.right
      counter +=1
    }
    return {
      maxValue,
      counter
    }
  }

  breathFirstSearch() {
    let bstQueue = new Queue()
    let current = this.root
    bstQueue.enqueue(current)

    while(bstQueue.getLength() > 0) {
      let node = bstQueue.dequeue()
      console.log('node', node.value)
      if(node.left) {
        bstQueue.enqueue(node.left)
      }
      if(node.right) {
        bstQueue.enqueue(node.right)
      }
    }
  }

  minDiff() {
    const bstQueue = new Queue()
    bstQueue.enqueue(this.root)
    let min = 0
    let leftMin = 0
    let rightMin = 0
    while(bstQueue.getLength() > 0) {
      const current = bstQueue.dequeue()
      console.log('current', current.value)
      if(current.left) {
        bstQueue.enqueue(current.left)
        leftMin = current.value - current.left.value
      }
      if(current.right) {
        bstQueue.enqueue(current.right)
        rightMin =  current.right.value - current.value

      }
      min = Math.min(leftMin, rightMin)
    }
    return min
  }

  depthFirstSearch(data, traverse) {
    let node = this.root
    // left, root, right
    // flat tree in sequence it is created
    function inOrder(node, data) {
      if(node) {
        inOrder(node.left, data)
        console.log(node.value)
        inOrder(node.right, data)
      }
    }
    // root, left, right
    // If you need to explore root before leaf
    function preOrder(node, data) {
      if(node) {
        console.log(node.value)
        preOrder(node.left, data)
        preOrder(node.right, data)
      }
    }
    // left, right, root
    // If you need to explore leaf before any root
    function postOrder(node, data) {
      if(node) {
        postOrder(node.left, data)
        postOrder(node.right, data)
        console.log(node.value)
      }
    }

    console.log('traverse', traverse)

    switch(traverse) {
      case 'inOrder': {
        inOrder(node, data)
        break
      }
      case 'preOrder': {
        preOrder(node, data)
        break
      }
      case 'postOrder': {
        postOrder(node, data)
        break
      }
      default: {
        break
      }
    }
  }

}
//     8
//   3    10
// 1  6     14

const myBST = new BST()
// myBST.insert(8)
// myBST.insert(3)
// myBST.insert(10)
// myBST.insert(1)
// myBST.insert(6)
// myBST.insert(14)

myBST.insert(4)
myBST.insert(2)
myBST.insert(6)
myBST.insert(1)
myBST.insert(3)

console.log('myBST', JSON.stringify(myBST, null, 1))
// console.log('getMin', myBST.getMin())
// console.log('getMax', myBST.getMax())

myBST.breathFirstSearch()
console.log('InOrder-------------------')
myBST.depthFirstSearch(null, 'inOrder')
console.log('PostOrder-----------------')
myBST.depthFirstSearch(null, 'postOrder')
console.log('PreOrder------------------')
myBST.depthFirstSearch(null, 'preOrder')
console.log('getMin--------------------')
console.log(myBST.minDiff())