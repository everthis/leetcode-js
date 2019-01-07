/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
    let aend = null
    let bend = null
    let ahead = headA
    let bhead = headB
    while(headA !== null && headB !== null) {
        if (aend !== null && bend !== null && aend !== bend) {
            return null
        }

        if (headA === headB) {
            return headA
        }

        if (headA.next === null) {
            if(aend === null) {
                aend = headA
            }
            headA = bhead
        } else {
            headA = headA.next

        }
        if (headB.next === null) {
            if(bend === null) {
                bend = headB
            }
            headB = ahead
        } else {
            headB = headB.next
        }

    }

};
