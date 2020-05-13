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
 * @param {number} V
 * @return {TreeNode[]}
 */
const splitBST = function(root, V) {
  if(root == null) return [null, null]
  if(root.val > V) {
    const [left, right] = splitBST(root.left, V)
    root.left = right
    return [left, root]
  } else {
    const [left, right] =  splitBST(root.right, V)
    root.right = left
    return [root, right]
  }
};
