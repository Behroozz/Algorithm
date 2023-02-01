// https://www.geeksforgeeks.org/depth-first-traversal-dfs-on-a-2d-array/
// Input: grid[][] = {{-1, 2, 3}, {0, 9, 8}, {1, 0, 1}}
// Output: -1 2 3 8 1 0 9 0 1
// Explanation: The sequence of traversal of matrix elements using DFS is -1, 2, 3, 8, 1, 0, 9, 0, 1.

// [       ]  1[x,y-1]   [      ]
// 2[x-1, y]    x,y     4[x+1, y]
// [       ]  3[x,y+1]   [      ]

// up, left, down, right

// (-1,0) (0, 1), (1, 0), (0, -1)
// (x, y) is a cell whose adjacent cells
// (x – 1, y), (x, y + 1), (x + 1, y), (x, y – 1)
// need to be traversed, then it can be done using the direction vectors
// (-1, 0), (0, 1), (1, 0), (0, -1) in the up, left, down and right order.
// Javascript program of the above approach

// Depth first seach

// Stack -> LIFO -> Maze or scheduling, path -> Recursion
// create stack and push the first index to stack
// while stack is not empty
// pop the current element
// if it is not visited
// set it is as visited
// for all adj nodes if it is not visited add it to stack
// Time Complexity: O(N * M) , O(V * E)
// Auxiliary Space: O(N * M )
// Good for when solution is far from root and need to travese all the graph
// it exesutavily search for all solutions
// More memory efficient

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

// Function to perform DFS
// Traversal on the matrix grid[]
const DFSMatrix = (row, col, grid, visited) => {
  // Initialize a stack of pairs and
  // push the starting cell into it
  let stack = [];
  stack.push([row, col]);

  // Iterate until the
  // stack is not empty
  while (stack.length != 0) {
    // Pop the top pair
    let curr = stack[stack.length - 1];
    stack.pop();
    let row = curr[0];
    let col = curr[1];

    // Check if the current popped
    // cell is a valid cell or not
    if (isValid(row, col, visited)) {
      // Mark the current
      // cell as visited
      visited[row][col] = true;

      // the current top cell
      console.log(grid[row][col] + " ");

      // Push all the adjacent cells
      for (var i = 0; i < 4; i++) {
        let adjx = row + dRow[i];
        let adjy = col + dCol[i];
        stack.push([adjx, adjy]);
      }
    }
  }
};

// Driver Code
var gridDFS = [
  [-1, 2, 3],
  [0, 9, 8],
  [1, 0, 1],
];
// Stores whether the current
// cell is visited or not
var visitedDFS = Array.from(Array(gridDFS.length), () =>
  Array(gridDFS[0].length).fill(false)
);
// Function call
DFSMatrix(0, 0, gridDFS, visitedDFS);
