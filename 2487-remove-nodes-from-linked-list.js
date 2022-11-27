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
const removeNodes = function(head) {
  const arr = []
  let cur = head
  while(cur) {
    arr.push(cur)
    cur = cur.next
  }
  
  const stk = []
  for(const e of arr) {
    while(stk.length && e.val > stk[stk.length - 1].val) {
      stk.pop()
    }
    stk.push(e)
  }
  
  for(let i = 0; i < stk.length - 1; i++) {
    const cur = stk[i]
    cur.next = stk[i + 1]
  }
  
  return stk[0]
};
