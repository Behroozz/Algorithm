// Power Set: Power set P(S) of a set S is the set of all subsets of S. For example S = {a, b, c} then P(s) = {{}, {a}, {b}, {c}, {a,b}, {a, c}, {b, c}, {a, b, c}}.
// If S has n elements in it then P(s) will have 2n elements

// Example:

// Set  = [a,b,c]
// power_set_size = pow(2, 3) = 8
// Run for binary counter = 000 to 111

//  0,1,2
// [a,b,c]

// Value of Counter            Subset
//    000                    -> Empty set
//    001                    -> a
//    010                    -> b
//    011                    -> ab
//    100                    -> c
//    101                    -> ac
//    110                    -> bc
//    111                    -> abc

//https://blog.devgenius.io/power-set-algorithm-with-recursion-or-bits-cc3ffcfc0daa
// const printPowerSet = (set) => {
//   const setSize = Math.pow(2, set.length);
//   console.log("setSize", setSize);

//   for (let i = 0; i < setSize; i++) {
//     let res = [];
//     for (let j = 0; j < set.length; j++) {
//       //      const bitRep = Number(i).toString(2);

//       if ((i & (1 << j)) > 0) {
//         res.push(set[j]);
//       }
//     }
//     console.log(res);
//   }
// };

// Driver program to test printPowerSet
// let set = ["a", "b"];
// const res = printPowerSet(set, 2);
// console.log("res", res);

const powerSet = (set) => {
  const setSize = Math.pow(2, set.length);

  for (let counter = 0; counter < setSize; counter++) {
    let res = [];
    for (let i = 0; i < set.length; i++) {
      if ((counter & (1 << i)) === 0) {
        res.push(set[i]);
      }
    }
    console.log(res);
    // return res;
  }
};

const res2 = powerSet(["a", "b", "c"]);
console.log("res", res2);
