/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
const splitListToParts = function(root, k) {
  let cur = root;
  let N = 0;
  while (cur != null) {
    cur = cur.next;
    N++;
  }
  let width = Math.floor(N / k),
    rem = N % k;
  let ans = [];
  cur = root;
  for (let i = 0; i < k; ++i) {
    let head = cur;
    for (let j = 0; j < width + (i < rem ? 1 : 0) - 1; ++j) {
      if (cur != null) cur = cur.next;
    }
    if (cur != null) {
      let prev = cur;
      cur = cur.next;
      prev.next = null;
    }
    ans[i] = head;
  }
  return ans;
};
