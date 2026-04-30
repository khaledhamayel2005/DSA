# Linked List Problems Solutions

## Table of Contents
1. [Reverse Linked List](#reverse-linked-list)
2. [Middle of the Linked List](#middle-of-the-linked-list)
3. [Linked List Cycle](#linked-list-cycle)
4. [Linked List Cycle II](#linked-list-cycle-ii)
5. [Convert Binary Number in Linked List to Integer](#convert-binary-number-in-linked-list-to-integer)
6. [Palindrome Linked List](#palindrome-linked-list)
7. [Remove Duplicates from Sorted List](#remove-duplicates-from-sorted-list)
8. [Remove Duplicates from Sorted List II](#remove-duplicates-from-sorted-list-ii)
9. [Linked List Partition](#linked-list-partition)
10. [Find Middle](#find-middle)

---

## Reverse Linked List

**Problem:** Reverse a singly-linked list.

**LeetCode Link:** [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

**Solution:**
```javascript
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
var reverseList = function(head) {
    
    let current = head;
    let prev = null;
    let nex = null;

    while(current){
        nex = current.next;
        current.next = prev;
        prev = current;
        current = nex;
    }
    return prev;
};
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

---

## Middle of the Linked List

**Problem:** Given a non-empty, singly linked list with head node head, return a middle node of linked list. If there are two middle nodes, return the second middle node.

**LeetCode Link:** [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

**Solution:**
```javascript
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
var middleNode = function(head) {
    
    if(head === null || head.next === null){
        return head;
    }
    let fast = head;
    let slow = head;

    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)  
**Approach:** Floyd's cycle detection algorithm (Tortoise and Hare)

---

## Linked List Cycle

**Problem:** Given head, the head of a linked list, determine if the linked list has a cycle in it. Return true if there is a cycle in the linked list. Otherwise, return false.

**LeetCode Link:** [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

**Solution:**
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null || head.next === null) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)  
**Approach:** Floyd's cycle detection algorithm

---

## Linked List Cycle II

**Problem:** Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

**LeetCode Link:** [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)

**Solution:**
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            slow = head;
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;

        }
    }  
    return null;
};
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)  
**Approach:** Floyd's cycle detection algorithm with two-phase detection

---

## Convert Binary Number in Linked List to Integer

**Problem:** Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number. Return the decimal value of the number in the linked list.

**LeetCode Link:** [Convert Binary Number in a Linked List to Integer](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)

**Solution:**
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let result = 0;
    while(head){
        result = result * 2 + head.val;
        head = head.next;
    }

    return result;
};
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

---

## Palindrome Linked List

**Problem:** Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

**LeetCode Link:** [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

**Solution:**
```javascript
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
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)  
**Approach:** Find middle, reverse second half, compare two halves

---

## Remove Duplicates from Sorted List

**Problem:** Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

**LeetCode Link:** [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

**Solution:**
```javascript
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
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

---

## Remove Duplicates from Sorted List II

**Problem:** Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

**LeetCode Link:** [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)

**Solution:**
```javascript
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
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

---

## Linked List Partition

**Problem:** Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x. You should preserve the original relative order of the nodes in each of the two partitions.

**Link:** [Linked List Partition](https://www.lintcode.com/problem/linked-list-partition/description)

**Solution:**
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
    let dummy1 = new ListNode(-66);
    let dummy2 = new ListNode(-66);
    let first = dummy1;
    let second = dummy2;

    while(head){
        if(head.val < x){
            first.next = head;
            head = head.next;
            first = first.next;  
        }else{
            second.next = head;
            head = head.next;
            second = second.next;
        }

       
    }

        second.next = null;
        first.next = dummy2.next;

    return dummy1.next;

};
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

---

## Find Middle

**Problem:** Find the middle node of a linked list.

**Solution:**
```javascript
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
var middleNode = function(head) {
    
    if(head === null || head.next === null){
        return head;
    }
    let fast = head;
    let slow = head;

    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)  
**Approach:** Two-pointer technique (Floyd's Cycle Detection)

---

## Summary

These solutions cover essential linked list problems that test your understanding of:
- Pointer manipulation
- Two-pointer technique
- Cycle detection
- Reversing lists
- Finding midpoints
- Removing duplicates
- Partitioning lists

All solutions are optimized for both time and space complexity.
