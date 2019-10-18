/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
  const dummy = new ListNode(Infinity)
  if(head == null) return null
  dummy.next = head
  let cur = head
  let prev = dummy
  while(cur) {
    if(cur.val === val) {
      prev.next = cur.next
      cur = cur.next
    } else {
      prev = cur
      cur = cur.next
    }
  }
  return dummy.next
};
