//          [x, y-1]
// [x-1, y]  [x,y]    [x+1, y]
//          [x, y+1]

const rowDirectrion = [0, 1, 0, -1];
const columnDirectrion = [-1, 0, 1, 0];

const isValid = (row, column, visited) => {
  if (
    row < 0 ||
    column < 0 ||
    row >= visited.length ||
    column >= visited[0].length
  ) {
    return false;
  }

  if (visited[row][column]) {
    return false;
  }

  return true;
};

const BFSMatrix = (row, column, grid, visited) => {
  const queue = [];
  queue.push([row, column]);
  visited[row][column] = true;

  while (queue.length !== 0) {
    const curr = queue[0];
    const x = curr[0];
    const y = curr[1];

    console.log(grid[x][y]);

    queue.shift();

    // visited[row][column] = true;

    for (let i = 0; i < 4; i++) {
      const adjx = x + rowDirectrion[i];
      const adjy = y + columnDirectrion[i];

      if (isValid(adjx, adjy, visited)) {
        queue.push([adjx, adjy]);
        visited[adjx][adjy] = true;
      }
    }
  }
};

// Driver Code
let gridBFS = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const visited = Array.from(Array(gridBFS.length), () =>
  Array(gridBFS[0].length).fill(false)
);

const res = BFSMatrix(0, 0, gridBFS, visited);
