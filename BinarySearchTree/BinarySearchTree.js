class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while (true) {
                if (current?.value === value) { return false }
                if (value < current?.value) {
                    if (current.left === null) {
                        current.left = newNode
                        return this

                    } else {
                        current = current.left
                    }
                } else if (value > current?.value) {
                    if (current.right === null) {
                        this.right = newNode
                        return this
                    }
                    else {
                        current = current.right
                    }
                }


            }
        }

    }
}


const node1 = new BinarySearchTree()
node1.insert(8)
node1.insert(4)
node1.insert(9)




