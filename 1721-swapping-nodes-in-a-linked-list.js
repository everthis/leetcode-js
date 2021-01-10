/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function(head, k) {
  const dummy = new ListNode()
  dummy.next = head
  const arr = []
  let cur = head
  while(cur) {
    arr.push(cur)
    cur = cur.next
  }
  const n = arr.length
  if(k < 1 || k > n) return dummy.next
  let first = arr[k - 1], second = arr[n - k]
  
  arr[k - 1] = second
  arr[n - k] = first
    
  dummy.next = arr[0]
  let pre = arr[0]
  for(let i = 1, len = arr.length; i < len; i++) {
     const tmp = arr[i]
     pre.next = tmp
     pre = tmp
  }
  
  pre.next = null
 
  return dummy.next
};
