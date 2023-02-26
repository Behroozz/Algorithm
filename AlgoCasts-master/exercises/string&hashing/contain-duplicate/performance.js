const {
  containDuplicateWithObject,
  containDuplicateWithSet,
} = require("./index");
const { performance } = require("perf_hooks");

/**
 * For small list performance with set is better than object
 * For bigger list performance with hashSet is better
 */
const runTest = (testFunction, testArray) => {
  const start = performance.now();
  const result = testFunction(testArray);
  const end = performance.now();
  console.log("Duration", end - start);
};

let arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push(i);
}

runTest(containDuplicateWithObject, arr);
runTest(containDuplicateWithSet, arr);
