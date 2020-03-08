//https://www.youtube.com/watch?v=kYqMC3dXC0Q
function floodFilling(i, j, color, newColor, matrix, visited) {
  const h = matrix.length
  const w = matrix[0].length

  if(i < 0 || i >=w) {
    return
  }

  if(j < 0 || j>h) {
    return
  }

  if(matrix[i][j] !== color)
    return

  matrix[i][j] =  newColor
  visited.push([i,j])
  
  const neighbors = getNeighbor(i,j)
  for(neighbor of neighbors) {
    if(!visited.includes(neighbor)) {
      floodFilling(neighbor[0], neighbor[1], color, newColor, matrix, visited)
    }
  }
}

function flood(i, j, color, newColor, matrix) {
  const visited = []
  floodFilling(i, j, color, newColor, matrix, visited)
  return matrix
}

function getNeighbor(i, j) {
  return[
    [ i, j-1 ],
    [ i-1, j-1 ],
    [ i+1, j ],
    [ i, j+1 ],
    [ i+1, j+1 ],
    [ i+1, j-1 ],
    [ i-1, j+1 ],
  ]
}

const myMatrix = 
[[1,1,1,1],
 [1,2,2,1],
 [1,2,2,1],
 [2,2,2,2]]

const newMatrix = flood(1,1, 2,3, myMatrix)
console.log('newMatrix', newMatrix)