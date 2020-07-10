// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in 
// reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


function addTwoNumbers(l1, l2) {
  const l1R = reverseAndAdd(l1)
  const l2R = reverseAndAdd(l2)
  // console.log('l1R', l1R)
  // console.log('l2R', l2R)
  let sum = l1R + l2R
  return Array.from(String(sum), Number)
}

function linkedListToArray(l) {
  let array = []
  while(l.next !== null) {
    array.push(l.val)
  }
  return array
 }

function reverseAndAdd(l) {
  return parseInt(l.reverse().join(''))
}

let l1 = [2,4,3]
let l2 = [5,6,4]
let Output = [7,0,8]

const res = addTwoNumbers(l1, l2)
console.log('res', res)
