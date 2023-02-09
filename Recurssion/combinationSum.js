// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []

// Constraints:

// 1 <= candidates.length <= 30
// 2 <= candidates[i] <= 40
// All elements of candidates are distinct.
// 1 <= target <= 40

// Define a data structure to represent the solution and initialize it with some default values.

// Define constraints for the problem.

// Define the base case(s) for the recursive function. If the solution satisfies the constraints, add it to the result list. If it doesn't, return without making any further calls.

// Make a choice by adding an element to the current solution, updating the state variables as necessary.

// Call the recursive function with updated parameters.

// Undo the choice made in step 4 by removing the element from the current solution and restoring the state variables.

// Repeat steps 4-6 for all possible choices.

// Return the result list.

// Optimize the solution by checking constraints early, avoiding duplicates and pruning branches of the search tree that are guaranteed to have no solution.

const getCombinationSum = (candidates, target) => {
  const result = [];

  const backtracking = (curr, index, total) => {
    if (total === target) {
      result.push([...curr]);
      return;
    }

    if (total > target || index < 0 || index >= candidates.length) {
      return;
    }

    curr.push(candidates[index]);
    backtracking(curr, index, total + candidates[index]);
    curr.pop();
    backtracking(curr, index + 1, total);
  };

  backtracking([], 0, 0);
  return result;
};

const result = getCombinationSum([2, 3, 6, 7], 7);
console.log("result", result);
