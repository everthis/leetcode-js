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
const insertionSortList = function(head) {
  const dummy = new ListNode()
  dummy.next = head
  let insert = dummy
  let cur = head
  while (cur && cur.next) {
    if (cur.val < cur.next.val) {
      cur = cur.next
      continue
    }
    insert = dummy
    while (insert.next.val < cur.next.val) {
      insert = insert.next
    }
    const temp = cur.next
    cur.next = temp.next
    temp.next = insert.next
    insert.next = temp
  }
  return dummy.next
}
