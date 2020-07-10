// https://www.youtube.com/watch?v=hLQYQ4zj0qg
// a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine 
// if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false


const wordBreak = function (s, wordDict) {
  // let i = 0
  // let restOfString = s
  // while (i < s.length) {
  //   const firstSChar = s.charAt(i)
  //   let startWords = wordDict.filter(word => word.charAt(0) === firstSChar)
  //   if (startWords.length > 0) {
  //     startWords.forEach(word => {
  //       console.log('word', word)
  //       if (restOfString.startsWith(word)) {
  //         console.log('Start with')
  //         restOfString = restOfString.slice(word.length)
  //         i = s.length - restOfString.length
  //       }
  //     })
  //   } else {
  //     console.log('restOfString', restOfString)
  //     break
  //   }
  // }
  // return restOfString.length === 0
  return dfs(s, wordDict, 0, [])
}

function dfs(word, wordDict, start, memo) {
  if(start === word.length) return true
  console.log(memo)
  if(memo[word] !== undefined) return memo[word]
  
  for(let end = start+1; end<=word.length ; end++) {
    let guess = word.substring(start, end)
    // console.log('guess', guess)
    if(wordDict.includes(guess) && dfs(word, wordDict, end, memo)) {
      memo[word] = true
      return true
    }
  }
  return memo[word] = false
  // return false
}

// let s = "codeleetcode", wordDict = ["leet", "code"]
// let s = "applepenapple", wordDict = ["apple", "pen"]
// let s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]

let s = "cars", wordDict = ["car", "ca", "rs"]
// let s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
// wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]

const result1 = wordBreak(s, wordDict)
console.log('result1', result1)


//                                                           WB('car', ["car", "ca", "rs"])

// 1) c + WB('ars', ["car", "ca", "rs"]) ,               ca + WB('rs', ["car", "ca", "rs"]),       car + WB('s', ["car", "ca", "rs"]),        cars + WB('', ["car", "ca", "rs"])

// 1-1) a + WB('rs', ["car", "ca", "rs"]), ar + WB('s', ["car", "ca", "rs"]) , ars + WB('', ["car", "ca", "rs"]) 
 
//                                     1-2) r + WB('s', ["car", "ca", "rs"]), rs + WB('', ["car", "ca", "rs"])

//                                                                                               1-3) s + WB('', ["car", "ca", "rs"])
