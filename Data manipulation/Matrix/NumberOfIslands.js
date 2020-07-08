// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is 
// formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// let Input =
// [
//   [1,1,1,1,0],
//   [1,1,0,1,0],
//   [1,1,0,0,0],
//   [0,0,0,0,0]
// ]

// let Input =
// [
//   [1,1],
//   [1,0],
// ]

let Output = 1
// Example 2:

let Input =
[
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,1]
]

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3


const numberOfIslands = (Input) => {
  let number = 0
  let visited = new Array(Input.length).fill(new Array(Input[0].length))
  for(let i=0; i< Input.length; i++) {
    for(let j=0; j< Input[i].length; j++) {
      if(Input[i][j] == 1) {
        number ++
        traverse(i, j, Input, visited, number)
      }
    }
  }
  return number
}

function traverse(i, j, Input, visited, number) {
  if((i || j) < 0) return
  if( i >= Input.length || j >= Input[0].length) return
  if(Input[i][j] == 0) return
  
  console.log(`i: ${i}, j: ${j}`)
  
  if(Input[i] && Input[i][j]) {
    Input[i][j] = 0
    traverse(i, j+1, Input, visited, number)
    traverse(i+1, j, Input, visited, number)
    traverse(i, j-1, Input, visited, number)
    traverse(i-1, j, Input, visited, number)
  } 
}

console.log("#", numberOfIslands(Input))