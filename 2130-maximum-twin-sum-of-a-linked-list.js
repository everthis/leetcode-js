/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function(head) {
  let slow = head, fast = head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  // reverse
  let next = null, pre = null
  while(slow) {
    next = slow.next
    slow.next = pre
    pre = slow
    slow = next
  }

  let res = 0
  while(pre) {
    res = Math.max(res, pre.val + head.val)
    pre = pre.next
    head = head.next
  }
  
  return res
};

// another

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function(head) {
   const arr = []
   let cur = head
   
   while(cur) {
     arr.push(cur.val)
     cur = cur.next
   }
  
   let res = 0
   for(let i = 0, n = arr.length; i < n / 2; i++) {
     res = Math.max(res, arr[i] + arr[n - 1 - i])
   }
   
   return res
};
