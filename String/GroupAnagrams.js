// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

const input = ["eat", "tea", "tan", "ate", "nat", "bat"]

function groupAnagrams(input) {
  if(input.length === 0) return []
  let result = {}
  for(let i=0; i< input.length; i++) {
    const sortedWord = input[i].split('').sort().join('')
    if(!result[sortedWord]) {
      result[sortedWord] = []
    } 
    result[sortedWord].push(input[i])
  }
  return Object.values(result)
}

const result = groupAnagrams(input)
console.log('result', result)