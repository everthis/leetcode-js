/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function(head, m, n) {
    // Empty list
    if (head == null) {
        return null;
    }

    // Move the two pointers until they reach the proper starting point
    // in the list.
    let cur = head, prev = null;
    while (m > 1) {
        prev = cur;
        cur = cur.next;
        m--;
        n--;
    }

    // The two pointers that will fix the final connections.
    let con = prev, tail = cur;

    // Iteratively reverse the nodes until n becomes 0.
    let third = null;
    while (n > 0) {
        third = cur.next;
        cur.next = prev;
        prev = cur;
        cur = third;
        n--;
    }

    // Adjust the final connections as explained in the algorithm
    if (con != null) {
        con.next = prev;
    } else {
        head = prev;
    }

    tail.next = cur;
    return head;
};
