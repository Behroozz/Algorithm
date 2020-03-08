// // Javascript permuation

/********************************/
// Permutation of string
/********************************/

// abc =
// a + permutation(bc)
// b + permutation(ac)
// c + permutation(ab)

// ab = 
// a + permutation(b) +
// b + permutation(a)

// a = permutation(a)

function getStringPermutation(str) {
  const result = []

  if(str.length === 1) {
    result.push(str)
    return result
  }

  for(let i=0; i< str.length; i++) {
    const selected = str.charAt(i)
    const rest = str.substring(0,i) + str.substring(i+1)

    for(permut of getStringPermutation(rest)) {
      result.push(selected + permut)
    }
  }
  return result
}

const StringResult = getStringPermutation('abc')
console.log('StringResult', StringResult)

/****************************/
// Array Permutation
/****************************/

// [a, b, c]
// a + [b,c]
// ab + [c]
// abc + []

// b + [c]
// bc + []

// c + []

function getArrayCombinations(chars) {
  const result = []
  let combine = function(prefix, chars) {
    for(let i=0; i< chars.length; i++) {
      const newPrefix = prefix + chars[i]

      result.push(newPrefix)
      combine(newPrefix, chars.slice(i+1))
    }
  }
  combine('', chars)
  return result
}

const arrayResult = getArrayCombinations(['a', 'b', 'c'])
console.log('arrayResult', arrayResult)


// Extra
// // //Permuation of and array
// const permutator = (inputArr) => {
//   let result = [];
//   const permute = (arr, m = []) => {
//     if (arr.length === 0) {
//       result.push(m)
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         let curr = arr.slice();
//         let next = curr.splice(i, 1);
//         permute(curr.slice(), m.concat(next))
//       }
//     }
//   }
//   permute(inputArr)
//   return result;
// }

// //Approach 2
// function permutator(array) {
//   let newArray = []

//   if (array.length < 2) {
//     return array
//   }
//   for (let i = 0; i < array.length; i++) {
//     let current = array[i]
//     const remainig = array.filter(item => item != array[i])
//     for (permut of permutator(remainig)) {
//       newArray.push(current + permut)
//     }
//   }
//   return newArray
// }



