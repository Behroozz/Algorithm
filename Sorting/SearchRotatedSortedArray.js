// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// https://leetcode.com/problems/search-in-rotated-sorted-array/
// NOT COMPLETE
let smallest = 10000

const search = function(nums, target) {
  let numLen = nums.length

  if(numLen === 0) return -1
  if(numLen === 1 ) return nums[0] === target ? 0 : -1

  rotate_index = findRotateIndex(0, numLen - 1)
  console.log('rotate_index',rotate_index)
}

function findRotateIndex(left, right) {
  if(nums[left] < nums[right]) {
    return 0
  }

  while(left <= right) {
    let pivot = Math.floor((left + right) / 2)
    if(nums[pivot] > nums[pivot + 1]) {
      // 7(P), 6
      return pivot + 1
    } else {
      // 7(P), 8
      if(nums[pivot] < nums[left]) {
        // (Left)10, 11|new Right, 7(P) , 8, 9
        left = pivot + 1
      } else {
        // (Left)5, 6, 7(P) , 8
        right = pivot -1
      }
    }
  }
  return 0
}

function binarySearch(nums, target) {
  let left = 0
  let right = nums.length -1 

  while(left <= right) {
    let pivot = Math.floor((right + left) /2)
    console.log('pivot', pivot)
    console.log('nums[pivot]', nums[pivot])
    if(nums[pivot] === target) {
      return pivot
    } else {
      if(target < nums[pivot]) {
        right = pivot -1 
      } else {
        left = pivot + 1
      }
    }
    return -1
  }
}

console.log(binarySearch([1,2,3,4,6], 2))



let nums = [4,5,6,7,0,1,2], target = 0

// console.log(search(nums, target))


// [4,5,6,7,0,1,2]
// |            |
// i            j

// compare i and j
// if arr[i] > arr[j]
// [2,4,5,6,7,0,1]
// i            j
// [1,2,4,5,6,7,0]
            
// [0,1,2,4,5,6,7]
