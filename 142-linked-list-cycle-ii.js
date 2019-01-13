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
const detectCycle = function(head) {
  if(head === null || head.next === null) return null
  let fast = head
  let slow = head
  let start = head
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if(fast === slow) {
       while(slow !== start) {
         slow = slow.next
         start = start.next
       }
       return start
    }
  }
  return null
};

// another method

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
  if (!head) return head;
  let currentNode = head;
  let previousNode = true;
  while (currentNode) {
    if (currentNode.previous) return currentNode
    if (!currentNode.previous) {
      currentNode.previous = previousNode;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  return null;
};
