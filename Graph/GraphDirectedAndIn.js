// https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/
// 1 -> [2, 3]
// 2 -> [3, 4]
// 3 -> []
// 4 -> [3]

// const adjacencyList = new Map();
// adjacencyList.set(1, new Set([2,3]));
// adjacencyList.set(2, new Set([3,4]));
// adjacencyList.set(3, new Set());
// adjacencyList.set(4, new Set([3]));

class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(value) {
    this.queue.push(value)
  }

  dequeue() {
    return this.queue.shift()
  }

  isEmpty() {
    return this.queue.length === 0
  }
}

class Stack {
  constructor() {
    this.stack = [] 
  }

  push(value) {
    this.stack.push(value)
  }

  pop() {
    return this.stack.pop()
  }

  isEmpty() {
    return this.stack.length === 0
  }
}
class Node {
  constructor(value) {
    this.value = value
    this.adjacencyList = []
  }

  // O(1)
  addAdjacent(node) {
    this.adjacencyList.push(node)
  }

  removeAdjacent(node) {
    const index = this.adjacencyList.indexOf(node)
    if(index > -1) {
      this.adjacencyList.splice(index, 1)
      return node
    }
    return -1
  }

  getAdjacencyList() {
    return this.adjacencyList
  }

  isAdjacent(node) {
    return this.getAdjacencyList().indexOf(node) > -1
  }
}

// let node1 = new Node('A')
// node1.addAdjacent('B')
// node1.addAdjacent('C')
// node1.addAdjacent('D')
// console.log('node1', node1)
// node1.removeAdjacent('C')
// console.log('node1', node1)
// console.log(node1.isAdjacent('B'))

let UNDIRECTED = Symbol('undirected')
let DIRECTED = Symbol('directed')
class Graph {
  constructor(edgeDirection = DIRECTED) {
    this.nodes = new Map()
    this.edgeDirection = edgeDirection
  }

  // O(1)
  addVertex(value) {
    if(this.nodes.has(value)) {
      return this.nodes.get(value)
    } else {
      const vertex = new Node(value)
      this.nodes.set(value, vertex)
      return vertex
    }
  }

  // O(E + V)
  removeVertex(value) {
    const current = this.nodes.get(value)
    if(current) {
      for(const node of this.nodes.values()) {
        node.removeAdjacent(current)
      }
    }
    return this.nodes.delete(value)
  }

  // O(1)
  addEdge(source, destination) {
    const sourceNode = this.addVertex(source)
    const destinationNode = this.addVertex(destination)

    sourceNode.addAdjacent(destinationNode)

    if(this.edgeDirection === UNDIRECTED) {
      destinationNode.addAdjacent(sourceNode)
    }

    return [ sourceNode, destinationNode ]
  }

  // O(E)
  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source)
    const destinationNode = this.nodes.get(destination)

    sourceNode.removeAdjacent(destinationNode)

    if(this.edgeDirection === UNDIRECTED) {
      destinationNode.removeAdjacent(sourceNode)  
    }

    const z = new Queue()

    return [
      sourceNode, destinationNode
    ]
  }

  bfs(first) {
    const visited = new Map()
    const visitList = new Queue()

    visitList.enqueue(first)

    while(!visitList.isEmpty()) {
      const node = visitList.dequeue()
      if(node && !visited.has(node)) {
        console.log('node bfs: ', node)
        visited.set(node)
        node.getAdjacencyList().forEach(adj => visitList.enqueue(adj))
      }
    }
  }

  dfs(first) {
    const visited = new Map()
    const visitList = new Stack()

    visitList.push(first)

    while(!visitList.isEmpty()) {
      const node = visitList.pop()
      if(node && !visited.has(node)) {
        console.log('node dfs: ', node)
        visited.set(node)
        node.getAdjacencyList().forEach(adj => visitList.push(adj))
      }
    }
  }
}

const graph = new Graph(UNDIRECTED)

const [ source, destination ] = graph.addEdge(1,2)
graph.addEdge(1,3)
graph.addEdge(1,4)
graph.addEdge(5,2)
graph.addEdge(6,3)
graph.addEdge(7,3)
graph.addEdge(8,4)
graph.addEdge(9,5)
graph.addEdge(10,6)

// console.log('source', source)
// console.log('destination', destination)
graph.bfs(source)
console.log('---------------------')
graph.dfs(source)






