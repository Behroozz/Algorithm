// Merge two sorted linked lists and return it as a new sorted list. 
// The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  let mergeLinkedList = new LinkedList()
  travesList(l1, mergeLinkedList)
  travesList(l2, mergeLinkedList)

  return mergeLinkedList
}

const travesList = (l, mergeLinkedList) => {
  let h = l.head
  while(h.next) {
    mergeLinkedList.addSorted(h.value)
    h = h.next
  }
  mergeLinkedList.addSorted(h.value)
}

class Node {
  constructor(value, next= null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  addSorted(value) {
    let current = this.head
    let prev = null

    if(!current) {
      this.head = new Node(value)
      return
    }

    while(current && current.value <= value) {
      prev = current
      current = current.next
    }

    let temp = prev.next
    prev.next = new Node(value)
    prev.next.next = temp
  }
}

const l1 = new LinkedList()
l1.addSorted(1)
l1.addSorted(2)
l1.addSorted(4)

const l2 = new LinkedList()
l2.addSorted(1)
l2.addSorted(3)
l2.addSorted(4)

const mergeLinkedList = mergeTwoLists(l1, l2)
console.log(JSON.stringify(mergeLinkedList))
