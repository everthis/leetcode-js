/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const treeToDoublyList = function(root) {
  let head = null, tail = null;
  const helper = (node) => {
    if(!node) return;
    helper(node.left);
    if(!head) head = node;
    if(tail) tail.right = node;
    node.left = tail;
    tail = node;
    helper(node.right);
  };
  helper(root);
  if(head) {
    head.left = tail;
    tail.right = head;
  }
  return head;
};
