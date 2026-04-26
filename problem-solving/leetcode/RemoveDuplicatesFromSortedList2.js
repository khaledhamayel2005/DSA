
// 83. Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let dummy = new ListNode(-99, head);
  let prev = dummy;
  let current = head;

  while (current) {
    if (current.next && current.next.val === current.val) {
      while (current.next && current.next.val === current.val) {
        current = current.next;
      }

      prev.next = current.next;
    } else {
      prev = current;
    }

    current = current.next;
  }

  return dummy.next;
};