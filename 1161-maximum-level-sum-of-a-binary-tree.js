/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxLevelSum = function(root) {
  if (root == null) return 0
  let res = 1
  let cur = [root]
  let next = []
  let max = Number.MIN_SAFE_INTEGER
  let sum = 0
  let level = 1
  while (cur.length) {
    let node = cur.pop()
    if (node.left) next.push(node.left)
    if (node.right) next.push(node.right)
    sum += node.val
    if (cur.length === 0) {
      cur = next
      next = []
      if (sum > max) {
        res = level
        max = sum
      }
      sum = 0
      level++
    }
  }

  return res
}
