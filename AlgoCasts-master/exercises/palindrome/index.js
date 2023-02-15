import { addDays } from "date-fns";

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split("").every((char, index) => {
    return char === str.charAt(str.length - 1 - index); // ?.
  });
  // let left = 0;
  // let right = str.length - 1;
  // let mid = Math.floor(str.length / 2);

  // while (left <= mid && right > mid) {
  //   if (str.charAt(left) !== str.charAt(right)) {
  //     return false;
  //   }
  //   left++;
  //   right--;
  // }
  // return true;
}

module.exports = palindrome;

palindrome("abba");
