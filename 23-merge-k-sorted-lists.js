/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  return merge(lists, 0, lists.length - 1)
}
function merge(lists, l, r) {
  if (l > r) return null
  if (l === r) return lists[l]
  let m = Math.floor((r + l) / 2)
  let left = merge(lists, l, m)
  let right = merge(lists, m + 1, r)
  let head = new ListNode(0)
  let dummy = head
  while (left && right) {
    if (left.val <= right.val) {
      head.next = left
      left = left.next
    } else {
      head.next = right
      right = right.next
    }
    head = head.next
  }
  head.next = left ? left : right
  return dummy.next
}
