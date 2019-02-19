//Shortest common subsecquence
//given two strings str1 and str2, find the shortest string that has both str1 and str2 as subsequences.

// Input:   str1 = "geek",  str2 = "eke"
// Output: "geeke"

// Input:   str1 = "AGGTAB",  str2 = "GXTXAYB"
// Output:  "AGXGTXAYB"


// function shortestCommonSubSeq (str1, str2) {

// }

// let string1 = "geek"
// let string2 = "eke"
// console.log(shortestCommonSubSeq(string1, string2))

//Longest common subsequence

// LCS for input Sequences ABCDGH and AEDFHR is ADH of length 3.
// LCS for input Sequences AGGTAB and GXTXAYB is GTAB of length 4.

// 1) Optimal Substructure: 
// Let the input sequences be X[0..m-1] and Y[0..n-1] of lengths m and n respectively. 
// And let L(X[0..m-1], Y[0..n-1]) be the length of LCS of the two sequences X and Y. 
// Following is the recursive definition of L(X[0..m-1], Y[0..n-1]).
// If last characters of both sequences match (or X[m-1] == Y[n-1]) then
// L(X[0..m-1], Y[0..n-1]) = 1 + L(X[0..m-2], Y[0..n-2])
// If last characters of both sequences do not match (or X[m-1] != Y[n-1]) then
// L(X[0..m-1], Y[0..n-1]) = MAX ( L(X[0..m-2], Y[0..n-1]), L(X[0..m-1], Y[0..n-2]) )
// L(“AGGTAB”, “GXTXAYB”) = 1 + L(“AGGTA”, “GXTXAY”)

// 2) Overlapping Subproblems:
// Following is simple recursive implementation of the LCS problem. The implementation
// simply follows the recursive structure mentioned above.

//Construct L[m+1][n+1]
// The value L[m][n] contains length of LCS. 

// Traverse the 2D array starting from L[m][n]. Do following for every cell L[i][j]
//  a) If characters (in X and Y) corresponding to L[i][j] are same (Or X[i-1] == Y[j-1]), then include this character as part of LCS.
//  b) Else compare values of L[i-1][j] and L[i][j-1] and go in direction of greater value.

function longestCommonSubsequence(s1, s2) {
  var result = [];
  for (var i=0; i<=s1.length; i++) {
      result.push([]);
      for (var j=0; j<=s2.length; j++) {
          var currValue = 0;
          if (i==0 || j==0) {
              currValue = 0;
          } else if (s1.charAt(i-1) == s2.charAt(j-1)) {
              currValue = result[i-1][j-1] + 1;
          } else {
              currValue = Math.max(result[i][j-1], result[i-1][j]);
          }

        result[i].push(currValue);
      }
  }

  console.log('result', result)

  var i = s1.length;
  var j = s2.length;

// [ [ 0, 0, 0 ],  
//   [ 0, 1, 1 ],  
//   [ 0, 1, 2 ] ,  
//   [ 0, 1, 2 ] ] 

  var s3 = '';
  while (result[i][j] > 0) {
      if(s1.charAt(i-1) == s2.charAt(j-1) && (result[i-1][j-1] +1 == result[i][j])) {
          s3 = s1.charAt(i-1) + s3;
          i = i-1;
          j = j-1;
      } else if (result[i-1][j] > result[i][j-1])
          i = i-1;
      else
          j = j-1;
  }

  return s3;
}

//  let myResult = longestCommonSubsequence('ABC', 'AB')
//  console.log('myResult', myResult)

//     0    A    B
// 0   0    0    0 
// A   0    1    1 ---> (A and AB)
// B   0    1    2
// C   0    1    2


// 1) Find Longest Common Subsequence (lcs) of two given strings. 
// For example, lcs of “geek” and “eke” is “ek”.

// 2) Insert non-lcs characters (in their original order in strings) 
// to the lcs found above, and return the result. So “ek” becomes “geeke”
// which is shortest common supersequence.


function shortestCommonSupersequence(set1, set2) {
  // Let's first find the longest common subsequence of two sets.
  const lcs = longestCommonSubsequence(set1, set2);

  // If LCS is empty then the shortest common supersequence would be just
  // concatenation of two sequences.
  if (lcs.length === 1 && lcs[0] === '') {
    return set1.concat(set2);
  }

  // Now let's add elements of set1 and set2 in order before/inside/after the LCS.
  let supersequence = [];

  let setIndex1 = 0;
  let setIndex2 = 0;
  let lcsIndex = 0;
  let setOnHold1 = false;
  let setOnHold2 = false;

  while (lcsIndex < lcs.length) {
    // Add elements of the first set to supersequence in correct order.
    if (setIndex1 < set1.length) {
      if (!setOnHold1 && set1[setIndex1] !== lcs[lcsIndex]) {
        supersequence.push(set1[setIndex1]);
        setIndex1 += 1;
      } else {
        setOnHold1 = true;
      }
    }

    // Add elements of the second set to supersequence in correct order.
    if (setIndex2 < set2.length) {
      if (!setOnHold2 && set2[setIndex2] !== lcs[lcsIndex]) {
        supersequence.push(set2[setIndex2]);
        setIndex2 += 1;
      } else {
        setOnHold2 = true;
      }
    }

    // Add LCS element to the supersequence in correct order.
    if (setOnHold1 && setOnHold2) {
      supersequence.push(lcs[lcsIndex]);
      lcsIndex += 1;
      setIndex1 += 1;
      setIndex2 += 1;
      setOnHold1 = false;
      setOnHold2 = false;
    }
  }

  // Attach set1 leftovers.
  if (setIndex1 < set1.length) {
    supersequence = supersequence.concat(set1.slice(setIndex1));
  }

  // Attach set2 leftovers.
  if (setIndex2 < set2.length) {
    supersequence = supersequence.concat(set2.slice(setIndex2));
  }

  return supersequence;
}


 let myResult = shortestCommonSupersequence('geek', 'eke')
 console.log('myResult', myResult.join(""))



 