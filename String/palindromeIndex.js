const {performance} = require('perf_hooks');

function palindromeIndex(s) {
  let index = []
  if(s.length === 1) {
      return true
  }

  if(isPalindrome(s) || s.length < 1 && s.length > 100005) {
      return -1
  }

  for(let i=0; i< s.length; i++) {
      let current = s.charAt(i)
      let rest = s.slice(0,i).concat(s.slice(i+1))

      console.log('current', current)
      console.log('rest', rest)
      if(isPalindrome(rest)) {
          console.log('i', i)
          index.push(i)
          break
      } 
  }

//    console.log('index', index)
  return index[0]
}

// function isPalindrome(s) {
//   const t0 = performance.now()
//   let i = 0
//   let j = s.length - 1
//   while(i < s.length && j >= 0 ) {
//       const headChar = s.charAt(i)
//       const tailChar = s.charAt(j)
//       if(headChar !== tailChar) {
//           return false
//       }
//       i++
//       j--
//   }
//   const t1 = performance.now()
//   console.log('time: ', t1 -t0)

//   return true
// }

// Just go through half size
function isPalindrome(s) {
  const t0 = performance.now()
  let i = 0
  let j = s.length - 1
  const l = s.length / 2
  while(i <  l && j >= 0 ) {
      const headChar = s.charAt(i)
      const tailChar = s.charAt(j)
      if(headChar !== tailChar) {
          return false
      }
      i++
      j--
  }
  const t1 = performance.now()
  console.log('time: ', t1 -t0)

  return true
}

// compare to reverse
// function isPalindrome(s) {
//   const t0 = performance.now()
//   let result = s.split('').reverse().join('') === s
//   const t1 = performance.now()
//   console.log('time: ', t1 -t0)

//   return result
// }

const test = `adbbba`

const result = palindromeIndex(test)
console.log('result', result)
