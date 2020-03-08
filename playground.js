

function fibonachi(n) {
  if(n < 2) {
    return n
  }
  return fibonachi(n-2) + fibonachi(n-1)  
}


// const result = fibonachi(6)
// console.log(result)



function DPfibonachi(n) {
  let sequence = []
  sequence[0] = 0
  sequence[1] = 1

  if(n < 2) return n

  for(let i=2; i< n; i++) {
    sequence[i] = sequence[i-1] + sequence[i-2]
  }

  return sequence
}


const result1 = DPfibonachi(5)
console.log('result1', result1[result1.length -1 ])


  //                  f(5)
  //       f(3)                 f(4)
  //    f(2) f(1)             f(3)   f(2)
  // f(0) f(1)             f(2)  f(1)  f(1)   f(0)
  //                   f(1) f(0)


// int fibo(int n) {
//     return fiboRec(n, new int[n+1]);
// }

// int fiboRec(int n, int[] memo) {
//     if (n == 0) return 0;
//     if (n == 1) return 1;
//     if (memo[n] == 0) memo[n] = fiboRec(n-1, memo) + fiboRec(n-2, memo);
//     return memo[n];
// }


function fiboDynamicTopDownMemo(n) {
  const memo = Array(n+1).fill(0)
  return fibo(n, memo)
}

function fibo(n, memo) {
  if(n === 0) return 0
  if(n === 1) return 1

  if(memo[n]=== 0) {
    memo[n] = fibo(n-1, memo) + fibo(n-2, memo)
  }
  console.log('memo', memo)
  return memo[n]
}



const result2 = fiboDynamicTopDownMemo(5)

console.log('result2', result2)
