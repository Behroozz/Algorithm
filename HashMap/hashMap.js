

//1*****************************************************/
// Given a non-empty array of integers, return the third maximum number in 
// this array. If it does not exist, return the maximum number. The time 
// complexity must be in O(n).

// Example 1:
// let Input = [3, 2, 1]

// Output: 1

// Explanation: The third maximum is 1.
// Example 2:
let Input  = [1, 2]

// Output: 2

// Explanation: The third maximum does not exist, so the maximum (2) 
// is returned instead.
// Example 3:
// let Input =  [2, 2, 3, 1]

// Output: 1

// Explanation: Note that the third maximum here means the third maximum 
// distinct number.
// Both numbers with value 2 are both considered as second maximum.
// function findThirdMaxNumber(array) {
//   let newArray = [...new Set(array)]
//   let map =  {}
//   let max = 0
//   let secondMax = 0
//   let thirdMax = 0
//   for(let i=0; i< newArray.length ; i++) {
//     if(newArray[i] > max) {
//       max = newArray[i]
//       map[i] =  max
//     } else if(newArray[i] > secondMax ) {
//       secondMax =  newArray[i]
//     } else if(newArray[i] > thirdMax) {
//       thirdMax =  newArray[i]
//     }
//   }

//   if(thirdMax === 0) {
//     return max
//   }

//   console.log('max', max)
//   console.log('secondMax', secondMax)
//   console.log('thirdMax', thirdMax)
//   console.log('map', map)
// }

// const result = findThirdMaxNumber(Input)
// console.log('result', result)

//2*****************************************************/
// In a town, there are N people labelled from 1 to N.  
// There is a rumor that one of these people is secretly the town judge.
// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

// Example 1:

//let N = 2, trust = [[1,2]]
//Output: 2

//Example 2:

// let N = 3, trust = [[1,3],[2,3]]
//Output: 3
//Example 3:

// let N = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1
// Example 4:

// let N = 3, trust = [[1,2],[2,3]]
// Output: -1
// Example 5:

let N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
//Output: 3

function findTownJudge(N, trust) {
 var graph = new Map ()
    for (let i = 1; i <= N; i ++) {
      graph.set(i, 1)
    }
    for (let [v, e] of trust) {
      console.log(v, e)
      graph.set(v, graph.get(v) - 1) // the node which is not  trusted -1
      graph.set(e, graph.get(e) + 1) // the node which is  trusted + 1
    }
    // console.log('graph', graph)

    for (let [key, value] of graph) {
      if (value === N) return key
    }
    return -1  
}

let res = findTownJudge(N, trust)

console.log('res', res)

