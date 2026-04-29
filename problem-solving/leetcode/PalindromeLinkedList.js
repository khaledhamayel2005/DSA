/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let current = slow;
    let prev = null;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    let right = prev;
    let left = head;

    while (right) {
        if (right.val !== left.val) {
            return false;
        }
        right = right.next;
        left = left.next;
    }

    return true;
};