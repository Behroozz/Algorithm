// Design a Tic-tac-toe game that is played between two players on a n x n grid.

// You may assume the following rules:

// A move is guaranteed to be valid and is placed on an empty block.
// Once a winning condition is reached, no more moves is allowed.
// A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
// Example:
// Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.

// TicTacToe toe = new TicTacToe(3);

// toe.move(0, 0, 1); -> Returns 0 (no one wins)
// |X| | |
// | | | |    // Player 1 makes a move at (0, 0).
// | | | |

// toe.move(0, 2, 2); -> Returns 0 (no one wins)
// |X| |O|
// | | | |    // Player 2 makes a move at (0, 2).
// | | | |

// toe.move(2, 2, 1); -> Returns 0 (no one wins)
// |X| |O|
// | | | |    // Player 1 makes a move at (2, 2).
// | | |X|

// toe.move(1, 1, 2); -> Returns 0 (no one wins)
// |X| |O|
// | |O| |    // Player 2 makes a move at (1, 1).
// | | |X|

// toe.move(2, 0, 1); -> Returns 0 (no one wins)
// |X| |O|
// | |O| |    // Player 1 makes a move at (2, 0).
// |X| |X|

// toe.move(1, 0, 2); -> Returns 0 (no one wins)
// |X| |O|
// |O|O| |    // Player 2 makes a move at (1, 0).
// |X| |X|

// toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
// |X| |O|
// |O|O| |    // Player 1 makes a move at (2, 1).
// |X|X|X|
// Follow up:
// Could you do better than O(n2) per move() operation?


class TicTacToe {
  constructor(n) {
    let board = []
    for(let i=0; i< n; i++) {
      board.push([])
      for(let j=0; j<n; j++) {
        board[i].push('empty')
      }
      this.board = board
      this.n = n
      this.numMove = 0
    } 
  }

  move(x, y, value) {
    if(x > this.board.length || y > this.board[0].length || x < 0 || y < 0 ) {
      throw new Error('please provide the expected range')
    }
    this.board[x][y] = value
    this.numMove +=1
  }

  print() {
    for(let i=0; i< this.board.length; i++) {
      console.log('\n')
      let row = ''
      for(let j=0; j<this.board[i].length; j++) {
        row += this.board[i][j] + "  "
      }
      console.log(row)
    }
  }

  win() {
    console.log('this.numMove', this.numMove)
    let diag1 = []
    let diag2 = []
    let k = this.n -1 
    for(let i=0; i< this.board.length; i++) {
      if(this.board[i].every(row => row[i] === 'X')) return 'X'
      if(this.board[i].every(row => row[i] === 'O')) return 'O'

      if(this.board.every(col => col[i] === 'X')) return 'X'
      if(this.board.every(col => col[i] === 'O')) return 'O'
      diag1.push(this.board[i][i])
      diag2.push(this.board[i][k])
      k--
      // for(let j=0; j< this.board[i].length; j++) {
      //   if(i === j) {
      //     diag1.push(this.board[i][j])
      //   }
      //   if(i+j === this.n-1) {
      //     diag2.push(this.board[i][j])
      //   }
      // }
    }
    if(new Set(diag1).size === 1) {
      return diag1[0]
    }
    if(new Set(diag2).size === 1) {
      return diag2[0]
    }
    return this.numMove < this.n * this.n ? 'pending': 'equal'
  }
}

const myTicTacToe = new TicTacToe(3)
myTicTacToe.move(0 , 0, 'O')
myTicTacToe.move(0 , 1, 'X')
myTicTacToe.move(0 , 2, 'X')
myTicTacToe.move(0 , 2, 'X')
// myTicTacToe.move(1 , 1, 'O')
myTicTacToe.move(2 , 2, 'O')

myTicTacToe.print()
const result = myTicTacToe.win()
console.log('result', result)