/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
const insert = function (head, insertVal) {
  if (head === null) {
    const node = new Node(insertVal)
    node.next = node
    return node
  }
  let prev = head,
    cur = prev.next
  while (cur != head) {
    if (prev.val > cur.val) {
      if (insertVal >= prev.val || insertVal <= cur.val) break
    }
    if (prev.val <= insertVal && insertVal <= cur.val) break
    prev = cur
    cur = cur.next
  }
  prev.next = new Node(insertVal, cur)
  return head
}
