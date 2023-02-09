// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

const minWindow = (s, t) => {
  let neededCharMap = {};

  if (t.length > s.length) {
    return "";
  }

  for (let char of t) {
    neededCharMap[char] = (neededCharMap[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let numberOfNeededChars = Object.keys(neededCharMap).length;
  let subStringResult = "";

  while (right < s.length) {
    let rightChar = s[right];
    neededCharMap[rightChar]--;

    if (neededCharMap[rightChar] === 0) {
      numberOfNeededChars--;
    }

    while (numberOfNeededChars === 0) {
      if (!subStringResult || subStringResult.length > right - left + 1) {
        subStringResult = s.slice(left, right + 1);
      }

      let leftChar = s[left];

      if (neededCharMap[leftChar] === 0) {
        numberOfNeededChars++;
      }
      neededCharMap[leftChar]++;
      left++;
    }

    right++;
  }
  return subStringResult;
};

const result = minWindow("ADOBECODEBANC", "ABC");
console.log("result", result);
