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
 * @return {TreeNode}
 */
const increasingBST = function(root) {
  return helper(root, null)
};

function helper(node, tail) {
  if(node == null) return tail
  const res = helper(node.left, node)
  node.left = null
  node.right = helper(node.right, tail)
  return res
}
