/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const convertBST = function(root) {
  if (root == null) return null;
  convertBST(root.right);
  root.val += sum;
  sum = root.val;
  convertBST(root.left);
  return root;
};
