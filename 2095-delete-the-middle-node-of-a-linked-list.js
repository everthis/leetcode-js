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
const deleteMiddle = function(head) {
  if(head == null) return head
  const dummy = new ListNode(null, head)
  let n = 0, cur = head
  while(cur) {
    n++
    cur = cur.next
  }
  if(n === 1) return null
  const mid = Math.floor(n / 2)
  cur = dummy.next
  let pre = dummy 
  for(let i = 0; i < n; i++) {
    if(i === mid - 1) {
      pre = cur
      // pre.next = cur.next.next
    }
    if(i === mid) {
      pre.next = cur.next
    }
    if(i > mid) break
    cur = cur.next
  }
  return dummy.next
};
