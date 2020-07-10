// 1***************************************************************
// Given an integer array, you need to find one continuous subarray 
//that if you only sort this subarray in ascending order, then the 
// whole array will be sorted in ascending order, too.

// You need to find the shortest such subarray and output its length.

// Example 1:
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to 
// make the whole array sorted in ascending order.
// Note:
// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order 
// here means <=.

// two pointer one from start, one from end
function shortestUnsortedContinousSubarray(array) {
  let subArray = []
  let max = -Infinity
  let min = Infinity
  let right = array.length-1
  let left = 0
  let start = 0

  while(right > 0) {
  
    if(array[right] > max) {
      max = array[right]
    } else {
      start = right
    }

    if(array[left] < min) {
      min = array[left]
    } else {
      end = left
    }

    right--
    left++
  }

  console.log('start', start)
  console.log('left', left)
  return array.slice(start, end+1)
}

// let array = [2, 6, 4, 8, 10, 9, 15]
// console.log(shortestUnsortedContinousSubarray(array))

// let res = prefixesDivBy5([0,1,1])
// console.log(res)

//2*******************************************************************
// Loop's ending condition is i * i <= num instead of i <= sqrt(num)
function isPrime(num) {
  if(num <=1) return false
  for(let i=2;i <= Math.sqrt(num);  i++) {
    if(num % i === 0 ) return false
  }
  return true
}

// console.log(isPrime(9))
// console.log(isPrime(2))

//3*******************************************************************

// Given an array with n integers, your task is to check if it could 
// become non-decreasing by modifying at most 1 element.

// We define an array is non-decreasing if array[i] <= array[i + 1] 
// holds for every i (1 <= i < n).

// Example 1:
// Input: [4,2,3]
// Output: True
// Explanation: You could modify the first 4 to 1 to get a non-decreasing 
// array.
// Example 2:
// Input: [4,2,1]
// Output: False
// Explanation: You can't get a non-decreasing array by modify at most 
// one element.

// case1     case2
// [4,6,5], [4,6,3]

// => [4,5,5] , not [4,3,3] but [4,6,6]

function isNonDecreasingArray(arr) {
  for(let i=2; i< arr.length; i++) {
    // console.log('arr[i-2]', arr[i-2])
    // console.log('arr[i-1]', arr[i-1])
    // console.log('arr[i]', arr[i])

    if(arr[i-1] > arr[i]) {
      if(arr[i-2] <= arr[i]) {
        arr[i-1] = arr[i]
      } else {
        arr[i] = arr[i-1]
      } 
    } else {
      if(arr[i-2] > arr[i-1]) {
        arr[i-2] = Math.min(arr[1], arr[i-1])
      }
    }
  }
  // console.log(arr)
}


// console.log(isNonDecreasingArray([4,6,5]))
// console.log(isNonDecreasingArray([4,6,3]))
// console.log(isNonDecreasingArray([4,2,3]))


//4*******************************************************************

// You have N gardens, labelled 1 to N.  In each garden, you want 
// to plant one of 4 types of flowers.

// paths[i] = [x, y] describes the existence of a bidirectional 
// path from garden x to garden y.

// Also, there is no garden that has more than 3 paths coming into 
// or leaving it.

// Your task is to choose a flower type for each garden such that, 
// for any two gardens connected by a path, they have different types 
// of flowers.

// Return any such a choice as an array answer, where answer[i] is 
// the type of flower planted in the (i+1)-th garden.  The flower 
// types are denoted 1, 2, 3, or 4.  It is guaranteed an answer exists.

 

// Example 1:

// Input: N = 3, paths = [[1,2],[2,3],[3,1]]
// Output: [1,2,3]
// 1 ---> 2 --->3 
// 1      2     3     
// <-------------
// Example 2:

// Input: N = 4, paths = [[1,2],[3,4]]
// Output: [1,2,1,2]

// 1 ---> 2 ---> 3 ---> 4
// 1      2      1      1

// Example 3:

// Input: N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
// 1 ---> 2 --->3 ---> 4
// 1      2     3      4
// <-------------------

// ----------->
//        -------------->

// Output: [1,2,3,4]



class Garden {
  constructor() {
    this.adjacencyList = {}
    this.plantedFlowers = {}
  }

  addVertex(id) {
    if(!this.adjacencyList[id]) {
      this.adjacencyList[id] = []
      this.plantedFlowers[id] = 0
    } else {
      throw Error(`This ${id} already exists`)
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  checkNeighbors(currentFlower) {
    let neighbors = this.adjacencyList[currentFlower]

    console.log(neighbors)
    let possibleFlowers = [1,2,3,4]
    neighbors.forEach(neighbor => {
      let nextFlower = this.plantedFlowers[neighbor]
      if(possibleFlowers.includes(nextFlower)) {
        possibleFlowers = possibleFlowers.filter(x => { return x !== nextFlower})
      }
      this.plantedFlowers[currentFlower] = possibleFlowers[0]
    })
    return possibleFlowers[0]
  }
}

let buildGarden = function(N, paths) {
  let garden = new Garden()
  for(let i=1; i<=N; i++) {
    garden.addVertex(i)
  }

  for(path of paths) {
    garden.addEdge(path[0], path[1])
  }

  return garden
}

/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
function gardenNoAdj(N, paths) {
  let result = []
  let garden = buildGarden(N, paths)

  console.log('garden', garden)

  Object.keys(garden.adjacencyList).forEach(bed => {
    if(garden.adjacencyList[bed].length > 0) {
      result.push(garden.checkNeighbors(bed))
    } else {
      result.push(1)
    }
  })
  console.log('garden', garden)

  return result
}

let N = 3
let paths =  [[1,2],[2,3],[3,1]]//[[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]

// const result = gardenNoAdj(N, paths)
// console.log('result', result)

/*5*******************************************************************/
// Given an array of integers and an integer k, you need to find the number of unique k-diff pairs 
// in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both 
// numbers in the array and their absolute difference is k.

// Example 1:
// Input: [3, 1, 4, 1, 5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.
// Example 2:
// Input:[1, 2, 3, 4, 5], k = 1
// Output: 4
// Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
// Example 3:
// Input: [1, 3, 1, 5, 4], k = 0
// Output: 1
// Explanation: There is one 0-diff pair in the array, (1, 1).

// let arr = [3, 1, 4, 1, 5], k = 2
// // let arr = [1, 3, 1, 5, 4], k=0

// function kDiff(array, k) {
//   let result = {}
//   let uniqueInput = array // [...new Set(array)]
//   uniqueInput.reduce((acc, curr,  index, src) => {
//     // let rest = src.filter(id => id !== curr)
//     let rest = src.slice(0, index).concat(src.slice(index+1))

//     rest.forEach(item => {
//       if(Math.abs(curr - item) == k) {
//         if(!((result[curr] && result[curr] ==  item) || (result[item] && result[item] ==  curr))) {
//           result[curr] = item
//         }
//       }
//     })
//   }, [])
//   return result

//   // let pairCount =0
//   // let pairs = {}
//   // let uniques = new Set(array);
    
//   // uniques.forEach(val => {
//   //     if (uniques.has(val+k)) {
//   //       pairs[val] = val+k
//   //       pairCount++
//   //     }
//   // })
//   // return pairs
// }

// const result1 = kDiff(arr, k)
// console.log('result', result1)


/*6******************************************************** */
// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1

// let array = [3,4,-1,1]
// let array = [1,2,0]
// let array = [7,8,9,11,12]
let array = [1,2,0]

function smallestPositiveNumber(array) {
    let map = {}
    let max = 0
    array.map((res) => {
        map[res] ? map[res]++ : map[res] = 1
        max = Math.max(max, res)
    })
    console.log('map', map)
    
    if (max <= 0) {
        return 1
    }
    
    for (let i = 1; i <= max + 1; i++) {
        if (!map[i]) return i 
    }
}

// const result = smallestPositiveNumber(array)
// console.log('result', result)

// Better solution
// function firstMissingPositive(nums) {
//   let i = 0
//   let p = nums.length
//   // let array = [7,8,9,11,12]

//   while (i < p) {
//       console.log('i', i)
//       console.log('p', p)


//       let n = nums[i]
//       console.log('n', n)

//       if (n == i+1) {
//         console.log('Condition1')
//         ++i;
//       }  // Found it! Look for the next one.
//       else if (n < 1 || n > p || n == nums[n-1]) {
//         nums[i] = nums[--p]; // Useless. Get new candidate from the end.
//         console.log('Condition2', nums[i])
//       } else {
//         console.log('Condition3')
//         nums[i] = nums[n-1] // Within range; put it in the right place.
//         nums[n-1] = n
//       }
//   }

//   return p + 1;
// }

//*7************************************************************ */

// There are N children standing in a line. Each child is assigned a rating value.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

// Example 1:

// Input: [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
// Example 2:

// Input: [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
//              The third child gets 1 candy because it satisfies the above two conditions.

//let ratings = [1,0,2]
let ratings = [1,2,2]





function candy(ratings) {
  let map = {}
  let ratingsMap = {}
  for(let i=0; i< ratings.length; i++) {
    let prev = 0
    let next = 0
    if(i-1 >= 0) {
      prev = ratings[i-1]
    }
    if(i+1 < ratings.length) {
      next = ratings[i+1]
    }
    console.log('ratings[i]', ratings[i])
    map[ratings[i]] = [prev, next]
    ratingsMap[ratings[i]] = 0
  }

//   1 ==> 0,0   [1]
// 0 ==> 1,2     
// 2 ==> 0,0
for(let i=0; i< ratings.length; i++) {
  let current = ratings[i]
  let neighbors =  map[current]
  console.log('current', current)
  console.log('neighbors', neighbors)
  let r = 0
  neighbors.forEach(n => {
    if(current > n) {
      ratingsMap[current] = ratingsMap[n] + 1
    } else {
      ratingsMap[n] +=1
      ratingsMap[current] = 1
    }
  })
  console.log('ratingsMap', ratingsMap)
}
  
  // console.log('map', map)
  // console.log('ratingsMap', ratingsMap)
}

//let ratings = [1,2,2]

function candy2(ratings) {
  let candies = new Array(ratings.length).fill(1)
  for (let i = 1; i < ratings.length; i++) {
      if (ratings[i] > ratings[i - 1]) {
          candies[i] = candies[i - 1] + 1;
      }
  }
  let sum = candies[ratings.length - 1]
  console.log('sum', sum)
  console.log('candies', candies)
  for (let i = ratings.length - 2; i >= 0; i--) {
    console.log('ratings[i]', ratings[i])
    // if (ratings[i] > ratings[i + 1]) {
    //     candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    // }
    // sum += candies[i];
}

}

// const result = candy2(ratings)
// console.log('result', result)



/*************************************************** */
// Given an array nums sorted in ascending order, return true if and only if 
// you can split it into 1 or more subsequences such that each subsequence 
// consists of consecutive integers and has length at least 3.

// Example 1:

// Input: [1,2,3,3,4,5]
// Output: True
// Explanation:
// You can split them into two consecutive subsequences : 
// 1, 2, 3
// 3, 4, 5

// Example 2:

// Input: [1,2,3,3,4,4,5,5]
// Output: True
// Explanation:
// You can split them into two consecutive subsequences : 
// 1, 2, 3, 4, 5
// 3, 4, 5

// Example 3:

// Input: [1,2,3,4,4,5]
// Output: False


// let Input = [1,2,3,4,4,5]
// let Input = [1,2,3,3,4,5]
let Input = [1,2,3,3,4,4,5,5]

function consecutiveSeq(array) {
  let right = 0
  let chunk = 3
  let sectionNumber = 1
  let section = []
  let sectionMap = {}
  while(right < array.length) {
    if(section.length < chunk)  {
      if(array[right] < array[right+1] || array[right+1] === undefined || section.length === chunk-1) {
        section.push(array[right])
      } else {
        if(sectionMap[sectionNumber-1]) {
          sectionMap[sectionNumber-1].push(array[right])
        }
      }
    } else {
      right -=1
      sectionMap[sectionNumber] = section
      sectionNumber +=1
      section = []
    }
    right +=1
  }
  sectionMap[sectionNumber] = section
  return sectionMap
}

const res = consecutiveSeq(Input)
console.log('res', res)



