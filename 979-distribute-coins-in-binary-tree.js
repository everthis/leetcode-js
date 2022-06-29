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
const distributeCoins = function(root) {
  let res = 0
  helper(root)
  return res
  
  function helper(node) {
    if(node == null) return 0
    const left = helper(node.left)
    const right = helper(node.right)
    res += Math.abs(left) + Math.abs(right)
    return node.val + left + right - 1
  }
};
