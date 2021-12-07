/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortLinkedList = function(head) {
  if(head == null) return head
  const dummy = new ListNode(null, head)
  let pre = dummy, cur = head
  while(cur) {
    if(cur.val < 0 && cur !== head) {
      const tmp = cur.next, tmpHead = dummy.next
      dummy.next = cur
      cur.next = tmpHead
      pre.next = tmp
      cur = tmp
    } else {
      pre = cur
      cur = cur.next
    }
  }

  return dummy.next
};
