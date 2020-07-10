// https://github.com/prabod/Graph-Theory-Ford-Fulkerson-Maximum-Flow
function BFS(rGraph, s, t, parent) {
  let visited = []
  let queue = []
  let V = rGraph.length

  // create a visited array and mark all vertixes are not visited
  for(var i=0; i< V; i++) {
    visited[i] = false
  }

  // add source vertex to the queue and set it visited
  queue.push(s)
  visited[s]= true
  parent[s] = -1

  while(queue.length != 0) {
    let u =  queue.shift()
    for(let v =0; v < V; v++) {
      if(visited[v] == false && rGraph[u][v] > 0) {
        queue.push(v)
        parent[v] = u
        visited[v] = true
      }
    }
  }

  // If we reachsonk in BFS starting from source, then return true, else false
  return (visited[t] == true)
}

function fordFulkerson(graph, s, t) {

  // Error handling

  let rGraph = []
  for(let u=0; u< graph.length; u++) {
    let temp = []
    for(let v =0; v< graph.length; v++) {
      temp.push(graph[u][v])
    }
    rGraph.push(temp)
  }

  let parent = []
  let maxFlow = 0
  while(BFS(rGraph, s, t, parent)) {
    console.log('while BFS rGraph', rGraph)
    console.log('while BFS parent', parent)


    let pathFlow = Number.MAX_VALUE
    for(let v = t; v!= s; v = parent[v]) {
      u = parent[v]

      pathFlow = Math.min(pathFlow, rGraph[u][v])
    }

    for(v=t; v !=s; v= parent[v]) {
      u = parent[v]
      rGraph[u][v] -= pathFlow
      rGraph[v][u] += pathFlow
    }

    maxFlow += pathFlow
  }

  return maxFlow
}


let graph = [
   // 0    1   2   3   4   5
    [ 0, 16,  13, 0,  0,  0 ], // 0
    [ 0,  0, 10, 12,  0,  0 ], // 1 from here to ^
    [ 0,  4,  0,  0, 14,  0 ], // 2
    [ 0,  0,  9,  0,  0, 20 ], // 3
    [ 0,  0,  0,  7,  0,  4 ], // 4
    [ 0,  0,  0,  0,  0,  0 ]  // 5
];

console.log("The maximum possible flow is " +
fordFulkerson(graph, 0, 5));




//   [ 0, 16, 13, 0, 0, 0 ],
//   [ 0, 0, 10, 12, 0, 0 ],
//   [ 0, 4, 0, 0, 14, 0 ],
//   [ 0, 0, 9, 0, 0, 20 ],
//   [ 0, 0, 0, 7, 0, 4 ],
//   [ 0, 0, 0, 0, 0, 0 ]

// // BFS parent [ -1, 0, 0, 1, 2, 3 ]
//   [ 0, 4, 13, 0, 0, 0 ],
//   [ 12, 0, 10, 0, 0, 0 ],
//   [ 0, 4, 0, 0, 14, 0 ],
//   [ 0, 12, 9, 0, 0, 8 ],
//   [ 0, 0, 0, 7, 0, 4 ],
//   [ 0, 0, 0, 12, 0, 0 ]
// // BFS parent [ -1, 0, 0, 4, 2, 4 ]

//   [ 0, 4, 9, 0, 0, 0 ],
//   [ 12, 0, 10, 0, 0, 0 ],
//   [ 4, 4, 0, 0, 10, 0 ],
//   [ 0, 12, 9, 0, 0, 8 ],
//   [ 0, 0, 4, 7, 0, 0 ],
//   [ 0, 0, 0, 12, 4, 0 ]
////BFS parent [ -1, 0, 0, 4, 2, 3 ]

















