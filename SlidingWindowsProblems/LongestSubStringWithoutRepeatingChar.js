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

let s = "abcabcbb"

function longestSubStringWithoutRepeating(s) {
  let result = ''
  let stringSet = new Set()
  for(let i=0; i< s.length; i++) {
    let j = i + 1
    stringSet.add(s.charAt(i))
    result = result.length > [...stringSet].join('').length ? result : [...stringSet].join('')
    while(j < s.length) {
      if(stringSet.has(s.charAt(j))) {
        break
      }
      stringSet.add(s.charAt(j))
      result = result.length > [...stringSet].join('').length ? result : [...stringSet].join('')
      j++
    }
    stringSet.clear()
  }
  return result
}



const res = longestSubStringWithoutRepeating(s)
console.log('res', res)