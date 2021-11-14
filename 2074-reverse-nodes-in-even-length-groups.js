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
const reverseEvenLengthGroups = function(head) {
  const arr = []
  let cur = head
  while(cur) {
    arr.push(cur)
    cur = cur.next
  }
  let len = 1, res = []
  for(let i = 0, n = arr.length; i < n; ) {
    let backup = len, tmp = [], rev = len % 2 === 0
    while(len && i < n) {
      tmp.push(arr[i])
      i++
      len--
    }
    if((tmp.length % 2 === 0) ) {
      tmp.reverse()
    }
    res.push(...tmp)
    len = backup + 1
  }
  for(let i = 0; i < res.length; i++) {
    if(i === res.length - 1) res[i].next = null
    else {
      res[i].next = res[i + 1]
    }
  }
  
  return res[0]
};
