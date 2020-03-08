const boardingCards = [
  {
      Origin: 'S',
      Destination: 'L',
  },
  {
      Origin: 'B',
      Destination: 'G',
  },
  {
      Origin: 'M',
      Destination: 'S',
  },
  {
      Origin: 'G',
      Destination: 'M',
  },
]

function Graph() {
  this.adjList = {}
}

Graph.prototype.addOrigin = function (origin) {
  this.adjList[origin] = []
}

Graph.prototype.addRoute = function (origin, destination) {
  this.adjList[origin].push(destination)
}

Graph.prototype.findRoot = function (boardingCards) {
  let destinationHashMap = {}
  let root
  for (let i = 0; i < boardingCards.length; i++) {
      if (!destinationHashMap[boardingCards[i].Destination]) {
          destinationHashMap[boardingCards[i].Destination] = 1
      }
  }

  for (let j = 0; j < boardingCards.length; j++) {
      if (!destinationHashMap[boardingCards[j].Origin]) {
          root = boardingCards[j]
      }
  }

  const newBoardingCards = [...boardingCards.filter(item => item.Origin === root.Origin), ...boardingCards.filter(item => item.Origin !== root.Origin)];
  this.boardingCards = newBoardingCards
}

Graph.prototype.populateGraph = function () {
  this.boardingCards.forEach(boardingCard => {
      this.addOrigin(boardingCard.Origin)
      this.addRoute(boardingCard.Origin, boardingCard.Destination)
  })
}

Graph.prototype.searchUtils = function (city, visited) {
  if (!visited[city]) {
      visited[city] = true
      console.log('city to visit: ', city)
      const neighbors = this.adjList[city]
      if (neighbors) {
          for (let i = 0; i < neighbors.length; i++) {
              const neighbor = neighbors[i]
              this.searchUtils(neighbor, visited)
          }
      }
  }
}

Graph.prototype.dfs = function () {
  const cities = Object.keys(this.adjList)
  const visited = {}

  for (let i = 0; i < cities.length; i++) {
      const city = cities[i]
      this.searchUtils(city, visited)
  }
}

function transportation(boardingCards) {
  let travelGraph = new Graph()
  travelGraph.findRoot(boardingCards)
  travelGraph.populateGraph(boardingCards)
  travelGraph.dfs()
}

transportation(boardingCards)
