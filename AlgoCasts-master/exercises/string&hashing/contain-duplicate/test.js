const { containDuplicateWithSet } = require("./index");

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  console.log.mockRestore();
});

test("Contain duplicate should return corectly", () => {
  expect(containDuplicateWithSet([1, 2, 3, 1])).toEqual(true);
  expect(containDuplicateWithSet([1, 2, 3, 4])).toEqual(false);
  expect(containDuplicateWithSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  expect(containDuplicateWithSet([])).toEqual(false);
});
