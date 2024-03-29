// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

const { Node, LinkedList } = require("./linkedlist");

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}

const l = new LinkedList();

l.insertLast("a");
l.insertLast("b");
l.insertLast("c");
l.insertLast("d");
l.insertLast("e");

fromLast(l, 3);

module.exports = fromLast;
