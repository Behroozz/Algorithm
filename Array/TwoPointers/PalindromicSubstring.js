//https://www.youtube.com/watch?v=EIf9zFqufbU

// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.
const plaindromicStrDP = (str) => {
  let count = 0;
  let matrix = [];
  for (let i = 0; i < str.length; i++) {
    matrix.push(new Array(str.length).fill(0));
  }

  for (let j = 0; j < str.length; j++) {
    matrix[j][j] = 1;
    count++;
  }

  for (let row = 0; row < str.length; row++) {
    for (let column = 0; column < str.length; column++) {
      if (column - row === 1) {
        if (str[row] === str[column]) {
          matrix[row][column] = 1;
          count++;
        }
      } else {
        if (str[row] === str[column] && row < column) {
          console.log([row, column]);
          console.log(matrix[row + 1][column - 1]);
          if (matrix[row + 1][column - 1] === 1) {
            matrix[row][column] = 1;
            count++;
          }
        }
      }
    }
  }
  // console.log("matrix", matrix);
  return count;
};

const res = plaindromicStrDP("aaaaa");
console.log(res);
//https://www.youtube.com/watch?v=4RACzI5-du8
const plaindromicStrTwoPointer = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let left = i;
    let right = i;
    while (left >= 0 && right <= str.length && str[left] === str[right]) {
      count++;
      left--;
      right++;
    }

    let leftOdd = i;
    let rightOdd = i + 1;
    while (
      leftOdd >= 0 &&
      rightOdd <= str.length &&
      str[leftOdd] === str[rightOdd]
    ) {
      count++;
      rightOdd++;
      leftOdd--;
    }
  }
  return count;
};

const res2 = plaindromicStrTwoPointer("aaaaa");
console.log(res2);
