/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
const Solution = function(head) {
  this.list = head;
  this.arr = [];
  loop(head, this.arr);
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  const len = this.arr.length;
  return this.arr[Math.floor(Math.random() * len)].val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(head)
 * var param_1 = obj.getRandom()
 */
function loop(node, arr) {
  if (node == null) return;
  arr.push(node);
  loop(node.next, arr);
}
