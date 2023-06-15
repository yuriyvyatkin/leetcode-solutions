/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    // Создаём фиктивный узел
    const dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // Перемещаем fast на n + 1 узел вперед
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Перемещаем fast и slow одновременно до конца списка
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // Удаляем узел, следующий за slow
    slow.next = slow.next.next;

    return dummy.next;
};