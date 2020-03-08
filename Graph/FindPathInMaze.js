// Breath First Search
// Path 0 , Block 1, We know start and end
var matrix = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0]
]

let start = [4,0]
let end = [3,4]

function findWay(position, end) {
  let queue = []

  matrix[position[0]][position[1]] = 1
  queue.push([position])
  console.log(queue)

  while(queue.length > 0) {
    let path = queue.shift() // store the path
    let pos = path[path.length -1] // last position of the path
    let direction = [
      [pos[0] + 1,pos[1]],
      [pos[0], pos[1] + 1],
      [pos[0] - 1, pos[1]],
      [pos[0], pos[1] - 1]
    ]

    for(let i=0; i<direction.length; i++) {      
      if(direction[i][0] === end[0] && direction[i][1] ===end[1]) {
        return path.concat([end])
      }

      if(direction[i][0] < 0 || direction[i][0] >= matrix[0].length ||
        direction[i][1] < 0 || direction[i][1] >= matrix[0].length ||
        matrix[direction[i][0]][direction[i][1]] != 0) {
          continue
      }

      matrix[direction[i][0]][direction[i][1]] = 1
      queue.push(path.concat([direction[i]]))
    }
  }
  

}

let path = findWay(start, end)
console.log('result', path)





