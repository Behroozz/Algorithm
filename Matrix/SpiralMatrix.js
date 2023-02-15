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

const matrixSample = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]

function spiralOrder(matrix) {
  let result = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      traverseSpiral(row, col, matrix, result);
    }
  }
  return result;
}

function traverseSpiral(row, col, matrix, result) {
  if (row < 0 || row > matrix.length) return;
  if (col < 0 || col > matrix[0].length) return;

  if (matrix[row] && matrix[row][col]) {
    if (matrix[row][col] === 0) return;

    result.push(matrix[row][col]);
    matrix[row][col] = 0;
    traverseSpiral(row, col + 1, matrix, result);
    traverseSpiral(row + 1, col, matrix, result);
    traverseSpiral(row, col - 1, matrix, result);
    traverseSpiral(row - 1, col, matrix, result);
  }
}

const result = spiralOrder(matrixSample);
console.log("result", result);
