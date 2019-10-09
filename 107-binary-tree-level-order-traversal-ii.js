/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function(root) {
  const levels = []
  postOrderTraversal(root)
  return levels.reverse()

  function postOrderTraversal(node, level = 0) {
    if (node) {
      if (!levels[level]) levels.push([])
      postOrderTraversal(node.left, level + 1)
      postOrderTraversal(node.right, level + 1)
      levels[level].push(node.val)
    }
  }
}
