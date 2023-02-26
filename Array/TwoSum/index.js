// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to
// target.

const { result } = require("lodash");

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

function twoSum(nums, target) {
  let indexes = [];
  // function helper(newTarget, currentIndex, indexes) {
  //   if (currentIndex > nums.length) {
  //     return;
  //   }
  //   if (newTarget === 0) {
  //     indexes.push(currentIndex);
  //     return indexes;
  //   }
  //   for (let i = currentIndex; i < nums.length; i++) {
  //     if (newTarget - nums[i] >= 0) {
  //       indexes.push(currentIndex);
  //       return helper(newTarget - nums[i], i + 1, indexes);
  //     } else {
  //       return helper(newTarget, i + 1, indexes);
  //     }
  //   }
  // }
  // helper(target, 0, indexes);
  // return indexes;
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(target - nums[i])) {
      return [numMap.get(target - nums[i]), i];
    }
    numMap.set(nums[i], i);
  }
}

twoSum([2, 7, 11, 15], 9);

module.exports = twoSum;
