/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = 0;
    let node = {};
    let toReturn = node;
    
    while (l1 != null || l2 != null) {
        if (node.next)
            node = node.next;
        result += ((l1 ? l1.val : 0) + (l2 ? l2.val : 0));
        l1 = (l1 ? l1.next : null);
        l2 = (l2 ? l2.next : null);

        if (result > 9) {
            node.val = result - 10;
            result = 1;
        } else {
            node.val = result;
            result = 0;
        }

        node.next = {};
    }

    if (result == 1) {
        node.next = {
            val: 1,
            next: null
        };
    } else  {
        node.next = null;
    }
    return toReturn
};