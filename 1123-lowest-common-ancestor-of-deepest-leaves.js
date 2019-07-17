/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const lcaDeepestLeaves = function(root) {
  if (root === null) return null
  const getHeight = root => {
    if (root === null) return 0
    const res = Math.max(getHeight(root.left), getHeight(root.right)) + 1
    return res
  }
  if (getHeight(root.left) === getHeight(root.right)) {
    return root
  } else if (getHeight(root.left) > getHeight(root.right)) {
    return lcaDeepestLeaves(root.left)
  } else {
    return lcaDeepestLeaves(root.right)
  }
}
