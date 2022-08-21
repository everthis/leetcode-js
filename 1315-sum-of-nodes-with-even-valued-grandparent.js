/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumEvenGrandparent = function(root) {
  let res = 0
  dfs(root, null, null)
  return res
  
  
  function dfs(node, parent, gp) {
    if(node == null) return
    if(parent && gp && gp.val % 2 === 0) {
      res += node.val
    }
    dfs(node.left, node, parent)
    dfs(node.right, node, parent)
  }
  
};
