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
const diameterOfBinaryTree = function (root) {
  if (root === null) return 0
  let longest = 0
  function dfs(node) {
    if (node === null) return 0
    let leftmax = dfs(node.left)
    let rightmax = dfs(node.right)
    longest = Math.max(longest, leftmax + 1 + rightmax)
    return Math.max(leftmax, rightmax) + 1
  }
  dfs(root)
  return longest - 1
}

