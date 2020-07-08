// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


let nums = [2, 7, 11, 15]
let target = 9

function twoSum(nums, target) {
  let numMap = new Map()
  for(let i = 0; i < nums.length; i++) {
    if(numMap.has(Math.abs(target - nums[i]))) {
     return [nums[i], target - nums[i]]
    } else {
      numMap.set(nums[i], i)
    }
  }
  console.log('numMap', numMap)
}

const result = twoSum(nums, target)
console.log('result', result)