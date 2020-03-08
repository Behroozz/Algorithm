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


//                  f(5)
//       f(3)                 f(4)
//    f(2) f(1)             f(3)   f(2)
// f(0) f(1)             f(2)  f(1)  f(1)   f(0)
//                   f(1) f(0)

// many duplicate caculation


// Dynamic programing, top down, memoizaiton

function fiboDynamicMemo(n) {
  const memo = Array(n+1).fill(0)
  return fibo(n, memo)
}

function fibo(n, memo) {
  if(n === 0 ) return 0
  if(n === 1 ) return 1

  if(memo[n] === 0) {
    memo[n] = fibo(n-1, memo) + fibo(n-2, memo)
  }

  return memo[n]
}

const resultFinal = fiboDynamicMemo(5)
console.log('resultFinal', resultFinal)

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

