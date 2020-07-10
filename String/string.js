//1*****************************************************/
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("race Car")); // true

//Palindrome  
function isPalindrome(str) {
  let lettersOnly = str.toLowerCase().replace(/ /g, "")
  return lettersOnly === lettersOnly.split("").reverse().join("")
}

// const A = 'ABCD'
// const B = 'CDABCDAB'

//[ABCD][ABCD][ABCD]

//2*****************************************************/
function repeatedString(A, B) {
  let repeat = 0
  let merge = ''
  let shouldAdd = true
  while(shouldAdd) {
    merge = merge + A
    repeat++
    if(merge.includes(B) || merge.indexOf(B) > 0) {
      shouldAdd = false
    }
  }
  return repeat
}

// const result = repeatedString(A, B)
// console.log('result', result)

//3*****************************************************/
// LCP([S1, S2, S3]) = LCP(LCP(S1, S2), S3)
function findLongestCommonPrefix(str) {
  if(str.length === 0 ) return ''
  if(str.length === 1) return str[0]

  let prefix = str[0]

  for(let i=1; i< str.length; i++) {
    let current = str[i]

    // skip -1 and positive
    while(current.indexOf(prefix) !== 0) {

      prefix = prefix.substr(0, prefix.length-1)
      if(prefix.length === 0) {
        return
      }
    }
  }
  return prefix
}

// current out flower
// prefix out flow
// current out flight
// prefix out flow
// current flight
// prefix in flo
// current flight
// prefix in fl
// CResult fl
// const C = ['flow', 'flower' ,'flight']
// const CResult = findLongestCommonPrefix(C)
// console.log('CResult', CResult)


// let A = "ab", B = "ba"
// Output: true

// let A = "ab", B = "ab"
// Output: false

// let A = "aa", B = "aa"
// Output: true

// let A = "aaaaaaabc", B = "aaaaaaacb"
// Output: true

// let  A = "", B = "aa"
// Output: false

//4*****************************************************/
function findBuddies(A, B) {
  let set = new Set()
  if(A.length !== B.length) {
    return false
  }

  let indexes = []
  for(let i=0; i< A.length; i++) {
    set.add(A[i])
    set.add(B[i])
    if(A[i] !== B[i]) {
      indexes.push(i)
    }
  }
  if(indexes.length === 0) {
    if(set.size === 1) {
      return true
    } else {
      return false
    }
  } else if(indexes.length > 2) {
    return false
  } else {
    console.log('1 diff')
    return true
  }
}

const result = findBuddies(A, B)
console.log('result', result)