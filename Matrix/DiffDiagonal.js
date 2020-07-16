let matrix = [
  [6,2,6],
  [1,6,3],
  [6,2,6]
]

// let matrix = [
//   [(0,0),(0,1),(0,2)],
//   [(1,0),(1,1),(1,2)],
//   [(2,0),(2,1),(2,2)]
// ]

function returnMainDiagonals(matrix) {
  let diag1 = []
  let diag2 = []
  for(let i=0; i< matrix.length; i++) {
    for(let j=0; j<matrix[i].length; j++) {
      console.log(matrix[i][j])
      if(i === j) {
        diag1.push(matrix[i][j])
      }
      if(i+j === matrix.length - 1 ) {
        diag2.push(matrix[i][j])
      }
    }
  }
  return {
    diag1,
    diag2
  }
}

const result = returnMainDiagonals(matrix) 
console.log('result', result)


