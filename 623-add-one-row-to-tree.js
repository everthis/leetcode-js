/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRow = function (root, v, d, level = 1) {
  if (!root) return
  if (d === 1) {
    const newRoot = new TreeNode(v)
    newRoot.left = root
    return newRoot
  } else if (d === level + 1) {
    const oldLeft = root.left
    const oldRight = root.right
    root.left = new TreeNode(v)
    root.right = new TreeNode(v)
    root.left.left = oldLeft
    root.right.right = oldRight
  } else {
    addOneRow(root.left, v, d, level + 1)
    addOneRow(root.right, v, d, level + 1)
  }
  return root
}
