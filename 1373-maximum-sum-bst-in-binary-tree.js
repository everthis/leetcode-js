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
const maxSumBST = function (root) {
  let maxSum = 0
  postOrderTraverse(root)
  return maxSum

  function postOrderTraverse(root) {
    if (root == null) return [Number.MAX_VALUE, -Infinity, 0] // {min, max, sum}, initialize min=MAX_VALUE, max=MIN_VALUE
    let left = postOrderTraverse(root.left)
    let right = postOrderTraverse(root.right)
    // The BST is the tree:
    if (
      !(
        left != null && // the left subtree must be BST
        right != null && // the right subtree must be BST
        root.val > left[1] && // the root's key must greater than maximum keys of the left subtree
        root.val < right[0]
      )
    )
      // the root's key must lower than minimum keys of the right subtree
      return null
    let sum = root.val + left[2] + right[2] // now it's a BST make `root` as root
    maxSum = Math.max(maxSum, sum)
    let min = Math.min(root.val, left[0])
    let max = Math.max(root.val, right[1])
    return [min, max, sum]
  }
}
