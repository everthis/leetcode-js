/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
const distanceK = function(root, target, K) {
  let res = []
  dfs(root, target, K, res)
  return res
}

function dfs(node, target, k, res) {
  if (node === null) return -1
  if (node === target) {
    getRes(node, 0, k, res)
    return 1
  }
  let left = dfs(node.left, target, k, res)
  let right = dfs(node.right, target, k, res)
  if (left !== -1) {
    if (left === k) res.push(node.val)
    getRes(node.right, left + 1, k, res)
    return left + 1
  }
  if (right !== -1) {
    if (right === k) res.push(node.val)
    getRes(node.left, right + 1, k, res)
    return right + 1
  }
  return -1
}

function getRes(node, dist, k, res) {
  if (node === null) return
  if (dist === k) return res.push(node.val)
  getRes(node.left, dist + 1, k, res)
  getRes(node.right, dist + 1, k, res)
}
