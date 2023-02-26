const { performance } = require("perf_hooks");

function runTest(testFunctuon, input) {
  const start = performance.now();
  testFunctuon(input);
  const end = performance.now();
  console.log("Duration", end - start);
}
