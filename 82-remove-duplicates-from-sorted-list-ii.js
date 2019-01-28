
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
const deleteDuplicates = function(head) {
    let dummy = new ListNode(undefined);
    dummy.next = head;
    let prev = dummy;
    let curr = head;
    
    while(curr) {
      while(curr.next && curr.next.val === curr.val) {
        curr = curr.next;
      }
      if(prev.next === curr) { // detect if it has deleted some elements
        prev = prev.next;
        curr = curr.next;
      } else {
        prev.next = curr.next;
        curr = curr.next;
      }
    }
    
    return dummy.next;
  };
