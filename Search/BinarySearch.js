// Given a sorted (in ascending order) integer array nums of n elements and a target value, 
// write a function to search target in nums. If target exists, then return its index, otherwise return -1.


// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

const binarySearch= (nums, target) => {
  let pivot
  let right = nums.length -1
  let left = 0

  while(left <= right) {
    pivot = Math.floor(right + left / 2)
    if(nums[pivot] === target) {
      return pivot
    }   
    if(target < nums[pivot]) {
      right = pivot - 1
    } else {
      left = pivot + 1
    }
  }
  return -1
}


const result = binarySearch([-1,0,3,5,9,12], 9)
console.log('result', result)


// function binarySearch(arr, target) {
//   if(arr.length === 0) {
//     return false
//   }

//   let pivotIndex = Math.floor(arr.length / 2)

//   if(target === arr[pivotIndex]) {
//     return true
//   }

//   if(target < arr[pivotIndex]) {
//     arr = arr.slice(0, pivotIndex)
//   } else {
//     arr = arr.slice(pivotIndex+1)
//   }
//   return binarySearch(arr, target)
// }

// const result = binarySearch([1,2,3,4,5,6,7,8], 2)
// console.log(result)
