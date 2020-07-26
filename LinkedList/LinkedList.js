class Node {
  constructor(value) {
    this.value= value
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null
  }

  add(value) {
    const newNode = new Node(value)

    let current = this.head
    if(!current) {
      this.head = newNode
      return
    }
    let prev =  current
    while(current.next) {
      if(current.value < newNode.value) {
        current = current.next
      } else {
        break
      }
    }

    if(current.value < newNode.value) {
      current.next = newNode      
    } else {
      if(this.head = prev) {
        this.head = newNode
        newNode.next = prev
      } else {
        prev.next = newNode
        newNode.next = current
      }
    }    
  }
}

const linkedList = new LinkedList()
linkedList.add(2)
linkedList.add(6)
linkedList.add(10)
linkedList.add(1)
linkedList.add(11)

console.log(JSON.stringify(linkedList, null, 1))