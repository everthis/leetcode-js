/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function(root, k) {
  const m = new Map()
  return traverse(root, k, m)
};

function traverse(node, k, m) {
  if(node == null) return false
  if(m.has(k - node.val)) return true
  m.set(node.val, node)
  return traverse(node.left,k,m) || traverse(node.right,k,m)
}
