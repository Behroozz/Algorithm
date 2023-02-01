const createBoard = (n) => {
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill(0));
  }
  return board;
};

//https://www.youtube.com/watch?v=_RAxPahXCkg
const canPlaceQueen = (row, column, board) => {
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === 1 || board[i][column] === 1) {
      return false;
    }
    for (let j = 0; j < board[0]; j++) {
      if (row - column === i - j || row + column === i + j) {
        if (board[i][j] === 1) {
          return false;
        }
      }
    }
  }
  return true;
};

const solveNQueen = (n) => {
  let board = createBoard(n);

  const traverseBoard = (
    board,
    numberOfQueens = 0,
    boardColumn = 0,
    boardRow = 0
  ) => {
    if (numberOfQueens === 0) {
      return board;
    }

    if (boardColumn > board[0].length || boardRow > board.length) {
      return false;
    }

    for (let row = boardRow; row < board.length; row++) {
      if (boardColumn < board[0].length) {
        if (canPlaceQueen(row, boardColumn, board)) {
          board[row][boardColumn] = 1;
          numberOfQueens -= 1;
          boardColumn = 0;
          continue;
        }
        traverseBoard(board, numberOfQueens, boardColumn + 1, boardRow);
      }
    }
  };
  traverseBoard(board, 4);
  return board;
};

const result = solveNQueen(4);
console.log(result);
