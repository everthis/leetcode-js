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
 * @param {number[]} voyage
 * @return {number[]}
 */
const flipMatchVoyage = function (root, voyage) {
  const n = voyage.length
  const res = []
  let idx = 0
  return dfs(root, 0) ? res : [-1]

  function dfs(node) {
    if (node == null) return true
    if (node.val !== voyage[idx]) {
      return false
    }
    idx++
    if (node.left && node.left.val !== voyage[idx]) {
      res.push(node.val)
      return dfs(node.right) && dfs(node.left)
    }
    return dfs(node.left) && dfs(node.right)
  }
}
