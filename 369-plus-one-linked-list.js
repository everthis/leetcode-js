/**

Given a non-negative integer represented as non-empty a singly linked list of digits, plus one to the integer.
You may assume the integer do not contain any leading zero, except the number 0 itself.
The digits are stored such that the most significant digit is at the head of the list.

Example :

Input: [1,2,3]
Output: [1,2,4]

*/

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
const plusOne = function(head) {
  const dummy = new ListNode(1)
  dummy.next = head
  const carry = plusOneRecursion(head)
  return carry ? dummy : dummy.next
}
const plusOneRecursion = node => {
  if (!node) return 1
  node.val += plusOneRecursion(node.next)
  if (node.val > 9) {
    node.val %= 10
    return 1
  }
  return 0
}

// another

const plusOne = function(head) {
  if(head == null) return null
  let inc = false
  const arr = []
  const dummy = new ListNode(1)
  dummy.next = head
  while(head) {
    arr.push(head)
    head = head.next
  }
  let oneAdded = false
  for(let i = arr.length - 1; i >= 0; i--) {
    const el = arr[i]
    let sum 
    if(!oneAdded) {
      sum = el.val + 1
      oneAdded = true
    } else sum = el.val
    if(inc) sum += 1
    arr[i].val = sum % 10
    inc = sum >= 10 ? true : false
  }
  return inc ? dummy : dummy.next 
};
