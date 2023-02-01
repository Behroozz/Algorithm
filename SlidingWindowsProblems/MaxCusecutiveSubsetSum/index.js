const assert = require("assert");

// slow and fast pointer
const maxConsecutiveSum = (list, distance) => {
  let fastPointer = 0;
  let slowPointer = 0;
  let interationSum = 0;
  let maxSum = 0;

  while (fastPointer + distance <= list.length) {
    if (slowPointer - fastPointer === distance) {
      fastPointer += 1;
      slowPointer = fastPointer;
      if (maxSum < interationSum) {
        maxSum = interationSum;
      }
      interationSum = 0;
    } else {
      interationSum += list[slowPointer];
      slowPointer += 1;
    }
  }
  return maxSum;
};

assert(maxConsecutiveSum([], 3) === 0);
assert(maxConsecutiveSum([4, 2, 1, 6, 2], 4) === 13);
assert(maxConsecutiveSum([1, 1, 1], 3) === 3);
assert(maxConsecutiveSum([4, 5, 7, 9, 20, 4, 9, 3, 11, 4, 3], 3) === 36);
assert(maxConsecutiveSum([7, 9, 20, 4, 9, 3, 11, 4, 3], 2) === 29);
