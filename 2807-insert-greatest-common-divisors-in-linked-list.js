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
const insertGreatestCommonDivisors = function(head) {
  const dummy = new ListNode()
  
  dummy.next = head
  let cur = head
  while(cur.next) {
    const val = gcd(cur.val, cur.next.val)
    const tmp = new ListNode(val)
    const nxt = cur.next
    cur.next = tmp
    tmp.next = nxt
    
    cur = nxt
  }
  
  return dummy.next
  
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
  }
};
