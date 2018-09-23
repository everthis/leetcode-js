/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function(root) {
  const res = [];
  traversal(root, res);
  return res;
};

function traversal(node, arr) {
  if (node === null) return;
  arr.push(node.val);
  if (node.left) {
    traversal(node.left, arr);
  }
  if (node.right) {
    traversal(node.right, arr);
  }
}
