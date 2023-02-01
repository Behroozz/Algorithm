const assert = require("assert");

// with map
// const unqiueValues = (list) => {
//   const uniqueMap = {};
//   if (list.length === 0) {
//     return 0;
//   }

//   for (let i = 0; i < list.length; i++) {
//     uniqueMap[list[i]] =
//       uniqueMap[list[i]] !== undefined ? uniqueMap[list[i]] + 1 : 0;
//   }

//   return Object.keys(uniqueMap).length;
// };

// with two pointer
const unqiueValues = (list) => {
  if (list.length === 0) return 0;
  let counter = 1;
  let p1 = 0;
  p2 = 0;
  while (p2 < list.length) {
    if (list[p1] === list[p2]) {
      p2 += 1;
    } else {
      p1 = p2;
      counter++;
    }
  }
  return counter;
};

assert(unqiueValues([4, 4, 4, 4]) === 1, "1 unique number");
assert(unqiueValues([]) === 0, "0 unique number");
assert(unqiueValues([-1, 0, 1, 2]) === 4, "4 unique numbers");
assert(unqiueValues([4, 4, 4, 4]) === 1, "1 unique number");
assert(unqiueValues([4, 4, 4, 5, 5, 5]) === 2, "2 unique numbers");
