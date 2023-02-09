// A delivery company wants to build a new service center in a new city. The company knows the positions of all the customers in this city on a 2D-Map and wants to build the new center in a position such that the sum of the euclidean distances to all customers is minimum.

// Given an array positions where positions[i] = [xi, yi] is the position of the ith customer on the map, return the minimum sum of the euclidean distances to all customers.

// In other words, you need to choose the position of the service center [xcentre, ycentre] such that the following formula is minimized:

// Answers within 10-5 of the actual value will be accepted.

// Example 1:

// Input: positions = [[0,1],[1,0],[1,2],[2,1]]
// Output: 4.00000
// Explanation: As shown, you can see that choosing [xcentre, ycentre] = [1, 1] will make the distance to each customer = 1, the sum of all distances is 4 which is the minimum possible we can achieve.
// Example 2:

// Input: positions = [[1,1],[3,3]]
// Output: 2.82843
// Explanation: The minimum possible sum of distances = sqrt(2) + sqrt(2) = 2.82843

// Helper function to calculate the distance between the service center and all clients
const calcDistance = (x, y, clients) => {
  let totalDistance = 0;
  for (const client of clients) {
    totalDistance += Math.sqrt((x - client[0]) ** 2 + (y - client[1]) ** 2);
  }
  return totalDistance;
};

// Main function to find the best position for the service center
const bestPosition = (clients) => {
  let x = 0;
  let y = 0;
  let bestX = x;
  let bestY = y;
  let bestDistance = Infinity;

  // Initialize the current position to the midpoint of the grid
  for (const client of clients) {
    x += client[0];
    y += client[1];
  }
  x /= clients.length;
  y /= clients.length;

  // Iterate through each possible change in position and keep the best solution found so far
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      const distance = calcDistance(x + dx, y + dy, clients);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestX = x + dx;
        bestY = y + dy;
      }
    }
  }

  // Return the best position found
  return [bestX, bestY];
};
