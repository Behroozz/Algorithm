// 1 1 2 3 5 8 13

// f(n) = f(n - 1) + f(n - 2)

// recursion
// const fibonacci = (n) => {
//   if (n === 1) {
//     return 1;
//   }
//   if (n === 2) {
//     return 1;
//   }

//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// const result = fibonacci(6);
// console.log(result);

// recursion with helper
const memoizedFibonacci = (n) => {
  let memoize = {};

  const helper = (n) => {
    if (n in memoize) return memoize[n];

    if (n === 1 || n === 2) return 1;

    memoize[n] = helper(n - 1) + helper(n - 2);
    return memoize[n];
  };

  return helper(n);
};

const memResult = memoizedFibonacci(6);
console.log(memResult);
