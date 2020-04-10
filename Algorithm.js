// //Permuation of and array
const permutator = (inputArr) => {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
      }
    }
  }
  permute(inputArr)
  return result;
}

//Approach 2
function permutator(array) {
  let newArray = []

  if (array.length < 2) {
    return array
  }
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    const remainig = array.filter(item => item != array[i])
    for (permut of permutator(remainig)) {
      newArray.push(current + permut)
    }
  }
  return newArray
}

console.log(permutator(['1', '2', '3']))
// 123, 132, 213, 231, 312, 321

// //Permuation of a string
function permutation(string) {
  let permutations = []
  if (string.length < 2) {
    return string
  }
  for (let i = 0; i < string.length; i++) {
    let current = string[i]
    let remanining = string.slice(0, i) + string.slice(i + 1, string.length)

    for (permut of permutation(remanining)) {
      permutations.push(current + permut)
    }
  }
  return permutations
}

let p = permutation('xyz')
console.log(p)


let unsortedArray = [-10, 7, 29, 30, 5, -10, -70, 30, 7]
function sortIntegers(a, b) {
  return a - b
}

console.log(unsortedArray.sort(sortIntegers))
console.log(Array.from(new Set(unsortedArray)))

let arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7]
//Being told that an unsorted array contains (n - 1) 
//of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time
function findMissingNumber(arrayOfIntegers) {
  let sumOfOriginalArr = 0
  let sumOfExpectedArr = 0
  for (let i = 0; i < arrayOfIntegers.length; i++) {
    sumOfOriginalArr += arrayOfIntegers[i]
  }

  for (let j = Math.min(...arrayOfIntegers); j <= Math.max(...arrayOfIntegers); j++) {
    sumOfExpectedArr += j
  }
  return sumOfExpectedArr - sumOfOriginalArr
}
console.log(findMissingNumber(arrayOfIntegers))


//Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element
let array = [4, 16, 2, 9, 9, 15, 3, 1, 10]
console.log(findLargestDifference(array))

function findLargestDifference(array) {
  if (array.length <= 1) return -1

  let currentMin = array[0]
  let currentMaxDiff = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] > currentMin && (array[i] - currentMin > currentMaxDiff)) {
      currentMaxDiff = array[i] - currentMin
    } else if (array[i] < currentMin) {
      currentMin = array[i]
    }
  }
  if (currentMaxDiff <= 0) { return -1 }
  return currentMaxDiff
}

// sliding window version technique
function findLargestDifference(nums) {
  let right = 1
  let left = 0
  let largestMax = -Infinity
  if(nums.length === 0) {
    return 0
  }

  if(nums.length === 1) {
    return nums[0]
  }
  
  while(right < nums.length && left <= right) {
    console.log('right', nums[right])
    console.log('left', nums[left])

    let currentDiff = nums[right] - nums[left]
    if( currentDiff > largestMax) {
      largestMax = currentDiff
    }
    if(nums[right] < nums[left]) {
      left = right
    }
    right +=1
  }
  return largestMax
}
//13
// Given an array of integers, find the largest difference between 
// two elements such that the element of lesser value must come 
// before the greater element

let array = [4, 16, 2, 9, 9, 15, 3, 1, 10]


function findLagerstDifference2(arr) {
  let result = []
  const findLargestPerSet = (current, remaining) => {

    let temp = []
    for(let j=0; j< remaining.length; j++) {
      temp.push(remaining[j] - current)
    }
    return Math.max(...temp)
  }
  for(let i=0; i< arr.length; i++) {
    // largest difference between
    // arr[i] and biggest arr[i+1, arr.length] when arr[i] < arr[k]
    let current =  arr[i]    
    let rest = arr.slice(i+ 1, arr.length)
    let remaining = rest.filter(item => item > current)
    if(remaining.length > 0) {
      result.push(findLargestPerSet(current, remaining))
    }
  }
  console.log('result', result)
  return Math.max(...result)
}

function findLargestDifference3(arr) {
  let i=0
  let j=1
  let Max = 0

  if(arr.length === 0 ){
    return -1
  }

  if(arr.length === 1) {
    return arr[0]
  }

  while(i < arr.length && j < arr.length) {
    if(arr[i] > arr[j]) {
      i++
    } else {
      let diff = arr[j] - arr[i]
      if(diff > Max) {
        Max = diff
      }
      j++
    }

    if(i === j+1) {
      i++
      j++
    }
  }

  console.log('max', Max)
  return Max
}

console.log(findLagerstDifference2(array))

// Final version
// function findLargestDifference() {
//   let maxDiff = 0

//   let right = 1
//   let left = 0

//   while(right < array.length && left <= right) {

//     if(array[right] >= array[left]) {
//       if( maxDiff < array[right] - array[left]) {  
//         maxDiff = array[right] - array[left]
//       }
//       right+=1

//     } else {
//       left++ 
//     }
//   }
//   return maxDiff
// }

//Find Intersection of two array in O(N)
let firstArray = [2, 2, 4, 1];
let secondArray = [1, 2, 0, 2];

console.log(intersection(firstArray, secondArray)); // [2, 1]

function intersection(arr1, arr2) {
  let hashMap = {}
  let intersectionArray = []

  firstArray.forEach(element => hashMap[element] = 1)
  secondArray.forEach(element => {
    if (hashMap[element] === 1) {
      intersectionArray.push(element)
      hashMap[element]++
    }
  })
  console.log(hashMap)
  return intersectionArray
}


//Reverse
let myString = "Welcome to this Javascript Guide!"
// reversed: !ediuG tpircsavaJ siht ot emocleW

function reverse(string, seprator) {
  let stringSection = string.split(seprator)
  let newArray = stringSection.map(item => {
    return item.split("").reverse().join("")
  })
  return newArray.reverse().join("")
}
console.log(reverse(myString, ''))


const person = { name: 'Bruce', age: 32 }

const entries = Object.entries(person)
const keys = Object.keys(person)
const values = Object.values(person)

console.log('entries', entries)
console.log('keys', keys)
console.log('values', values)


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}

function sumSalaries(objectSalay) {
  const salaryValue = Object.values(objectSalay).reduce((acc, curr) => acc + curr)
  return salaryValue
}
console.log(sumSalaries(salaries))

function countOfProps(objectSalay) {
  return Object.keys(objectSalay).length
}
console.log(countOfProps(salaries))

//Anagram word
let firstWord = 'Mary'
let secondWord = 'Army'

function isAnagram(firstWord, secondWord) {
  let a = firstWord.toLowerCase()
  let b = secondWord.toLowerCase()

  a = a.split("").sort().join("")
  b = b.split("").sort().join("")

  console.log(a)
  console.log(b)
  return a === b
}

console.log(isAnagram(firstWord, secondWord))


console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("race Car")); // true

//Palindrome  
function isPalindrome(str) {
  let lettersOnly = str.toLowerCase().replace(/ /g, "")
  return lettersOnly === lettersOnly.split("").reverse().join("")
}

console.log(isIsomorphic("egg", 'add')); // true
console.log(isIsomorphic("paper", 'title')); // true
console.log(isIsomorphic("kick", 'side')); // false

//Isomorphic
function isIsomorphic(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    return false
  }
  let letterMap = {}
  for (let i = 0; i < firstString.length; i++) {
    let letterA = firstString[i]
    let letterB = secondString[i]

    if (letterMap[letterA] === undefined) {
      letterMap[letterA] = letterB
    } else if (letterMap[letterA] !== letterB) {
      return false
    }
    console.log(letterMap)
  }
  return true
}

var expression = "{{}}{}{}"
var expressionFalse = "{}{{}";

console.log(isBalanced(expression)); // true
console.log(isBalanced(expressionFalse)); // false
console.log(isBalanced("")); // true

//Banlance {}
function isBalanced(expression) {
  if (expression.length === 0) {
    return true
  }

  let stack = []
  let checkstring = expression

  for (let i = 0; i < checkstring.length; i++) {
    if (checkstring[i] === '{') {
      stack.push(checkstring[i])
    } else {
      if (stack.length > 0) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  if (stack.pop()) return false
  return true
}

// left  P    Right
// |     |     |
// 1,3,5,7,8,9,11
// search for: 9
//Binary Serch for sorted Array
function recusrssiveBinarySearch(array, value, leftPosition, rightPosition) {
  if (leftPosition > rightPosition) return -1

  let middlePivot = Math.floor((leftPosition + rightPosition) / 2)
  if (array[middlePivot] === value) {
    return middlePivot
  } else if (array[middlePivot] > value) {
    return recusrssiveBinarySearch(array, value, leftPosition, middlePivot - 1)
  } else {
    return recusrssiveBinarySearch(array, value, middlePivot + 1, rightPosition)
  }
}

console.log(recusrssiveBinarySearch([1, 3, 5, 7, 8, 9, 11], 9, 0, 6))


function primeFactor(n) {
  let divisor = 2
  let primeFactor = []
  while (n > 2) {
    if (n % divisor == 0) {
      primeFactor.push(divisor)
      n = n / divisor
    } else {
      divisor++
    }
  }
  return primeFactor
}

console.log(primeFactor(2))
console.log(primeFactor(12))
console.log(primeFactor(13))
console.log(primeFactor(22))
console.log(primeFactor(137))
console.log(primeFactor(237))

function fibonacci(n) {
  if (n <= 1) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

console.log(fibonacci(12))


function greatestCommonDevisioner(a, b) {
  let divisor = 2
  if (a < 2 && b < 2) {
    return 1
  }
  let greatestCommonDev = 1
  while (a > divisor && b > divisor) {
    if (a % divisor == 0 && b % divisor == 0) {
      greatestCommonDev = divisor
    }
    divisor++
  }
  return greatestCommonDev
}

console.log(greatestCommonDevisioner(14, 21))
console.log(greatestCommonDevisioner(69, 169))

function sumFinder(array, sum) {
  let hashMap = {}
  for (let i = 0; i < array.length; i++) {
    diff = sum - array[i]
    if (hashMap[diff]) {
      return true
    } else {
      hashMap[array[i]] = true
    }
  }
  return false
}

console.log(sumFinder([6, 4, 3, 2, 1, 7], 9)) // true
console.log(sumFinder([6, 4, 3, 2, 1, 7], 2)); // false


//clouser give you access to outer function scope from inner scope
// cloouser use to give object data privacy
const getSectet = (secret) => {
  this.secret = secret
  return {
    get: () => this.secret
  }
}

console.log(getSectet(1))
console.log(getSectet(1).get())

function adder(x) {
  return function (y) {
    return x + y
  }
}

// Write a function that will loop through a list of integers
// and print the index of each element after a 3 second delay.
const arr = [10, 12, 15, 21]

for (let i = 0; i < arr.length; i++) {
  setTimeout(function (i_local) {
    return function () {
      console.log('index of this number is: ', + i_local)
    }
  }(i), 3000)
}


let add2 = adder(2)
console.log(add2(3))

// Given an array consisting of n integers, find the contiguous subarray of 
// given length k that has the maximum average value. And you need to output the maximum average value.
// Example 1: Input: [1,12,-5,-6,50,3], k = 4 Output: 12.75 Explanation: 
// Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
// Below is my code to solve this using Kadane’s Algorithm.

// Dynamic programing
// algo (Maximum Sum of Subarray) O(n) and space O(1)
// 1) add first k number call it curr max
// 2) add k number and reduce first number and slinding windows to find the max

const findMaxAverage = (arr, k) => {
  let curr_max = 0
  if(arr.lengh <= k) {
    for(let i=0; i<arr.lengh; i++) {
      curr_max = arr[i]
    }
    return curr_max      
  }
  for(let i=0; i<k; i++) {
    curr_max += arr[i]
  }

  let max_so_far = curr_max

  for(let j=k; j< arr.length; j++) {
    console.log('arr[j]', arr[j])
    console.log('arr[j-k]', arr[j-k])
    curr_max += (arr[j] - arr[j-k])
    max_so_far = Math.max(curr_max, max_so_far)
  }
  return max_so_far
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

const myArray = [1,12,-5,-6,50,3]
const myK = 4

function maxAverageValue2(array, k) {

let result = []
  for(let i=1; i< array.length; i++) {
    let currentKArray = array.slice(i, k+i)
    if(currentKArray.length === 4) {
      let currentAverage = currentKArray.reduce((acc, curr) => acc + curr, 0) / 4    
      result.push(currentAverage)
    }
  }
  return Math.max(...result) 
}

console.log(maxAverageValue2(myArray, myK))

const findMaxAverage = (arr, k) => {
  let right = 0
  let left = 0
  let currentMax = 0
  let lengthOfAvg = 0

  while(right < arr.length) {
    if(lengthOfAvg < k) {
      currentMax += arr[right]
      right +=1
      lengthOfAvg +=1  
    } else {
      let max = currentMax - arr[left] + arr[right]
      currentMax = currentMax < max ? max : currentMax
      right +=1
      left +=1
    }
  }
  return currentMax / k
}


// Two-Sum Problem with JavaScript
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// Example: Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].

function twoSumBest(array, target) {
  const numsMap = new Map();
  for (let i = 0; i < array.length; i++) {
      if(numsMap.has(target - array[i])) {
          return [numsMap.get(target - array[i]), i];
          // get() returns a specified element associated with the specified key from the Map object.
      } else {
          numsMap.set(array[i], i);
          //  set() adds or updates an element with a specified key and value to a Map object.
      }
  }
}



console.log(twoSumBest([2, 11, 7, 15], 9));

// https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
// Given weights and values of n items, put these items in a 
// knapsack of capacity W to get the maximum total value in 
// the knapsack. In other words, given two integer arrays 
// val[0..n-1] and wt[0..n-1] which represent values and 
// weights associated with n items respectively. Also given 
// an integer W which represents knapsack capacity, find out 
// the maximum value subset of val[] such that sum of the
// weights of this subset is smaller than or equal to W.
// You cannot break an item, either pick the complete item, 
// or don’t pick it (0-1 property).


//Time Complexity: O(nW) where n is the number of items and W is the capacity of knapsack.
let values = [60, 100, 120]
let weight = [10 , 20, 30]
let W = 50

function knapSack(values, weight, W, n) {
  if(n ===0 || W === 0) {
    return 0
  } 
  
  if(weight[ n-1 ] > W) {
    return knapSack(values, weight, W, n-1)
  } else {
    return Math.max(values[n-1] + knapSack(values, weight, W, n-1),
    knapSack(values, weight, W, n-1) 
    )
  }
}

console.log(knapSack(values, weight, W, values.length))



