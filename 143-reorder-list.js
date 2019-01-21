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
