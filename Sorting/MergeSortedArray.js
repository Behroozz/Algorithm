// https://leetcode.com/problems/merge-sorted-array/
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// let nums1 = [1,2,3,0,0,0], m = 3
// let nums2 = [2,5,6],       n = 3

let nums1 = [3, 0, 0, 0],
  m = 3;
let nums2 = [2, 5, 6],
  n = 3;

// Output: [1,2,2,3,5,6]

// TODO NOT COMPLETED

// function merge(nums1, m, nums2, n) {
//   let i = 0
//   let j = 0
//   //  while(i < nums1.length) {
//      if(nums1[i] > nums2[j]) {
//       nums1.slice(0, i).push(nums2[j])
//        console.log('nums1.slice(0, i).push(nums2[j])', nums1 )
//       //  nums1 = nums1.slice(0, i).push(nums2[j]).join(nums1.slice(j+1))
//       //  console.log('nums1', nums1)
//      } else {
//       i++
//       j++
//      }
// //   }
// }

// merge(nums1, m, nums2, n)

// Output: [1,2,2,3,5,6]

// TODO NOT COMPLETED

function mergeSortedArr(nums1, m, nums2, n) {
  let firstPointer = m - 1;
  let secondPointer = n - 1;
  let mergePointer = m + n - 1;

  while (firstPointer > 0 && secondPointer > 0) {
    if (nums1[firstPointer] <= nums2[secondPointer]) {
      nums1[mergePointer] = nums2[secondPointer];
      secondPointer--;
      mergePointer--;
    } else {
      nums1[mergePointer] = nums1[firstPointer];
      firstPointer--;
      mergePointer--;
    }
  }
  while (firstPointer > 0) {
    nums1[mergePointer] = nums1[firstPointer];
    firstPointer--;
    mergePointer--;
  }

  while (secondPointer > 0) {
    nums2[mergePointer] = nums2[secondPointer];
    secondPointer--;
    mergePointer--;
  }
  return nums1;
}

mergeSortedArr([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
