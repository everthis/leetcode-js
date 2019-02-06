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

const sortList = function(head) {
    if (!head || !head.next) return head;
    let fast = head;
    let slow = head;
    let pre = null;
    while (fast && fast.next) {
        pre = slow;
        fast = fast.next.next;
        slow = slow.next;
    }
    pre.next = null;
    const left = sortList(head);
    const right = sortList(slow);
    return merge(left, right);
}


function merge(left, right) {
    const dummy = new ListNode(0);
    let list = dummy
    while (left && right) {
        if (left.val < right.val) {
            list.next = left;
            left = left.next;
        } else {
            list.next = right;
            right = right.next;
        }
        list = list.next;
    }
    if (left) {
        list.next = left;
    }
    if (right) {
        list.next = right;
    }
    return dummy.next;
}
