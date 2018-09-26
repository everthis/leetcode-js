/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let ans;
const diameterOfBinaryTree = function(root) {
  ans = 1;
  depth(root);
  return ans - 1;
};
function depth(node) {
  if (node == null) return 0;
  let L = depth(node.left);
  let R = depth(node.right);
  ans = Math.max(ans, L + R + 1);
  return Math.max(L, R) + 1;
}
