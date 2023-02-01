class Stack {
    constructor() {
        this.stack = []
    }
    push(data) {
        this.stack.push(data)
    }

    pop() {
        return this.stack.pop()
    }
    isEmpty() {
        return this.stack.length === 0
    }
}

class Queue {
    constructor() {
        this.mainStack =  new Stack()
        this.tempStack =  new Stack()
    }

    enqueue(data) {
        this.mainStack.push(data)
    }
    
    dequeue() {
        if(this.tempStack.isEmpty()) {
            let current = this.mainStack.pop()
            while(current) {
                this.tempStack.push(current)
                current = this.mainStack.pop()
            }
        }
        return this.tempStack.pop()
    }
}


const myQueue = new Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)

console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
myQueue.enqueue(4)
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
