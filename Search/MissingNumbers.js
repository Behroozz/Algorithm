// As an example, the array with some numbers missing, . The original array of numbers . The numbers missing are .

// Notes

// If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. If that is not the case, then it is also a missing number.
// You have to print all the missing numbers in ascending order.
// Print each missing number once, even if it is missing multiple times.
// The difference between maximum and minimum number in the second list is less than or equal to .
// Function Description

// Complete the missingNumbers function in the editor below. It should return a sorted array of missing numbers.

// missingNumbers has the following parameter(s):

// arr: the array with missing numbers
// brr: the original array of numbers


// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
  let missingOriginal = {}
  
  for(let i=0; i< brr.length ; i++) {
    if(!missingOriginal[brr[i]]) {
      missingOriginal[brr[i]] = 1
    } else {
      missingOriginal[brr[i]] += 1
    }
  }

  for(let i=0; i< arr.length ; i++) {
    if(!missingOriginal[arr[i]]) {
      missingOriginal[arr[i]] = 1
    } else {
      missingOriginal[arr[i]] -= 1
    }
  }


  return Object.keys(missingOriginal).reduce((acc, key) => {
    if(missingOriginal[key] === 1) {
      acc.push(key)
    }
    return acc
  }, [])
}

// let arr = [7,2,5,3,5,3]
// let brr = [7,2,5,6,4,3,5,3]

let arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206]
let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204, 209]


const result = missingNumbers(arr, brr)
console.log('result', result)