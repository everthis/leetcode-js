/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function(head, k) {
    if (head === null || head.next === null) return head;
    const dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy,slow = dummy;

    let i;
    for (i = 0; fast.next != null; i++)//Get the total length 
    	fast = fast.next;
    
    for (let j = i - k % i; j > 0; j--) //Get the i-n%i th node
    	slow = slow.next;
    
    fast.next = dummy.next; //Do the rotation
    dummy.next = slow.next;
    slow.next = null;
    
    return dummy.next;
};
