class ListNode {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}

class LinkedLists {
    constructor(head = null) {
        this.head = head
    }

    append(value) {
        let node = new ListNode(value)

        // If head is empty, then append to head as first element.
        if(!this.head) {
            this.head = node
            return
        }

        //else, get current head, iterate until last nextNode and append.
        let current = this.head

        while(current.nextNode) {
            current = current.nextNode
        }

        current.nextNode = node
    }

    prepend(value) {
        let node = new ListNode(value)

        //Get the old head.
        let oldHead = this.head
        //Set head to new node.
        this.head = node
        //Set new head's next node to old head.
        this.head.nextNode = oldHead
    }

    size() {
        let current = this.head
        let size = 0

        while(current.nextNode) {
            size++
            current = current.nextNode
        }

        // To count last node too since while loop exits when last node null.
        size++

        console.log(`Size of list: ${size}`)
    }

    headNode() {
        console.log(`Head of list: ${this.head.value}`)
    }

    tailNode() {
        let current = this.head

        while(current.nextNode) {
            current = current.nextNode
        }

        console.log(`Last node in list: ${current.value}`)
    }

    at(index) {
        let current = this.head
        let indexCounter = 0

        while(current.nextNode) {
            if(indexCounter === index) {
                console.log(`Value at index ${index} is '${current.value}'`)
                return
            }
            indexCounter++
            current = current.nextNode
        }
    }

    pop() {
        let current = this.head

        while(current.nextNode) {
            if(current.nextNode.nextNode === null) {
                current.nextNode = null
                return
            }
            current = current.nextNode
        }
    }

    contains(value) {
        let current = this.head

        while(current.nextNode) {
            if(current.value === value) {
                console.log('Yes, value present!')
                return
            }
            current = current.nextNode
        }
        console.log('No, value not present!')
    }

    find(value) {
        let current = this.head
        let indexCounter = 0

        while(current.nextNode) {
            if(current.value === value) {
                console.log(`value '${value}' found at index ${indexCounter}`)
                return
            }
            current = current.nextNode
            indexCounter++
        }

        console.log(`value ${value} not present!`)
    }

    toString() {
        let current = this.head

        // Printing the first element.
        console.log(current.value)

        while(current.nextNode || current.nextNode === null) {
            console.log(current.nextNode)
            current = current.nextNode
        }
    }

}

let list = new LinkedLists()

// Appending elements at the end of list.
list.append('First')
list.append('Second')
list.append('Third')
list.append('Fourth')

// Prepending elements before current head of list.
list.prepend('Zeroth?')

// Size of list
list.size()

console.log('----')

// Head of list
list.headNode()

console.log('----')

// Last node of list
list.tailNode()

console.log('----')

// Print value at index 2
list.at(2)

// Popping last element of list
list.pop()

console.log('----')

// Checking if value is contained within list
list.contains('Zeroth?')

console.log('----')

// Checking which index value is present
list.find('First')

console.log('----')

// Printing the list
list.toString()



