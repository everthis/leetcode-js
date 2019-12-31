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
const upsideDownBinaryTree = function(root) {
  let curr = root
  let next = null
  let temp = null
  let prev = null
  while (curr !== null) {
    next = curr.left
    curr.left = temp
    temp = curr.right
    curr.right = prev
    prev = curr
    curr = next
  }
  return prev
}
