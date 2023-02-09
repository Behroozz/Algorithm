// Sort Colors
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

const sortColors = function (nums) {
  const QuickSort = (arr) => {
    if (arr.length < 2) {
      return arr;
    }

    let pivot = arr[0];
    let lesser = [];
    let greater = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        lesser.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }

    return [...QuickSort(lesser), pivot, ...QuickSort(greater)];
  };
  return QuickSort(nums);
};

const result = sortColors([2, 0, 2, 1, 1, 0]);
console.log("result", result);
