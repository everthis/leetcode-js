/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root) {
  return helper(root, -Infinity, Infinity)
}
function helper(root, minValue, maxValue) {
  if (!root) return true
  if (root.val <= minValue || root.val >= maxValue) {
    return false
  }
  let leftSide = helper(root.left, minValue, root.val)
  let rightSide = helper(root.right, root.val, maxValue)
  return leftSide && rightSide
}
