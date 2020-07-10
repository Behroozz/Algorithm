// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

const board = 
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

const word =  'ABCCED'
//const word =  'SEE'
// const word = "SEL"



function exist(board, word) {

  for(let row=0; row< board.length; row++) {
    for(let col=0; col< board[0].length; col++) {
      if(backtrackBoard(board, word, row, col)) return true
    }
  }
  return false
}

const isOutOfBound = (board, row, col) => row < 0 || row >= board.length || col < 0 || col >= board[0].length;


function backtrackBoard(board, word, row, col) {
  if(!word.length) return true
  if (isOutOfBound(board, row, col) || board[row][col] !== word[0]) return false

  // const currChar = board[row][col]
  const newWord = word.substr(1)

  const result = backtrackBoard(board, newWord, row, col + 1) ||
    backtrackBoard(board, newWord, row + 1, col) ||
    backtrackBoard(board, newWord, row, col - 1) ||
    backtrackBoard(board, newWord, row - 1, col)

  // board[row][col] = currChar
  
  return result
}


const result = exist(board, word)
console.log('result', result)