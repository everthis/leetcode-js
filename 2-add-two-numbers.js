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
  let res = new ListNode(null)
  let inc = false
  let cur = res
  while(l1 || l2 || inc) {
    const tmp = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + (inc ? 1 : 0)
    if(tmp >= 10) inc = true
    else inc = false
    cur.next = new ListNode(tmp % 10)
    cur = cur.next
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
  }
  
  return res.next
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  const res = new ListNode(null);
  single(l1, l2, res);
  return res.next;
};

function single(l1, l2, res) {
  let cur;
  let addOne = 0;
  let sum = 0;
  let curVal = 0;
  while (l1 || l2 || addOne) {
    sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + addOne;
    if (sum / 10 >= 1) {
      curVal = sum % 10;
      addOne = 1;
    } else {
      curVal = sum;
      addOne = 0;
    }

    if (cur) {
      cur = cur.next = new ListNode(curVal);
    } else {
      cur = res.next = new ListNode(curVal);
    }

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
}
