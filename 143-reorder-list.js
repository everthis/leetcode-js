/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
  if(head == null) return head
  let slow = head, fast = head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let head2 = reverse(slow.next)
  slow.next = null
  
  while(head && head2) {
    const next = head.next, next2 = head2.next
    head2.next = head.next
    head.next = head2
    head = next
    head2 = next2
  }
  
  function reverse(node) {
    let pre = null, cur = node
    while(cur) {
      const tmp = cur.next
      cur.next = pre
      pre = cur
      cur = tmp
    }
    return pre
  }
};



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
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
  if (!head || !head.next) return head;

  const reverse = head => {
    if (!head || !head.next) return head;
    const newHead = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  };

  const merge = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;
    while (l1 && l2) {
      const next1 = l1.next;
      const next2 = l2.next;
      l1.next = l2;
      if (next1 == null) break;
      l2.next = next1;
      l1 = next1;
      l2 = next2;
    }
  };

  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  fast = slow.next;
  slow.next = null;

  fast = reverse(fast);
  merge(head, fast);
};


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
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  const arr = [];
  let tmp = head;
  while (tmp.next) {
    arr.push(tmp);
    tmp = tmp.next;
  }
  arr.push(tmp);
  for (let i = 1; i < arr.length; i = i + 2) {
    if (arr.length - 1 > i) {
      let el = arr.pop();
      arr.splice(i, 0, el);
    }
  }
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1].next = arr[i];
    if (i === arr.length - 1) arr[i].next = null;
  }
};
