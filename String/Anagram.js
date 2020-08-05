// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".


const findAnagrams = (s, p) => {
  let result = []
  let matchHashMap = {}
  for (let z = 0; z < p.length; z++) {
    let current = p.charAt(z)
    if (!matchHashMap[current]) {
      matchHashMap[current] = 1
    } else {
      matchHashMap[current] += 1
    }
  }

  let hashMap = {}
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (equal(hashMap, matchHashMap)) {
      result.push(str)
    }
    hashMap = {}
    str = ''
    for (let j = 0; j < p.length; j++) {
      str = str.concat(s[j + i])
      if (!hashMap[s[j + i]]) {
        hashMap[s[j + i]] = 1
      } else {
        hashMap[s[j + i]] += 1
      }
    }
  }
  return result
}

function equal(obj1, obj2) {
  for (const obj in obj1) {
    if (obj2[obj] !== obj1[obj]) {
      return false
    }
  }
  return true
}

// const result = findAnagrams('abab', 'ab')
const result = findAnagrams('cbaebabacd', 'abc')
console.log('result', result)


// function findAnagrams(str, target) {
//   let indexes = []
//   let targetLength = target.length

//   if(str.length < target.length) {
//     return []
//   }

//   let i = 0
//   while(i < str.length) {
//     let chunk =  str.slice(i, i+ targetLength)
//     if(chunk.length < targetLength) {
//       break
//     }
//     i += 1
//     if(target.split('').sort().join('') === chunk.split('').concat().sort().join('')) {
//       indexes.push(chunk)
//     }
//   }
//   return indexes
// }


// const result = findAnagrams('cbaebabacd', 'abc')
// console.log('result', result)

// function findAnagrams(str, target) {
//   const chunks = Chunks(str, target.length)
//   return chunks.filter(chunk => isAnagram(chunk, target))
// }

// function Chunks(str, j) {
//   let chunks= []
//   let i = 0
//   while(i < str.length) {
//     const slice = str.slice(i, i+j)
//     if(slice.length === j) {
//       chunks.push(slice)
//     }    
//     i++
//   }
//   return chunks
// }

// function isAnagram(str1, str2) {
//   if(str1.length === 0 || str2.length === 0) {
//     return false
//   }
//   if(str1.length !== str2.length) {
//     return false
//   }
//   return str1.split('').sort().join('') === str2.split('').sort().join('')
// }

// // console.log(isAnagram('abc', 'cab'))
// // console.log(isAnagram('ab', 'cab'))
// // console.log(isAnagram('aa', 'aa'))
// // console.log(isAnagram('', ''))
// // console.log(isAnagram('abc', 'edf'))


// const getAnagram = (s, p) => {
//   let aggregate = []
//   let counter = p.length
//   let i = 0
//   let bucket = []
//   while(i <= s.length) {
//     if(bucket.length < counter) {
//       bucket.push(s.charAt(i))
//       i++
//     } else {
//       if(bucket.sort().join('') === p.split('').sort().join('')) {
//         aggregate.push(i-counter)
//       }
//       bucket = []
//       i = i - counter + 1
//     }
//   }
//   return aggregate
// }