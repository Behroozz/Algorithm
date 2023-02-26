const groupAnagram = require("./index");

test("", () => {
  expect(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
    ["bat"],
    ["nat", "tan"],
    ["ate", "eat", "tea"],
  ]);
  expect(groupAnagram([""])).toEqual([[""]]);
  expect(groupAnagram(["a"])).toEqual([["a"]]);
});
