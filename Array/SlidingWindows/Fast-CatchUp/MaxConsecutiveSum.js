// This is very similar to the first kind, except, instead of incrementing 
// the slow pointer up, you simply move it up the fast pointer’s location and 
// then keep moving the fast pointer up. It sort of “jumps” to the index of 
// the fast pointer when a certain condition is met.
// This is apparent in the Max Consecutive Sum problem. Here you’re given a 
// list of integers, positive and negative, and you are looking for a 
// consecutive sequence that sums to the largest amount. Key insight: 
// The slow pointer “jumps” to the fast pointer’s index when the current 
// sum ends up being negative. More on how this works later.
// For example, in the array: [1, 2, 3, -7, 7, 2, -12, 6] the result would be: 9 (7 + 2)


function maxConsecutiveSum(array) {
  let maxSum = Number.MIN_VALUE
  let right = 0
  let temp = []
  while(right < array.length ) {
    let current = array[right]
    let currentSum = maxSum + current
    if(currentSum > 0 && currentSum > maxSum) {
      maxSum = currentSum
      temp.push(maxSum)
    } else {
      maxSum = 0
    }
    right +=1
  }
  console.log(temp)
  return Math.max(...temp)
}

const result = maxConsecutiveSum([1, 2, 3, -7, 7, 2, -12, 6])
// const result = maxConsecutiveSum([1, 2, 3, -7, 30, -4, 3, 3, 3])
// const result = maxConsecutiveSum([1, 2, 3, -7, 30, -4, 3, 3, 3])

console.log('result', result)
