// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // return str.split("").reduce((acc, curr) => {
  //   if (["e", "a", "i", "o", "u"].includes(curr.toLowerCase())) {
  //     acc += 1;
  //   }
  //   return acc;
  // }, 0);
  // str.replace(/\s/g, "");
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

vowels("AEIO U");
module.exports = vowels;
