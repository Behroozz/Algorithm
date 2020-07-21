// Given an array of integers and a target sum, determine the sum nearest to but not exceeding the target that can be created. 
// To create the sum, use any element of your array zero or more times.

// TODO complicated
const weight = [1,2]
let target = 4

// result = [2,2,2,2,2] , [2,2,3,3], [3,3,3,1]

function knapsack(arr, target, i) {
  console.log('target', target)
  console.log('i', i)

  if(i > arr.length || target === 0 || !target) {
    return 
  }
  if(arr.length === 0) {
    return arr[0]
  }

  if(arr[i] > target) {
    let rest = arr.slice(0,i).concat(arr.slice(i+1))
    return knapsack(rest, target, i)
  } else {
    const included = arr[i] + knapsack(arr, target-arr[i], i)
    console.log('included', included)
    const excluded = knapsack(arr, target, i+1)
    console.log('excluded', excluded)

      return Math.max(
        included,
        excluded
      )
  }


    // either current is included
    // or current is excluded
}

const result = knapsack(arr, target, 0)
console.log('result', result)


//         i --> 
// j   //       0   1   2   3   4
// |   // 1, 1  0   1    
//     // 1, 2  0   


excluded = arr[i-1][j]
included = profit[i] + arr[i][j - weight[i]]

// i = 0 and j = 1
arr[0-1][j]
profit[0] + arr[0][1 -  1] = 1 + 0

arr[1-1][1] ==> arr[0][1]
profit[1] + arr[1][1-2] ==> 
