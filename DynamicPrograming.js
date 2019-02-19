// http://www.scriptonitejs.com/dynamic-programming/

// optimization problem is the problem of finding the best solution, from all feasible solutions

// Dynamic programming is sometimes considered the reverse of recursion. We have seen recursion already 
// in previous posts. Instead of starting from the top and breaking the problem down into smaller sub-problems,
// this time we start from the bottom and we solve those small problems first and combine them 
// to solve a larger problem.

// In computing, memoization is an optimization technique used primarily to speed up computer programs by 
// storing the results of expensive function calls and returning the cached result when the same inputs occur again

// When solving problems using the dynamic programming 
// approach we first start off by defining our base cases. 
// We also define an array to store values in. Then instead 
// of calling the function recursively, we run a loop to 
// find out what the next case results in (based on 
// previous base case values in an array).

// *****************************************************
// Fibonachi
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// *****************************************************

let COUNT = 5

function recorsiveFibonachi(n) {
  if(n<2) {
    return n
  }
  return recorsiveFibonachi(n-1) + recorsiveFibonachi(n-2)
}

let recResponse = recorsiveFibonachi(COUNT)
//console.log(recResponse)

// We stored our base cases in an array. Then we use a 
// for-loop to calculate the next sequence. Now in order 
// to get the next number (which we get by adding the 
// previous two numbers), we don’t have to do that 
// calculation at all (because we already stored it in 
// the array – we simply retrieve it). What’s the runtime
// complexity of getting a number stored in an array
// index? Its O(1), which is very fast (constant time)

function DPFibonachi(n) {
  let sequence = []
  sequence[0] = 0
  sequence[1] = 1

  if(n<2) return n

  for(let i=2; i< n; i++) {
    sequence[i] = sequence[i-1] + sequence[i-2]
  }

  return sequence
}


let dpResponse = DPFibonachi(COUNT)
//console.log(dpResponse)

//Our memoize Fibonacci function returns a function that 
// is the Fibonacci function we eventually call (closure). 
// The function has access to a cache object. When 
// Fibonacci is called we do pretty much the same thing 
// that we did in the recursive solution with a little 
//twist. Instead of repeatedly calling the function for 
// every number, we check to see if that number/input has 
// already been calculated(in cache).

function memoizeFibonacci(n) {
  let cache = {}

  function fibonacci(n) {
    let result 

    if(cache[n]) {
      result = cache[n]
    } else {
      if(n<2) return n

      result = fibonacci(n-1) + fibonacci(n-2)

      cache[n] = result
    }
    return result
  }
  return fibonacci(n)
}

let memResponse = memoizeFibonacci(COUNT)
//console.log(memResponse)


// *****************************************************
// Factorial
// *****************************************************

function factorialRecurssion(n) {
  if(n === 0 || n ===1) {
    return 1
  }

  return n * factorialRecurssion(n-1)
}

let factorialRec = factorialRecurssion(5)
//console.log(factorialRec)

// Within our function, we have a table that will store our previous values.
function factorialDP(n) {
  let factDP = []
  factDP[0] = 1

  for(let i=1; i<=n; i++) {
    factDP[i] = i * factDP[i-1]
  }

  return factDP[n]
}

let factDP = factorialDP(5)
//console.log(factDP)

// *****************************************************
// Climbing Stairs
// how many ways can you climb N stairs, given that 
// you can take 1 or 2 steps at a given time?
// you can only climb 1 0r 2 stairs with only one step
// *****************************************************

function climbStairs(n) {
  return (n<2) ? n: climbStairs(n-1) + climbStairs(n-2)
}

let numOfStairsRec = climbStairs(10)
//console.log(numOfStairsRec)



function climbStairsDP(n) {
  let steps = []
  steps[0] = 1
  steps[1] = 2

  for(let i=2; i< n; i++ ) {
    steps[i] = steps[i-1] + steps[i-2]
  }
  return steps[n-1]
}

let numOfStairsDP = climbStairsDP(10)
//console.log(numOfStairsDP)

// *****************************************************
// Cutting Rods
// maximization problems
// given a rod of a certain length, along with prices 
// for those lengths selling on the market, find out how
// to cut the rod so you can maximize the profit.
// *****************************************************

//rod of length = 4

// 1 + 1 + 1 + 1 ---> 4
// 1 + 1 + 2  ------> 7
// 2 + 2 -----------> 10
// 3 + 1 -----------> 9
// 4 ---------------> 9

// length 1  2  3  4  5   6   7   8
// price  1  5  8  9  10  17  17  20

// the total revenue we can get from the rod is the 
// price of selling one unit P1, plus the revenue we 
// can make from selling the rest Rev(n – 1).

let rLength = 4
let rPrices = [1,5,8,9]

function totalRevenueRec(rLength, prices) {
  if(rLength === 0) {
    return 0
  }

  let currentMaxRevenue = 0
  for(let i=0; i<rLength; i++) {
    let currentRevenue = prices[(rLength -i) -1]
    if(currentRevenue > currentMaxRevenue) {
      currentMaxRevenue = currentRevenue
    }
  }

  return currentMaxRevenue
}

// let totalRev = totalRevenueRec(rLength, rPrice)
// console.log(totalRev)


function TotalRevenueDP(rLen, prices) {
  //define base on rod length and its revenue
  var r = [];
  r[0] = 0;

  //loop through the different lengths and determine max revenue
  for(var i = 1; i <= rLen; i++) {
      //define a var to store the current max returned from recursion.
      var currentMaxRevenue = 0;
      for(var j = 1; j <= i; j++) {
          var currentRevenue = prices[j - 1] + r[i - j];
          if (currentRevenue > currentMaxRevenue) {
              currentMaxRevenue = currentRevenue;
          }
      }
      r[i] = currentMaxRevenue;
  }
  //finally return the max rev
  return r[rLen];
}

var totalRevDp = TotalRevenueDP(rLength, rPrices);
//console.log('Dynamic Programming: Revenue is ', totalRevDp);

// cleaner syntax
// function dyn(prices, length) {
//   const max = [0];  //len 0 as price 0                                                                                                                
//   for (let i = 1; i <= length; i++) {
//     const ps = prices.slice(0, i)
//     const all = ps.map((p, index) => {
//       return (p + max[i - index - 1])
//     })
//     max[i] = Math.max(...all);
//   }
//   return max[length];
// }
// console.log(dyn(rPrice, rLength))

// *****************************************************
// House Rubber
// You have N houses with a certain amount of money stashed 
// in each house. You can not steal any adjacent houses 
// (this only means that you cannot steal from houses that 
// are next to each other). Given a list of non-negative 
// integers representing the amount of money in each house,
// determine the maximum amount of money you can steal.
// *****************************************************

// F(x) = Math.max(F(i-1), F(i) + F(i-2))

let home_values = [10, 20, 30, 40, 50]

function robDP(homeValues) {
  let maxProficFromhousesToRob = []
  maxProficFromhousesToRob[0] = homeValues[0]
  maxProficFromhousesToRob[1] = Math.max(homeValues[0], homeValues[1])

  for(let i=2; i< homeValues.length; i++) {
    maxProficFromhousesToRob[i] = Math.max(homeValues[i] + maxProficFromhousesToRob[i-2], maxProficFromhousesToRob[i-1])
  }
  return maxProficFromhousesToRob[homeValues.length-1]
}

// console.log(robDP(home_values))


// *****************************************************
// Buy/Sell Stock to Maximize Profit
// The cost of a stock on each day is given in an array 
// (where the ith element is the price at that day). 
// You are only allowed one transaction a day 
// (buy one and sell one). Find the max profit you can 
// make.

// let stockPrice = [100, 10,50, 40, 20]
// maxProfit = buy at day 2 and sell at day 3
// *****************************************************


function maxStockProfit(profit) {

  let profitList = []
  let profitMap = {}
  profitList[0] = profit[0]
  profitList[1] = profitList[0] - profit[1]

  for(let i=0; i< profit.length; i++) {
    let currentProfit = 0
    let maxProfit = 0
    for(let j=i+1 ; j< profit.length; j++) {
      currentProfit = profit[j] - profit[i]
      if(currentProfit > maxProfit) {
        maxProfit = currentProfit
        profitMap[maxProfit] = {'buy':i, 'sell':j }
      }
    }
    profitList[i] = maxProfit
  }
  console.log(profitMap) 
  console.log(profitList)
}

let stockPrice = [100, 10,50, 40, 20]
// maxStockProfit(stockPrice)

// *****************************************************
// Maximum Length Chain of Pairs
// You are given n pairs of numbers. In every pair, 
// the first number is always smaller than the second 
// number. A pair (c, d) can follow another pair (a, b) 
// if b < c. Chain of pairs can be formed in this fashion.
// Find the longest chain which can be formed from a given 
//set of pairs.
// *****************************************************

let chainOfPair = [[3,4], [4,5], [5,6]]

// (a,b) -> (c,d)
// if b < c

function Pair(a,b) {
  this.firstElement = a
  this.secondElement = b
}

function compareFirstElements(a, b) {
  if(a.firstElement < b.firstElement) {
    return -1
  } else if(a.firstElement > b.firstElement) {
    return 1
  } else {
    return 0
  }
}


function maxLength(collection) {
  let sorted = collection.sort(compareFirstElements)
  
  let table = new Array(sorted.length)
  table[0] = 1

  for(let i=1; i< sorted.length; i++) {
    table[i] = table[i-1]

    for(let j=i-1; j>=0; j--) {
      if(sorted[j].secondElement < sorted[i].firstElement) {
        table[i]= Math.max(table[i], table[j] + 1)
      }
    }
  }
  return table[sorted.length -1]
}


var pairA = new Pair(1, 2),
    pairB = new Pair(2, 3),
    pairC = new Pair(3, 4),

    pairD = new Pair(5, 24),
    pairE = new Pair(39, 60),
    pairF = new Pair(15, 28),
    pairG = new Pair(27, 40),
    pairH = new Pair(50, 90),

    pairCollection = [pairF, pairH, pairG ];

// console.log('pairCollection', pairCollection)
// console.log('******************************')
// console.log(maxLength(pairCollection))   


// *****************************************************
// Longest Common Subsequence
// ABAC BDAB & BDC AD B
// ==> 
// *****************************************************

function LCS(S1, S2) {
  let dpArr = []
  let sizeOfS1 = S1.length
  let sizeOfS2 = S2.length
  let finalResult = 0

  const size = sizeOfS1 > sizeOfS2 ? sizeOfS1 : sizeOfS2

  for(let i=0; i< size; i++) {
    dpArr.push([])
  }
  
  if(dpArr[sizeOfS1] === undefined) {
    dpArr[sizeOfS1] = []
  }
  // check to see if result is alreadt stored
  if(dpArr[sizeOfS1][sizeOfS2] !== undefined) {
    return dpArr[sizeOfS1][sizeOfS2]
  }

  if(sizeOfS1 === 0  || sizeOfS2 === 0) {
    finalResult = 0
    // if the last char is the same
  } else if(S1[sizeOfS1 -1] === S2[sizeOfS2 -1]) {
    finalResult = 1 + LCS(S1.slice(0, S1.length-1), S2.slice(0, S2.length-1))
  } else {
    finalResult = Math.max(
      LCS(
        S1.slice(0, S1.length-1), 
        S2),
      LCS(S1, 
        S2.slice(0, S2.length-1))  
    )   
  }
  return finalResult
}

var string_one = "ABACBDAB", //BATD
    string_two = "BDCADB", //ABACD
    lcs = LCS(string_one, string_two)

console.log("Longest Comment Subsequence is: ", lcs);












