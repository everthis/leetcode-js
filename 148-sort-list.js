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

const sortList = function(head) {
    if (!head || !head.next) return head;
    let fast = head;
    let slow = head;
    let pre = null;
    while (fast && fast.next) {
        pre = slow;
        fast = fast.next.next;
        slow = slow.next;
    }
    pre.next = null;
    const left = sortList(head);
    const right = sortList(slow);
    return merge(left, right);
}


function merge(left, right) {
    const dummy = new ListNode(0);
    let list = dummy
    while (left && right) {
        if (left.val < right.val) {
            list.next = left;
            left = left.next;
        } else {
            list.next = right;
            right = right.next;
        }
        list = list.next;
    }
    if (left) {
        list.next = left;
    }
    if (right) {
        list.next = right;
    }
    return dummy.next;
}

// another

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

const sortList = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    const list = [];
    let done = (null === head);
    // Keep partitioning our list into bigger sublists length. Starting with a size of 1 and doubling each time
    for (let step = 1; !done; step *= 2) {
      done = true;
      let prev = dummy;
      let remaining = prev.next;
      do {
        // Split off two sublists of size step
        for (let i = 0; i < 2; ++i) {
          list[i] = remaining;
          let tail = null;
          for (let j = 0; j < step && null != remaining; ++j, remaining = remaining.next) {
            tail = remaining;
          }
          // Terminate our sublist
          if (null != tail) {
            tail.next = null;
          }
        }

        // We're done if these are the first two sublists in this pass and they
        // encompass the entire primary list
        done &= (null == remaining);

        // If we have two sublists, merge them into one
        if (null != list[1]) {
          while (null != list[0] || null != list[1]) {
            let idx = (null == list[1] || null != list[0] && list[0].val <= list[1].val) ? 0 : 1;
            prev.next = list[idx];
            list[idx] = list[idx].next;
            prev = prev.next;
          }

          // Terminate our new sublist
          prev.next = null;
        } else {
          // Only a single sublist, no need to merge, just attach to the end
          prev.next = list[0];
        }
      } while (null !== remaining);
    }
    return dummy.next;
}


