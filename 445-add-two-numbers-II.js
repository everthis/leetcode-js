/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(head1, head2) {
  const r1 = reverse(head1), r2 = reverse(head2)
  let l1 = r1, l2 = r2, inc = 0
  let dummy = new ListNode()
  let pre = dummy
  while(l1 || l2) {
    let val = inc
    if(l1) {
      val += l1.val
      l1 = l1.next
    }
    if(l2) {
      val += l2.val
      l2 = l2.next
    }
    if(val > 9) inc = 1
    else inc = 0
    const cur = new ListNode(val % 10)
    pre.next = cur
    pre = cur
  }
  if (inc) {
    pre.next = new ListNode(1)
  }
  return reverse(dummy.next) 
};

function reverse(head) {
  const dummy = new ListNode()
  dummy.next = head
  let len = 0, cur = head
  while(cur) {
    len++
    cur = cur.next
  }
  let p = dummy, tail = head, tmp = null
  for(let i = 0; i < len - 1; i++) {
    tmp = p.next
    p.next = tail.next
    tail.next = tail.next.next
    p.next.next = tmp
  }
  return dummy.next
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  const s1 = [];
  const s2 = [];
  while (l1 !== null) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    s2.push(l2.val);
    l2 = l2.next;
  }

  let list = new ListNode(0);
  let sum = 0;
  while (s1.length > 0 || s2.length > 0) {
    if (s1.length > 0) {
      sum += s1.pop();
    }
    if (s2.length > 0) {
      sum += s2.pop();
    }
    list.val = sum % 10;
    const head = new ListNode(Math.floor(sum / 10));
    head.next = list;
    list = head;
    sum = Math.floor(sum / 10);
  }

  return list.val === 0 ? list.next : list;
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  const s1 = [], s2 = []
  let h1 = l1, h2 = l2
  while(h1) {
    s1.push(h1.val)
    h1 = h1.next
  }
  while(h2) {
    s2.push(h2.val)
    h2 = h2.next
  }
  let inc = false
  let tail = null
  while(s1.length || s2.length) {
    let tmp = 0
    if(s1.length) tmp += s1.pop()
    if(s2.length) tmp += s2.pop()
    if(inc) tmp++
    if(tmp > 9) {
      inc = true
    } else {
      inc = false
    }
    tmp = tmp % 10
    const cur = new ListNode(tmp)
    if(tail) cur.next = tail
    tail = cur
  }
  
  if(inc) {
    const head = new ListNode(1)
    head.next = tail
    return head
  }
  return tail
  
};
