// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const buildCharMap = (str) => {
    let charMap = {};
    for (char of str.replace(/[^\w]/g, "").toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  };
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (object in aCharMap) {
    if (aCharMap[object] !== bCharMap[object]) {
      return false;
    }
  }
  return true;

  // return (
  //   stringA.split(" ").join("").split("").sort().join("") ===
  //   stringB.split(" ").join("").split("").sort().join("")
  // );
}

anagrams("a b", "ab");

module.exports = anagrams;
