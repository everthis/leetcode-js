/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  if (head.next === null) return null;

  let ptrBeforeN = head;
  let count = 1;

  // While there are more elements
  let el = head.next;
  while (el !== null) {
    if (count > n) ptrBeforeN = ptrBeforeN.next;
    el = el.next;
    count++;
  }

  if (count === n) return head.next;

  ptrBeforeN.next = ptrBeforeN.next.next;
  return head;
};
