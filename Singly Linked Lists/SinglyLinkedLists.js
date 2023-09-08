class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class Singlist {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++

        return this
    }

    pop() {
        if (!this.head) return undefined
        var current = this.head
        var newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        console.log(newTail)
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        //   console.log(this)
        return current
    }
}
// const node1 = new Node("gs")
// console.log(node1)
const node1 = new Singlist()
node1.push("111")
node1.push("222")
node1.pop()
