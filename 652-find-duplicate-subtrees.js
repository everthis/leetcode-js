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
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function(root) {
  const hash = {}, res = []
  pre(root, hash, res)
  return res
};

function pre(node, hash, res) {
  if(node == null) return '#'
  const str = `${node.val},${pre(node.left, hash, res)},${pre(node.right, hash, res)}`
  if(hash[str] == null) hash[str] = 0
  hash[str]++
  if(hash[str] === 2) res.push(node)
  return str
}
