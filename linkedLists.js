// Implementation of a linked list.

// A linked list contains a collections of nodes,
// Each node contains its own data & the reference to the next node.
// The head is the start of the linked list.
// The tail is the end of the linked list.

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const node = new ListNode(data);

        // If head is empty, then make node head.
        if (!this.head) {
            this.head = node;
        }
        // else get current head, iterate to next node until
        // - reaching the end to append new node.
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    prepend(data) {
        const node = new ListNode(data)
        node.next = this.head
        this.head = node
    }

    size() {
        let current = this.head
        let size = 0
        while(current) {
            size++
            current = current.next
        }
        console.log(`size: ${size}`)
    }

    headNode() {
        console.log(`head: ${this.head.data}`)
    }

    tailNode() {
        if (!this.head) {
            console.log("Linked list is empty");
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        console.log(`Tail: ${current.data}`);
    }

    at(index) {
        let current = this.head
        let count = 0

        while(current.next) {
            if(count === index) {
                console.log(current.data + ' at index ' + count)
                return
            } else {
                current = current.next
                count++
            }
        }
    }

    findIndex(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.data === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    pop() {
        if (!this.head) {
            console.log("Linked list is empty");
            return;
        }

        // If there is only one node in the list
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }

        // Set the next pointer of the second last node to null
        current.next = null;
    }

    toString() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// The list.
const linkedList = new LinkedList();

// Appending elements to list.
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.pop()

linkedList.headNode()
linkedList.tailNode()
linkedList.at(1)
console.log(linkedList.findIndex(2))

linkedList.prepend(0)

linkedList.toString(); // 1 2 3
linkedList.size(); // 3














