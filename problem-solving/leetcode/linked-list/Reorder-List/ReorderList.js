//Reorder Linked List
//https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let current = slow.next;
    slow.next = null; 

    let prev = null;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    let pointer1 = head;
    let pointer2 = prev;

    while (pointer2) {
        let temp = pointer1.next;
        let temp2 = pointer2.next;

        pointer1.next = pointer2;
        pointer2.next = temp;

        pointer1 = temp;
        pointer2 = temp2;
    }
};