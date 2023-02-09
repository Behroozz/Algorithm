const assert = require("assert");

// Given a string, find the length of the longest substring without repeating characters.
// https://www.youtube.com/watch?v=AoWiiN_bwv4
// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

let s = "abcabcbb";

// function longestSubStringWithoutRepeating(s) {
//   let result = ''
//   let stringSet = new Set()
//   for(let i=0; i< s.length; i++) {
//     let j = i + 1
//     stringSet.add(s.charAt(i))
//     result = result.length > [...stringSet].join('').length ? result : [...stringSet].join('')
//     while(j < s.length) {
//       if(stringSet.has(s.charAt(j))) {
//         break
//       }
//       stringSet.add(s.charAt(j))
//       result = result.length > [...stringSet].join('').length ? result : [...stringSet].join('')
//       j++
//     }
//     stringSet.clear()
//   }
//   return result
// }

const longestSubStringWithNoRepeating = (str) => {
  let slow = 0;
  let fast = 0;
  let allArray = [];
  let currentSubString = "";

  while (slow <= str.length) {
    let current = str.charAt(slow);
    currentSubString = str.substring(fast, slow);
    if (currentSubString.indexOf(current) === -1) {
      slow++;
    } else {
      allArray.push(currentSubString);
      fast += 1;
      slow = fast;
    }
  }
  if (currentSubString.length > 0) {
    allArray.push(currentSubString);
  }
  return allArray;
};

const res = longestSubStringWithoutRepeating(s);
console.log("res", res);

const longestSubString = (str) => {
  if (str === "") return "";
  const strList = str.split("");

  let slowPointer = 0;
  let fastPointer = 0;
  let tempStore = "";
  let finalStore = "";

  while (slowPointer < strList.length && fastPointer < strList.length) {
    if (!tempStore.includes(strList[fastPointer])) {
      tempStore = tempStore.concat(strList[fastPointer]);
      fastPointer += 1;
    } else {
      slowPointer += 1;
      fastPointer = slowPointer;
      if (finalStore.length < tempStore.length) {
        finalStore = tempStore;
      }
      tempStore = "";
    }
  }

  return finalStore;
};

assert(longestSubString("abcabcbb") === "abc");
assert(longestSubString("bbbbb") === "b");
assert(longestSubString("pwwkew") === "wke");
