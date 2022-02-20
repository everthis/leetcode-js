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
var mergeNodes = function(head) {
  const dummy = new ListNode()
  const arr = []
  let cur = head
  while(cur) {
    arr.push(cur)
    cur = cur.next
  }
  let tail = dummy
  let lastIdx = 0, sum = 0
  if(arr.length) {
    for(let i = 1; i < arr.length; i++) {
      const tmp = arr[i]
      if(tmp.val === 0 && sum !== 0) {
        lastIdx = i
        tail.next = new ListNode(sum)
        tail = tail.next
        sum = 0
      } else {
        sum += tmp.val
      }
    }
  }
  
  return dummy.next
};
