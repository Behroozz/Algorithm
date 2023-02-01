// Input = {1, 2, 3, 4, 5, 6, 7, 8, 9}

// Output: { "Odd" , "Even" , "Odd" , "Even" , "Odd" , "Even" , "Odd" , "Even" , "Odd" }

// 000000001 --> 1
// 000000001
// ---------
// 000000001

// 000000010 --> 2
// 000000001
// ---------
// 000000000

// even --> 2
// odd  --> 1

const isEven = (value) => {
  return (value & 1) === 0;
};

const isOdd = (value) => {
  return (value & 1) !== 0;
};

const res1 = isEven(1);
console.log(res1);
const res2 = isEven(2);
const res3 = isOdd(2);
console.log(res2);
console.log(res3);
