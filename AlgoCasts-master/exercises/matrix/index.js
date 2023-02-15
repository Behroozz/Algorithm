// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//   let matrix = new Array(n).fill([]);
//   let value = 0;

//   function helper(row = 0, column = 0, value = 0, type) {
//     console.log([row, column, type])
//     if (row < 0 || column < 0 || row > n || column > n) {
//       return;
//     }
//     if (matrix[row][column]) {
//       return;
//     }
//     // value = value + 1;
//     value += 1;
//     console.log(value);
//     matrix[row][column] = value;

//     helper(row, column + 1, value, "right");
//     helper(row + 1, column, value, "down");
//     helper(row, column - 1, value, "left");
//     helper(row - 1, column, value, "up");
//   }

//   helper(0, 0, value);
//   return matrix;
// }

function matrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(undefined));
  }
  let value = 1;

  function helper(row = 0, column = 0, direction = "right") {
    if (
      row < 0 ||
      column < 0 ||
      row >= n ||
      column >= n ||
      matrix[row][column] !== undefined
    ) {
      return;
    }

    matrix[row][column] = value;
    value++;

    switch (direction) {
      case "right":
        helper(row, column + 1, "down");
        break;
      case "down":
        helper(row + 1, column, "left");
        break;
      case "left":
        helper(row, column - 1, "up");
        break;
      case "up":
        helper(row - 1, column, "right");
        break;
    }
  }

  helper(0, 0);
  return matrix;
}

console.log(matrix(3)); // This result in [ [ 1, 2,  ], [ 4, 3,  ], [ , ,  ] ]

module.exports = matrix;
