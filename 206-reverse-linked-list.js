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
const reverseList = function(head) {
  let prev = null;
  let cur = head;
  let tmp;
  let tmpNext;
  while (cur !== null) {
    tmp = cur;
    tmpNext = cur.next;
    cur.next = prev;
    prev = tmp;
    cur = tmpNext;
  }

  return prev;
};
