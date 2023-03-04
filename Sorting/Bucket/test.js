const { BucketSort, BucketSortWithLinkedList } = require("./index");

describe("BucketSort", () => {
  test("Bucket sort should return correctly", () => {
    expect(BucketSort([2, 2, 1, 0, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test("Bucket sort for empty list should return correctly", () => {
    expect(BucketSort([])).toEqual([]);
  });
});

describe("BucketSortWithLinkedList", () => {
  test("Bucket sort should return correctly", () => {
    expect(BucketSortWithLinkedList([2, 2, 1, 0, 1, 0])).toEqual([
      0, 0, 1, 1, 2, 2,
    ]);
  });

  test("Bucket sort for empty list should return correctly", () => {
    expect(BucketSortWithLinkedList([])).toEqual([]);
  });
});
