class Node {
    constructor(val) {
        this.val = val
        this.next = this.val
    }
}
class SinglyLinkLists {
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
        console.log(this)
        return current
    }

    shift() {
        if (!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }

        return currentHead
    }
    unshift(val) {
        let unshiftNode = new Node(val)
        if (!this.head) {
            this.head = unshiftNode
            this.tailthis.head
        }
        else {
            unshiftNode.next = this.head
            this.head = unshiftNode
        }
        this.length++
        console.log(this)
        return this
    }
    get(index) {
        if (index < 0 || index > this.length) return null
        let current = this.head
        let getvalue = current
        let count = 0
        while (count !== index) {
            getvalue = current
            current = current.next
            count++
        }
        return getvalue
    }

}
// const node1 = new Node("gs")
// console.log(node1)
const node1 = new SinglyLinkLists()
node1.push("111")
node1.push("222")
node1.push("333")
node1.push("444")
node1.pop()
node1.pop()
node1.pop()
