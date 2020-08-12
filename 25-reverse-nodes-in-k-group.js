/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function(head, k) {
  let n = 0
  for (let i = head; i != null; n++, i = i.next);
  let dmy = new ListNode(0)
  dmy.next = head
  for (let prev = dmy, tail = head; n >= k; n -= k) {
    for (let i = 1; i < k; i++) {
      let next = tail.next.next
      tail.next.next = prev.next
      prev.next = tail.next
      tail.next = next
    }

    prev = tail
    tail = tail.next
  }
  return dmy.next
}
