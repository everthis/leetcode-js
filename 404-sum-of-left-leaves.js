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
const sumOfLeftLeaves = function(root) {
  if(root == null) return 0
  let res = 0
  function dfs(node, side) {
    if(node === null) return
    if(node.left === null && node.right === null) {
      if(side === 'left') res += node.val
      return
    }
    dfs(node.left, 'left')
    dfs(node.right, 'right')
  }
  dfs(root.left, 'left')
  dfs(root.right, 'right')

  return res
};
