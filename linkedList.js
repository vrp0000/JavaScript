//Implement / Test Linked List Using objects

let a = {value : 1};
let b = a;

b.value = 2;
b.newEntry = 3;

console.log("in Object A newentry ", a.newEntry);
console.log("Object A ", a);
console.log("Object B ", b);

// Implement Linked List using objects

class Node {
    constructor(value) {
        this.value =value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertNode(value) {
        const newNode = new Node(value);
        console.log("New node ", newNode);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    deleteNode() {
        let currentNode = this.head;
        let prevNode = null;
        while (currentNode.next !== null) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = null;
        console.log("Deleted Node ", currentNode.value);
    }

    printList() {
        let current = this.head;
        console.log("Printing Linked list: \n")
        while (current.next !== null) {
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value);
    }

    reverseList() {
        let prev = null, current = this.head,  next = null;
        
        while (current.next !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next
        }
        current.next = prev;
        this.head = current;
    }
};

let linkedList = new LinkedList();
linkedList.insertNode(1);
linkedList.insertNode(2);
linkedList.insertNode(3);
linkedList.insertNode(4);
linkedList.printList();

linkedList.deleteNode();
linkedList.printList();

linkedList.insertNode(5);

console.log("Before reversing list: \n");
linkedList.printList();
linkedList.reverseList();
console.log("After reversing list: \n");
linkedList.printList();