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
const minCameraCover = function(root) {
  if (root === null) return 0;
  let max = 0;
  return (helper(root) < 1 ? 1 : 0) + max;
  function helper(root) {
    if (root === null) return 2;
    if (root.left === null && root.right === null) return 0;
    let left = helper(root.left);
    let right = helper(root.right);
    if (left === 0 || right === 0) {
      max++;
      return 1;
    }
    return left === 1 || right === 1 ? 2 : 0;
  }
};
