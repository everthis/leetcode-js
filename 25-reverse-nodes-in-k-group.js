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
const reverseKGroup = function(head, k) {
  let n = 0
  for (let i = head; i != null; n++, i = i.next);
  let dmy = new ListNode(0)
  dmy.next = head
  for (let prev = dmy, tail = head; n >= k; n -= k) {
    for (let i = 1; i < k; i++) {
      let next = tail.next.next
      tail.next.next = prev.next
      prev.next = tail.next
      tail.next = next
    }

    prev = tail
    tail = tail.next
  }
  return dmy.next
}

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
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
  if(head == null) return head
  const dummy = new ListNode()
  dummy.next = head
  let n = 0, cur = head
  while(cur) {
    n++
    cur = cur.next
  }
  if(n < k) return head
  let pre = dummy, tail = head

  for(let i = 0; i + k <= n; i += k) {
    for(let j = 1; j < k; j++) {
      const tmp = pre.next
      pre.next = tail.next
      tail.next = tail.next.next
      pre.next.next = tmp
    }
    pre = tail
    tail = tail.next
  } 
  
  return dummy.next
}



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
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
  let ptr = head
  let ktail = null

  // Head of the final, moified linked list
  let new_head = null

  // Keep going until there are nodes in the list
  while (ptr != null) {
    let count = 0

    // Start counting nodes from the head
    ptr = head

    // Find the head of the next k nodes
    while (count < k && ptr != null) {
      ptr = ptr.next
      count += 1
    }

    // If we counted k nodes, reverse them
    if (count == k) {
      // Reverse k nodes and get the new head
      let revHead = reverseLinkedList(head, k)

      // new_head is the head of the final linked list
      if (new_head == null) new_head = revHead

      // ktail is the tail of the previous block of
      // reversed k nodes
      if (ktail != null) ktail.next = revHead

      ktail = head
      head = ptr
    }
  }

  // attach the final, possibly un-reversed portion
  if (ktail != null) ktail.next = head

  return new_head == null ? head : new_head
}

function reverseLinkedList(head, k) {
  // Reverse k nodes of the given linked list.
  // This function assumes that the list contains
  // atleast k nodes.
  let new_head = null
  let ptr = head

  while (k > 0) {
    // Keep track of the next node to process in the
    // original list
    let next_node = ptr.next

    // Insert the node pointed to by "ptr"
    // at the beginning of the reversed list
    ptr.next = new_head
    new_head = ptr

    // Move on to the next node
    ptr = next_node

    // Decrement the count of nodes to be reversed by 1
    k--
  }

  // Return the head of the reversed list
  return new_head
}
