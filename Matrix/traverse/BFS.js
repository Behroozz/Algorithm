// Breath First Search
// Queue -> FIFO -> shortest path
// create queue and push the first index to stack
// while queie is not empty
// shift the current element
// if it is not visited
// set it is as visited
// for all adj nodes if it is not visited add it to stack
// Time Complexity: O(N * M) , O(V * E)
// Auxiliary Space: O(N * M )
// Good for when solution is close to root
// Need to search part of tree
// Depth of tree vary
// Always find minial path

// Initialize direction vectors
var dRow = [0, 1, 0, -1];
var dCol = [-1, 0, 1, 0];

// Function to check if mat[row][col]
// is unvisited and lies within the
// boundary of the given matrix
const isValid = (row, col, visited) => {
  // If cell is out of bounds
  if (row < 0 || col < 0 || row >= visited.length || col >= visited[0].length)
    return false;

  // If the cell is already visited
  if (visited[row][col]) return false;

  // Otherwise, it can be visited
  return true;
};
const BFSMatrix = (row, column, grid, visited) => {
  let queue = [];
  queue.push([row, column]);
  visited[row][column] = true;

  while (queue.length != 0) {
    let cell = queue[0];
    let x = cell[0];
    let y = cell[1];

    console.log(`${grid[x][y]}   `);

    queue.shift();

    for (let i = 0; i < 4; i++) {
      let adjx = x + dRow[i];
      let adjy = y + dCol[i];

      if (isValid(adjx, adjy, visited)) {
        queue.push([adjx, adjy]);
        visited[adjx][adjy] = true;
      }
    }
  }
};

var gridBFS = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const visitedBFS = Array.from(Array(gridBFS.length), () =>
  Array(gridBFS[0].length).fill(false)
);

console.log("visitedBFS", visitedBFS);
BFSMatrix(0, 0, gridBFS, visitedBFS);

// Input: grid[][] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}, {13, 14, 15, 16}}
// Output: 1 2 5 3 6 9 4 7 10 13 8 11 14 12 15 16
