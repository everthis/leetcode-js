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
const deleteDuplicatesUnsorted = function(head) {
  const set = new Set()
  const del = new Set()
  let cur = head
  
  while(cur) {
    if(set.has(cur.val)) {
      del.add(cur.val)
    } else {
      set.add(cur.val)

    }
    cur = cur.next    
  }
  
  const dummy = new ListNode()
  dummy.next = head
  cur = dummy
  
  while(cur) {
    if(cur.next) {
      if(del.has(cur.next.val)) {
        cur.next = cur.next.next
      } else {
        cur = cur.next
      }
    } else {
      cur = cur.next        
    }
  }
  
  return dummy.next
};
