// 420. Strong Password Checker

// A password is considered strong if the below conditions are all met:

// It has at least 6 characters and at most 20 characters.
// It contains at least one lowercase letter, at least one uppercase letter, and at least one digit.
// It does not contain three repeating characters in a row (i.e., "Baaabb0" is weak, but "Baaba0" is strong).
// Given a string password, return the minimum number of steps required to make password strong. if password is already strong, return 0.

// In one step, you can:

// Insert one character to password,
// Delete one character from password, or
// Replace one character of password with another character.

// Example 1:

// Input: password = "a"
// Output: 5
// Example 2:

// Input: password = "aA1"
// Output: 3
// Example 3:

// Input: password = "1337C0d3"
// Output: 0

// Constraints:

// 1 <= password.length <= 50
// password consists of letters, digits, dot '.' or exclamation mark '!'.

var strongPasswordChecker = function (s, a = 6, b = 20, c = 3) {
  const clusters = buildClusters(s, c);
  for (let i = 0; i < s.length - b && clusters.minReplaceCount; i++) {
    deleteOne(clusters, c);
  }
  const mustAddCount = !/[a-z]/.test(s) + !/[A-Z]/.test(s) + !/\d/.test(s);
  return (
    Math.max(0, s.length - b) +
    Math.max(a - s.length, mustAddCount, clusters.minReplaceCount)
  );
};

function buildClusters(s, c) {
  const clusters = new Array(c).fill(0).map((cl) => new Map());
  clusters.minReplaceCount = 0;
  let re = new RegExp(`(.)\\1{${c - 1},}`, "g"),
    match;
  while ((match = re.exec(s))) {
    let len = match[0].length;
    clusters[len % c].set(len, (clusters[len % c].get(len) || 0) + 1);
    clusters.minReplaceCount += Math.floor(len / c);
  }
  return clusters;
}

function deleteOne(clusters, c) {
  const cluster = clusters.find((cl) => cl.size);
  for (const [len, count] of cluster) {
    cluster.set(len, count - 1);
    if (count === 1) cluster.delete(len);
    clusters.minReplaceCount -= len % c === 0;
    if (len === c) break;
    const clusterUpdate = clusters[(len - 1) % c];
    clusterUpdate.set(len - 1, (clusterUpdate.get(len - 1) || 0) + 1);
    break;
  }
}

// The answer for s.length <= b is straightforward since we needn't make any deletions. It's covered by Math.max(a - s.length, mustAddCount, clusters.minReplaceCount) whose components I explain soon.

// For s.length > b we need to make s.length - b deletions, followed by the requisite replacements to satisfy condition #2. However, we must make our deletions prioritizing repeating character clusters which have the smallest length modulo c. This is because clusters divisible by c will reduce the number of replacements necessary to uncluster them (satisfy condition #3). For example, deleting one character from either of 'aaa' or 'aaaaaa' for c = 3 decrements the necessary replacements, from 1->0 and 2->1 respectively.

// We store maps of each cluster type (its length modulo c) in the clusters array. clusters.minReplaceCount tracks the minimum number of replacements to satisfy condition #3 over all clusters. Finally, mustAddCount tracks the replacements necessary to satisfy condition #2.

// The complexity is O(1) time and space when s.length <= b and O(n) time with O(count(clusters)) space when s.length > b. Even though c is a parameter, we can treat it as a constant with respect to time complexity since c * min(n - b, count(clusters)) is bounded by n (s.length).
