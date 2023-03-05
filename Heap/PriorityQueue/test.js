const MinHeap = require("./index");

describe("MinHeap", () => {
  test("Heapify should work", () => {
    const minHeap = new MinHeap();
    minHeap.heapify([60, 50, 80, 40, 30, 10, 70, 20, 90]);
    expect(minHeap.heap).toEqual([-1, 10, 30, 20, 50, 80, 70, 40, 90, 60]);
  });
  test("Heap pop should work", () => {
    const minHeap = new MinHeap();
    minHeap.heapify([60, 50, 80, 40, 30, 10, 70, 20, 90]);
    expect(minHeap.pop()).toEqual(10);
  });
  test("Heap push should work", () => {
    const minHeap = new MinHeap();
    minHeap.heapify([60, 50, 80, 40, 30, 10, 70, 20, 90]);
    minHeap.push(100);
    expect(minHeap.heap).toEqual([-1, 10, 30, 20, 50, 80, 70, 40, 90, 60, 100]);
    minHeap.push(9);
    console.log("minHeap.heap", minHeap.heap);
    expect(minHeap.heap).toEqual([
      -1, 9, 10, 20, 50, 30, 70, 40, 90, 60, 100, 80,
    ]);
  });
});
