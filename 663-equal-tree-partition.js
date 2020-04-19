/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const checkEqualTree = function (root) {
  const s = new Set()
  const visit = (node, k = 1) => {
    if (!node) return 0
    const l = visit(node.left)
    const r = visit(node.right)
    const ret = l + r + node.val
    if (k) s.add(ret)
    return ret
  }
  const sum = visit(root, 0)
  if (sum % 2) return false
  return s.has(sum / 2)
}
