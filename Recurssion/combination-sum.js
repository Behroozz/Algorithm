// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []

// Constraints:

// 1 <= candidates.length <= 30
// 2 <= candidates[i] <= 40
// All elements of candidates are distinct.
// 1 <= target <= 40

// const combinationSum = (candidates, target) => {
//   let p1 = 0;
//   let p2 = 1;
//   let sum = candidates[p1];
//   let localResult = [];
//   let finalResult = [];
//   let counter = 0;
//   while (p1 < candidates.length) {
//     counter += 1;
//     p2 = p1 + 1;
//     console.log("counter", counter);
//     console.log("---- p1", candidates[p1]);

//     sum = candidates[p1] * counter;

//     for (let i = 0; i < counter; i++) {
//       localResult.push(candidates[p1]);
//     }

//     if (target === sum) {
//       p1 += 1;
//       counter = 0;
//       // we are here with counter
//       console.log("localResult:::", localResult);

//       finalResult.push(localResult);
//       localResult = [];
//     }

//     if (target < sum) {
//       p1 += 1;
//       counter = 0;
//       localResult = [];
//       // no need to account for p2
//       continue;
//     }

//     while (target > sum) {
//       // add to P2
//       if (p2 <= candidates.length) {
//         sum += candidates[p2];
//         console.log("---------------- p2", candidates[p2]);

//         localResult.push(candidates[p2]);
//         if (target === sum) {
//           console.log("sum", sum);
//           console.log("localResult:::::::", localResult);
//           finalResult.push(localResult);
//           break;
//           // we need to add to final result
//         }
//         p2 += 1;
//       } else {
//         // if (target === sum) {
//         //   console.log("localResult:::::::", localResult);

//         //   finalResult.push(localResult);
//         //   // we need to add to final result
//         // }
//         localResult = [];
//         // p1 += 1;
//         // p2 = p1 + 1;
//       }
//     }
//   }

//   // console.log("finalResult", finalResult);
// };

// const combinationSum = (candidates, target) => {
//   const result = [];
//   let index = 0;
//   let tempArray = [];
//   const backtracking = (index, target, tempArray) => {

//     if (target === 0) {
//       result.push([...tempArray]);
//     }
//     if (target < 0) {
//       return;
//     }

//     for (let i = index; i < candidates.length; i++) {
//       tempArray.push(candidates[i]);
//       backtracking(i, target - candidates[i], tempArray);
//       tempArray.pop();
//     }
//   };

//   backtracking(index, target, tempArray);
//   return result;
// };

// const combinationSum = (candidates, target) => {
//   res = [];

//   const backtracking = (index, curr, total) => {
//     if (total === target) {
//       res.push([...curr]);
//       return;
//     }

//     if (index >= candidates.length || total > target) {
//       return;
//     }

//     curr.push(candidates[index]);
//     backtracking(index, curr, total + candidates[index]);
//     curr.pop();
//     backtracking(index + 1, curr, total);
//   };

//   backtracking(0, [], 0);
//   return res;
// };

// const reult = combinationSum([2, 3, 6, 7], 7);
// console.log("reult", reult);

const combinationSum2 = (candidates, target) => {
  const sortedCandidates = candidates.sort();
  res = [];

  const backtracking = (curr, pos, target) => {
    if (target === 0) {
      res.push([...curr]);
      return;
    }

    if (target < 0) {
      return;
    }

    let perv = -1;
    for (let i = pos; i < sortedCandidates.length; i++) {
      // since it is sorted
      if (sortedCandidates[i] === perv) {
        continue;
      }
      curr.push(sortedCandidates[i]);
      backtracking(curr, i + 1, target - sortedCandidates[i]);
      prev = curr[i];
      curr.pop();
    }
  };

  backtracking([], 0, 8);
  return res;
};

const reult = combinationSum2([10, 1, 2, 7, 6, 1], 8);
console.log("result", reult);
