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

// another

const levelOrderBottom = function(root) {
  if (!root) return []
  const currentLevelNodes = [root]
  const result = []
  while (currentLevelNodes.length > 0) {
    const count = currentLevelNodes.length
    const currentLevelValues = []
    for (let i = 0; i < count; i++) {
      const node = currentLevelNodes.shift()
      currentLevelValues.push(node.val)
      if (node.left) currentLevelNodes.push(node.left)
      if (node.right) currentLevelNodes.push(node.right)
    }
    result.unshift(currentLevelValues)
  }
  return result
}
