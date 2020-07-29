// Given a string, 
// find the length of the longest substring 
// without repeating characters.


// boundry --> 0 < str < 100

function maxLengthChars(str) {
  let overalChars = []
  let chars = []
  let counter = 0
  let max = 0
  
  if(str.length === 0) {
    return 0
  }
  
  let slow = 0
  
  while(slow < str.length) {
    const current = str.charAt(slow)
    
    if(!chars.includes(current)) {
      chars.push(current)
      counter++
      slow++
    } else {
      str = str.substring(chars.indexOf(current) + 1)
      overalChars.push(chars)
      chars = []
      slow = 0
    }
  }
    
  return getMax(strArray)
}

// console.log('Emptry string length is zero', maxLengthChars('') === 0)
// console.log('String with one char length is one', maxLengthChars('a') === 1)
// console.log('String with duplicate chars length is one', maxLengthChars('aa') === 1)
// console.log('....', maxLengthChars('abc') === 3)
// console.log('....', maxLengthChars('abca') === 3) 
// console.log('....', maxLengthChars('abcabcd') === 4)
// console.log('test case1', maxLengthChars('abad') === 3)
console.log("new test case", maxLengthChars("abcabcbb") === 3)

// more test cases

// a b a d ---> b a d ---> 
// | | |        |
// s s s        s
//   |
//   f

// chars = [a, b]
// counter = 1
// max = 1






function getMax(strArray) {
  return strArray.reduce((acc, curr) => {
    acc = curr.length > acc ? curr.length : acc
    return acc
  }, 0)
}





class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_l = 0
        char_dict = {}
        left = 0
        for i, c in enumerate(s):
            if c in char_dict:
                max_l = max(max_l, i-left)
                left = max(left, char_dict[c] + 1)
            char_dict[c] = i
        return max(max_l, len(s) - left)
