// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChar = "";
  let max = 0;
  let charMap = {};
  // const charMap = str.split("").reduce((acc, curr) => {
  //   acc[curr] = !acc[curr] ? 1 : acc[curr] + 1;
  //   return acc;
  // }, {});

  // better way to create a map
  for (char of str) {
    charMap[char] = charMap[char] || 1;
  }

  // for ([key, value] of Object.entries(charMap)) {
  //   if (max === 0 || value > max) {
  //     max = value;
  //     char = key;
  //   }
  // }

  // To iterate over object
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;

maxChar("abcccccccd");
