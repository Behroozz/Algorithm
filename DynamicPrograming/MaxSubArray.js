// We define subsequence as any subset of an array. We define a subarray as a contiguous subsequence in an array.

let arr = [2,3,-9, 6]

// let maxSubArray = 2 + 3 + -4 +5 + 10 = 16
// let maxSubsequence = 2 + 3 + 5 + 10 = 20


function maxSubArray(arr) {
  let sum = 0
  let partialSum = 0

  for(let item of arr) {
    console.log('item', item)
    partialSum +=item
    sum = Math.max(sum, partialSum)
    if(partialSum < 0) {
      partialSum = 0
    } 
  }
  return sum
}




const result = maxSubArray(arr)
console.log('result', result)