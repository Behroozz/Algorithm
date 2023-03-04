// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

// Constraints:

// 1 <= words.length <= 500
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// k is in the range [1, The number of unique words[i]]

var topKFrequent = function (nums, k) {
  let buckets = [];
  let output = [];
  let freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  for ([num, freq] of freqMap) {
    if (buckets[freq] === undefined) {
      buckets[freq] = [num];
    } else {
      buckets[freq].push(num);
    }
  }

  for (let i = buckets.length - 1; i > 0; i--) {
    if (buckets[i] === undefined) continue;
    output.push(...buckets[i].sort());
    if (output.length > k) return output.slice(0, k);
  }
  return output;
};

topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2);
topKFrequent(
  ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
  4
);
