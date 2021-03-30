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
function sortList(head) {
  quickSort(head, null);
  return head;
}

function quickSort(head, tail) {
  if (head == tail) {
    return;
  }
  const slow = partition(head, tail);
  quickSort(head, slow);
  quickSort(slow.next, tail);
}

function swap(node1, node2) {
  let tmp = node1.val;
  node1.val = node2.val;
  node2.val = tmp;
}

function partition(head, tail) {
  let slow = head,
    fast = head.next;
  let p = head.val;
  while (fast != tail) {
    if (fast.val <= p) {
      slow = slow.next;
      swap(slow, fast);
    }
    fast = fast.next;
  }
  swap(head, slow);
  return slow;
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
 * @return {ListNode}
 */
function sortList(head) {
  if(head == null || head.next == null) return head
  let slow = head, fast = head, pre = null
  while(fast && fast.next) {
    pre = slow
    slow = slow.next
    fast = fast.next.next
  }
  pre.next = null
  const left = sortList(head)
  const right = sortList(slow)
  return merge(left, right)
}

function merge(left, right) {
  const dummy = new ListNode()
  let cur = dummy
  while(left && right) {
    if (left.val <= right.val) {
      cur.next = left
      left = left.next
    } else {
      cur.next = right
      right = right.next
    }
    cur = cur.next
  }
  if(left) {
    cur.next = left
  }

  if(right) {
    cur.next = right
  }

  return dummy.next
}


// another

    function sortList(head) {
        quickSort(head, null);
        return head;
    }
    
    function quickSort( head,  tail){
        if (head == tail) {
            return;
        }
        let slow = head, fast = head.next;
        let p = head.val;
        while (fast != tail){
            if (fast.val <= p){
                slow = slow.next;
                swap(slow, fast);
            }
            fast = fast.next;
        }
        swap(head, slow);
        quickSort(head, slow);
        quickSort(slow.next, tail);
    }
    
    function swap( node1,  node2){
         let tmp = node1.val;
         node1.val = node2.val;
         node2.val = tmp;
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


