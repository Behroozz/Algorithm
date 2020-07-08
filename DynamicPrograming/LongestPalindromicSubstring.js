// https://www.youtube.com/watch?v=UflHuQj6MVA
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"


const longestPalindrome = function(s) {
  let indexes = []
  if(s.length < 2) return true
  let table = []
  
  for(let i=0; i < s.length; i++) {
    table.push([])
    for(let j=0; j < s.length; j++) {  
      if(i === j) {
        table[i][j] = 1    
      } else {
        if(s.charAt(i) === s.charAt(j) && longestPalindrome(s.slice(i+1, j-1))) {
          table[i][j] = 1 
          indexes.push(s.slice(i, j+1))   
        } else {
          table[i][j] = 0    
        }
      }
    }
  }
  
  return indexes.reduce((acc, curr) => {
    if(curr.length > acc) {
      acc = curr
    }
    return acc
  } , '')
}

let s = 'cbbd'
const result = longestPalindrome(s)
console.log('result', result)



// // b a b a d
// // |       |   

//      0  1  2  3  4
// 0 [ [ 1, 0, 1, 0, 0 ],
// 1   [ 0, 1, 0, 1, 0 ],
// 2   [ 1, 0, 1, 0, 0 ],
// 3   [ 0, 1, 0, 1, 0 ],
// 4   [ 0, 0, 0, 0, 1 ] ]
// result babad