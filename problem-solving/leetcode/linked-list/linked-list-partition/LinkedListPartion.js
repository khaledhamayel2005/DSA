//LinkedList Partition
//www.lintcode.com/problem/linked-list-partition/description

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