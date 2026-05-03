//Reverse Double Linked List

// this question not available on LeetCode, but you can find it on other coding platforms or implement it as a custom problem.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

  reverse() {
    let current = this.head;
    let temp = null;

    while (current) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;

        current = current.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
}
}