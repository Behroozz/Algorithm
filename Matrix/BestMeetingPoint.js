// https://www.youtube.com/watch?v=6U0mIJjLzHw
// Best Meeting Point
// Given an m x n binary grid grid where each 1 marks the home of one friend, return the minimal total travel distance.

// The total travel distance is the sum of the distances between the houses of the friends and the meeting point.

// The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.

// Example 1:

// Input: grid = [[1,0,0,0,1],[0,0,0,0,0],[0,0,1,0,0]]
// Output: 6
// Explanation: Given three friends living at (0,0), (0,4), and (2,2).
// The point (0,2) is an ideal meeting point, as the total travel distance of 2 + 2 + 2 = 6 is minimal.
// So return 6.
// Example 2:

// Input: grid = [[1,1]]
// Output: 1

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// grid[i][j] is either 0 or 1.
// There will be at least two friends in the grid.

const flatenFriendsCoordinates = (grid) => {
  const friends = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      grid[row][col] && friends.push([row, col]);
    }
  }
  //[ [ 0, 0 ], [ 0, 4 ], [ 2, 2 ] ]
  return friends;
};

const getMedianCoordinates = (friends) => {
  const cols = friends.map((coords) => coords[1]).sort((x, y) => x - y); // [ 0, 2, 4 ]
  const rows = friends.map((coords) => coords[0]).sort((x, y) => x - y); // [ 0, 0, 2 ]

  const mid = Math.floor(friends.length / 2);
  return [rows[mid], cols[mid]]; //[ 0, 2 ]
};

const getTotalTravel = (friends, [midRow, midCol]) => {
  return friends.reduce((distance, [curRow, curCol]) => {
    return (distance += Math.abs(midRow - curRow) + Math.abs(midCol - curCol));
  }, 0);
};

const bestMeetingPoint = (grid) => {
  const friends = flatenFriendsCoordinates(grid);
  const midCoordinates = getMedianCoordinates(friends);
  const totalDistance = getTotalTravel(friends, midCoordinates);

  console.log(totalDistance);
};

const grid = [
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

bestMeetingPoint(grid);
