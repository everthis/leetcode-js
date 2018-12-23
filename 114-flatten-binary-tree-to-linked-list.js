/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

const flatten = function(root) {
  let prev = null
  function op(root) {
    if (root == null) return;
    op(root.right);
    op(root.left);
    root.right = prev;
    root.left = null;
    prev = root;
  }
  op(root)
};


