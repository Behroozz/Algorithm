//https://hackernoon.com/the-javascript-developers-guide-to-graphs-and-detecting-cycles-in-them-96f4f619d563
function Queue() {
  this.queue = []
}
Queue.prototype.enqueue = function(data) {
  this.queue.push(data)
}

Queue.prototype.dequeue = function() {
  return this.queue.shift()
}

Queue.prototype.length = function() {
  return this.queue.length
}


function Graph () {
  this.adjList = {}
}

Graph.prototype.addVertext = function(vertext) {
  this.adjList[vertext] = []
}

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.adjList[vertex1].push(vertex2
    )
}

Graph.prototype.DFS = function() {
  const nodes = Object.keys(this.adjList)
  const visited = {}
  for(let i=0; i< nodes.length; i++) {
    const node = nodes[i]
    this._dfsUtil(node, visited)
  }
}

Graph.prototype._dfsUtil = function(vertex, visited) {
  if(!visited[vertex]) {
    visited[vertex] = true
    console.log(vertex, visited)
    const neighbors = this.adjList[vertex]
    for(let i=0; i< neighbors.length; i++) {
      const neighbor = neighbors[i]
        this._dfsUtil(neighbor, visited)
    }
  }
} 

//https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/
Graph.prototype.BFS = function(startingNode) {
  let visited = []
  visited[startingNode] = true
  let myQueue = new Queue()
  myQueue.enqueue(startingNode)

  while(myQueue.length() > 0) {
    let vertex = myQueue.dequeue()
    console.log('BFS vertex', vertex)

    let neighbors = this.adjList[vertex]
    for(let i=0; i< neighbors.length; i++) {
      let currentNode = neighbors[i]
      if(!visited[currentNode]) {
        visited[currentNode] = true
        myQueue.enqueue(currentNode)
      }
    }
  }
}


Graph.prototype.detectCycle = function() {
  const graphNodes = Object.keys(this.adjList)
  const visited = {}
  const recStack = {}
  
  for(let i =0; i< graphNodes.length; i++) {
    const node = graphNodes[i]
    if(this._detectCycleUtil(node, visited, recStack))
      return 'there is a cycle'
  }
  return 'no cycle!'
}

Graph.prototype._detectCycleUtil = function(vertex, visited, recStack) {
  if(!visited[vertex]) {
    visited[vertex] = true
    recStack[vertex]= true
    const nodeNeighbors = this.adjList[vertex]
    for(let i=0; i< nodeNeighbors.length; i++ ) {
      let currentNode = nodeNeighbors[i]
      console.log('parent', vertex, 'Child', currentNode)
      if(!visited[currentNode] && this._detectCycleUtil(currentNode, visited, recStack)) {
        return true
      } else if(recStack[currentNode]) {
        return true
      }
    }
  }
  recStack[vertex] = false
  return false
}

const myGraph = new Graph()
myGraph.addVertext('A')
myGraph.addVertext('B')
myGraph.addVertext('C')
myGraph.addVertext('D')

myGraph.addEdge('A', 'B')
myGraph.addEdge('A', 'C')
myGraph.addEdge('B', 'C')
myGraph.addEdge('C', 'A')
myGraph.addEdge('C', 'D')
myGraph.addEdge('D', 'D')

// console.log(myGraph)
// myGraph.DFS()
// console.log(myGraph.detectCycle())
myGraph.BFS('C')



function Queue() {
 this.queue = {} 
}

Queue.prototype.enqueue = function(item) {
  this.queue.push(item)
}

Queue.prototype.dequeue = function() {
  return this.queue.shift()
}

function Graph() {
  this.adjList = {}
}

Graph.prototype.addVertex = function(node) {
  this.adjList[node] = []
}

Graph.prototype.addEdge = function(v1, v2) {
  this.adjList[v1].push(v2)
} 

Graph.prototype.DFS = function() {
  const nodes = Object.keys(this.adjList)
  let visited = {}
  for(let i =0; i< nodes.length; i++) {
    let node = nodes[i]
    this.utils(node, visited)
  }
}

Graph.prototype.utils = function(node, visited) {
  if(!visited[node]) {
    visited[node] =  true
    let neighbors = this.adjList[node]
    for(let i=0; i < neighbors.length; i++) {
      let negihbor = negihbors[i]
      this.utils(negihbor, visited)
    }
  }
 }