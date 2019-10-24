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
const rob = function(root) {
  return Math.max(...dfs(root))
}

function dfs(node) {
  if (node == null) return [0, 0]
  const left = dfs(node.left)
  const right = dfs(node.right)
  return [
    node.val + left[1] + right[1],
    Math.max(left[0], left[1]) + Math.max(right[0], right[1])
  ]
}
