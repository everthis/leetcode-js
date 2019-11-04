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
const findTilt = function(root) {
  const tilt = { val: 0 }
  dfs(root, tilt)
  function dfs(root, tilt) {
    if (!root) return 0
    let left = dfs(root.left, tilt)
    let right = dfs(root.right, tilt)
    tilt.val += Math.abs(left - right)
    return root.val + left + right
  }
  return tilt.val
}
