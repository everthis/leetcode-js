/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
const printTree = function (root) {
  const h = getH(root)
  const w = Math.pow(2, h) - 1
  const matrix = new Array(h).fill(0).map((_) => new Array(w).fill(''))
  fill(root, 0, 0, w - 1)
  return matrix
  function getH(root) {
    if (!root) return 0
    return Math.max(getH(root.left), getH(root.right)) + 1
  }
  function fill(root, level, start, end) {
    if (!root) return
    let mid = (start + end) / 2
    matrix[level][mid] = root.val + ''
    fill(root.left, level + 1, start, mid - 1)
    fill(root.right, level + 1, mid + 1, end)
  }
}
