/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // while (list1 !== null) {
    //     console.log(list1.val)
    //     list1 = list1.next;
    // }
    
//     if (list1.val === list2.val) {
//         const tmp = list2.next;
//         list2.next = new ListNode(list1.val);
//         list2.next.next = tmp;
//     }
    
//     list2 = list2.next;
    
//     console.log(list2)
    
    const mergedList = new ListNode(0);
    let current = mergedList;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        
        current = current.next;
    }
    
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    
    return mergedList.next;
};