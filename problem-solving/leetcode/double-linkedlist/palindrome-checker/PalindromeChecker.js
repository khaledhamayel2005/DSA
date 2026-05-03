//Palindrome Checker
// Given a doubly linked list, implement a function to check if the list is a palindrome. A palindrome is 
// a sequence that reads the same backward as forward.


// This question is'nt available on LeetCode, but you can find it on other coding platforms or implement it as a custom problem.
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
    
    

    palindromeChecker() {
        if(!this.head) return true;

        let left = this.head;
        let right = this.tail;

        while(left !== right ){ //Optional : left !== right && left.prev !== right
            if(left.value !== right.value) return false;
            
            left = left.next;
            right = right.prev;
        }
        return true;
    }
}