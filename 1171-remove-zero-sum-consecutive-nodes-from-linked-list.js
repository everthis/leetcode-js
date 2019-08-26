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
const removeZeroSumSublists = function(head) {
  let dummy = new ListNode(0), cur = dummy;
  dummy.next = head;
  let prefix = 0;
  let m = new Map();
  while (cur != null) {
    prefix += cur.val;
    if (m.has(prefix)) {
      cur =  m.get(prefix).next;
      let p = prefix + cur.val;
      while (p != prefix) {
        m.delete(p);
        cur = cur.next;
        p += cur.val;
      }
      m.get(prefix).next = cur.next;
    } else {
      m.set(prefix, cur);
    }
    cur = cur.next;
  }
  return dummy.next;
};
