class Node {
  constructor(name) {
    this.name = name
    this.adjList = []
  }

  addAdj(node, value) {
    this.adjList.push({
      node,
      value
    })
  }

  removeAdj(node) {
    // const index = this.adjList.indexOf(node) 
    // if(index > -1) {
    //   this.adjList.splice(index, 1)
    //   return node
    // }
    // return -1
  }

  getAdjList() {
    return this.adjList
  }

  isAdj(node) {
    // return this.getAdjList().indexOf(node) > -1
  }
}

const UNDIRECTED = Symbol('undirected')
const DIRECTED = Symbol('directed')

class Graph {
  constructor(edgeDirection = UNDIRECTED) {
    this.nodes = new Map()
    this.edgeDirection = edgeDirection
  }

  addVertex(name) {
    if(!this.nodes.has(name)) {
      const newNode = new Node(name)
      this.nodes.set(name, newNode)
    }
    return this.nodes.get(name)
  }
  
  removeVertex(name) {
    const current = this.nodes.get(name)
    if(current) {
      for(const node of this.nodes.values()) {
        node.removeAdj(current)
      }
      this.nodes.delete(name)
    }
  }

  addEdge(source, destination, value) {
    const sourceNode = this.addVertex(source)
    const destinationNode = this.addVertex(destination)    

    sourceNode.addAdj(destinationNode, value)

    if(this.edgeDirection ===  UNDIRECTED) {
      destinationNode.addAdj(sourceNode, value)
    }

    return [ sourceNode, destinationNode ]
  }

  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source)
    const destinationNode = this.nodes.get(destination)    

    sourceNode.removeAdj(destinationNode)

    if(this.edgeDirection ===  UNDIRECTED) {
      destinationNode.removeAdj(sourceNode)
    }

    return [ sourceNode, destinationNode ]
  }

  printGraph(graph) {
    for(const node of this.nodes.values()) {
      console.log(node)
    }
  }
}


const newGraph =  new Graph()

newGraph.addEdge('Start','A', 5)
newGraph.addEdge('Start','B', 2)
newGraph.addEdge('A','C', 6)
newGraph.addEdge('A','D', 2)
newGraph.addEdge('B','A', 8)
newGraph.addEdge('B','D', 7)
newGraph.addEdge('C','D', 6)
newGraph.addEdge('C','finish', 1)
newGraph.addEdge('D','finish', 1)

// newGraph.printGraph()

function setInitialCosts(graph) {
  let costs = new Map()
  for(let node of graph.nodes.values()) {
    if(node.name !== 'Start') {
      costs.set(node.name, Infinity)
    } else {
      costs.set(node.name,0)
    }
  }
  return costs
}

function setInitialParent(graph) {
  let parent = new Map()
  for(let node of graph.nodes.values()) {
    if(node.name !== 'Start') {
      parent.set(node.name, 'Start')
    } else {
      parent.set('Start', null)
    }
  }
  return parent
}

function lowestCostNode(costs, processed) {
  let lowest = null
  for(const key of costs.keys()) {
    if(lowest === null  || costs.get(key) < costs.get(lowest)) {
      if(!processed.includes(key)) {
        lowest = key
      }
    }
  }
  return lowest
}

/** 
 * 1) Create set of initial costs:
 * {
 *  start: 0, A; Infinity, B: Infinity, finish: Infinity
 * }
 * 
 * 2) Create set of parents
 * {
 *  start: null, A: Start, B: Start, finish: Start
 * }
 * 
 * 3) Create List of empty processed
 * 
 * 4) get Lowest cost node ==> start
 * 
 * 5) While node exists 
 * 5-1) get the cost of node, 
 * 5-2) get children of node
 * for Each child
 * newCost = cost + child.value
 * replace the cost if less than existing cost
 *  
*/
const dijkstra = (graph) => {
  let costs = setInitialCosts(graph) 
  let parent = setInitialParent(graph)
  // console.log('costs', costs)
  // console.log('parent', parent)
  let processed = []
  let node = lowestCostNode(costs, processed) 
  // console.log('node', node)

  while(node) {
    let cost = costs.get(node)
    let children = graph.nodes.get(node).getAdjList()
    // console.log('cost', cost)
    // console.log('children', children)
    // console.log('processed', processed)
    // console.log('costs', costs)
    // console.log('parent', parent)
  

    for(const child of children) {
      // console.log('child', child.node.name)
      if(!processed.includes(child.node.name)) {
        let newCost = cost + child.value
        if(!costs.get(child.node.name) || costs.get(child.node.name) > newCost) {
          costs.set(child.node.name, newCost)
          parent.set(child.node.name, node)
        }
      }
    }
    processed.push(node)
    node = lowestCostNode(costs, processed)
    console.log('node', node)
  }
  console.log('processed', processed)
  console.log('costs', costs)
  console.log('parent', parent)

}

dijkstra(newGraph)