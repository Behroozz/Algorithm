// https://leetcode.com/problems/merge-sorted-array/
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// let nums1 = [1,2,3,0,0,0], m = 3
// let nums2 = [2,5,6],       n = 3

let nums1 = [3,0,0,0], m = 3
let nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

// TODO NOT COMPLETED

function merge(nums1, m, nums2, n) {
  let i = 0
  let j = 0
  //  while(i < nums1.length) {
     if(nums1[i] > nums2[j]) {
      nums1.slice(0, i).push(nums2[j])
       console.log('nums1.slice(0, i).push(nums2[j])', nums1 )
      //  nums1 = nums1.slice(0, i).push(nums2[j]).join(nums1.slice(j+1))
      //  console.log('nums1', nums1)
     } else {
      i++
      j++
     }
//   }
}

merge(nums1, m, nums2, n)
