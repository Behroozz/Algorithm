// Given an array of integers nums and an integer target,
// return indices of the all possiblities that add up to target

function subsetSumBT(nums, target) {
  let result = [];
  function helper(newTarget, currentIndex, indexes) {
    // if target is reached return the response
    if (newTarget === 0) {
      result.push(Array.from(indexes).sort());
      // else only if we not out of bound
    } else if (currentIndex < nums.length) {
      if (nums[currentIndex] > newTarget) {
        // if number is bigger than target ignore it
        helper(newTarget, currentIndex + 1, indexes);
      } else {
        // if number is not included
        helper(newTarget, currentIndex + 1, indexes);
        // to include current index
        indexes.add(currentIndex);
        // if number is included
        helper(newTarget - nums[currentIndex], currentIndex + 1, indexes);
        // to exclude current index
        indexes.delete(currentIndex);
      }
    }
  }
  helper(target, 0, new Set());
  return result;
}

module.exports = {
  subsetSumBT,
};
