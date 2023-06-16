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
    if (!head || !head.next) {
        return true;
    }
    
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let revSecondHalf = new ListNode(slow.val);
    
    while (slow.next) {
        slow = slow.next;
        revSecondHalf = new ListNode(slow.val, revSecondHalf);
    }
    
    while (revSecondHalf) {
        console.log(revSecondHalf.val)
        if (revSecondHalf.val !== head.val) {
            return false;
        }
        
        revSecondHalf = revSecondHalf.next;
        head = head.next;
    }
    
    return true;
};