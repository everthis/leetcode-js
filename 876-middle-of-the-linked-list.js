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
const middleNode = function (head) {
  if (head == null) return null
  let count = 1
  let iter = head
  while (iter.next) {
    iter = iter.next
    count++
  }
  count = (count / 2) >> 0
  while (count) {
    head = head.next
    count--
  }
  return head
}
