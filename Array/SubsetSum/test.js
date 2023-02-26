const { subsetSumBT } = require("./index");

test("subsetSumBT should return correctly", () => {
  expect(subsetSumBT([2, 7, 11, 15], 9)).toEqual([[0, 1]]);
  expect(subsetSumBT([3, 2, 4], 6)).toEqual([[1, 2]]);
  expect(subsetSumBT([3, 3], 6)).toEqual([[0, 1]]);
  expect(subsetSumBT([1, 5, 11, 5], 11)).toEqual([[2], [0, 1, 3]]);
});
