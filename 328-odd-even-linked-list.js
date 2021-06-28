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
const oddEvenList = function(head) {
  if (head === null) return null;
  let odd = head,
    even = head.next,
    evenHead = even;
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
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
 * @return {ListNode}
 */
function oddEvenList(head) {
  if(head == null) return head
  const dummyOdd = new ListNode()
  const dummyEven = new ListNode()
  
  dummyOdd.next = head
  let odd = head, even = dummyEven
  let idx = 2, cur = head.next
  while(cur) {
    if (idx % 2 === 1) {
      odd.next = cur
      odd = odd.next
    } else {
      even.next = cur
      even = even.next
    }
    cur = cur.next
    idx++
  }
  odd.next = dummyEven.next
  even.next = null
  return dummyOdd.next
}
