// Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum.

// Example:

// Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
// Output: True
// There is a subset (4, 5) with sum 9.

// Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 30
// Output: False
// There is no subset that add up to 30.

// [1, 5, 2], 3;

// fn([1, 5, 2], 3)

//     1 + fn([5, 2], 3 - 1)
//         5 + fn([2], 2 - 5) ?
//         2 + fn([], 2 - 2) ?

//     5 + fn([2], 3 -  5) ?

//     2 + fn([], 3 - 2)

// const result = fn([1, 5, 2], 3);
// console.log("result", result);

// Brute Force
// const getPowerSet = (list, n) => {
//   let obj = {};
//   let setSize = Math.pow(2, list.length);
//   console.log(setSize);

//   for (let counter = 0; counter < setSize; counter++) {
//     let res = [];
//     for (let j = 0; j < list.length; j++) {
//       if ((counter & (1 << j)) === 0) {
//         res.push(list[j]);
//       }
//     }
//     if (res.length > 0) {
//       const total = res.reduce((acc, curr) => {
//         acc += curr;
//         return acc;
//       });
//       console.log("total", total);
//       obj[total] = res;
//     }
//   }
//   return obj[n];
// };

// const res = getPowerSet([1, 5, 2], 3);
// console.log(res);

// const result = fn([1, 5, 2], 3);
// console.log("result", result);

//https://www.youtube.com/watch?v=rYkfBRtMJr8
// const subSetSum = (list, total) => {
//   const recursive = (list, index = 0, sum = 0, bucket = []) => {
//     if (sum === total) {
//       result.push(bucket);
//       return;
//     }

//     if (index === list.length) {
//       return;
//     }

//     if (sum + list[index] <= total) {
//       recursive(list, index + 1, sum + list[index], bucket.concat(list[index]));
//     }
//     recursive(list, index + 1, sum, bucket);
//   };

//   let result = [];
//   recursive(list);
//   return result;
// };

// const res = subSetSum([3, 1, 2], 3);
// console.log("res", res);

const isSubsetSum = (set, index, targetSum) => {
  if (targetSum === 0) {
    return true;
  }

  if (index === 0) {
    return -1;
  }

  if (store[index][targetSum] != -1) {
    return store[index][targetSum];
  }

  // optimiazation
  if (set[index - 1] > targetSum) {
    store[index][targetSum] = isSubsetSum(set, index - 1, targetSum);
    return store[index][targetSum];
  }

  const inclusion = isSubsetSum(set, index - 1, targetSum - set[index - 1]);
  const exclusion = isSubsetSum(set, index - 1, targetSum);
  store[index][targetSum] = inclusion || exclusion;

  return store[index][targetSum];
};

const list = [2, 1];
const n = list.length;
const target = 2;
let store = new Array(n + 1).fill(-1).map(() => new Array(target + 1).fill(-1));

const result = isSubsetSum(list, n - 1, target);
console.log(result);
console.log("store", store);

// isSubsetSum([2, 1, 3], 2, 3)

//   isSubsetSum([2, 1], 1, 0) --> true
//   isSubsetSum([2, 1], 2, 3)
//       isSubsetSum([2], 1, 2)
//           isSubsetSum([], 1, 0) --> true
//       isSubsetSum([2], 1, 3)
//           isSubsetSum([], 1, 1) --> false
