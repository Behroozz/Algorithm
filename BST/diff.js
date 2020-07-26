// Given a Binary Search Tree (BST) with the root node root, return the minimum difference between 
// the values of any two different nodes in the tree.

// Example :

// Input: root = [4,2,6,1,3,null,null]
// Output: 1
// Explanation:
// Note that root is a TreeNode object, not an array.

// The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

//           4
//         /   \
//       2      6
//      / \    
//     1   3  

// while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.

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
console.log(myBST.minDiff())