//Reverse Linked List part 2 
//https://leetcode.com/problems/reverse-linked-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(-66, head);

    let prev = dummy;
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let current = prev.next;

    for (let i = 0; i < right - left; i++) {
        let toMove = current.next;

        current.next = toMove.next;
        toMove.next = prev.next;
        prev.next = toMove;
    }

    return dummy.next;
};