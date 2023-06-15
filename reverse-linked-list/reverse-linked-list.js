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
    if (!head) {
        return head;
    }
    
    let result = new ListNode(head.val);
    
    while (head.next !== null) {
        head = head.next;
        result = new ListNode(head.val, result);
    }
    
    return result;
};