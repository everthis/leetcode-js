/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const nextLargerNodes = function(head) {
  const A = []
  while (head != null) A.push(head.val), (head = head.next)
  const res = new Array(A.length).fill(0)
  const stack = []
  for (let i = 0; i < A.length; i++) {
    while (stack.length && A[stack[stack.length - 1]] < A[i])
      res[stack.pop()] = A[i]
    stack.push(i)
  }
  return res
}
