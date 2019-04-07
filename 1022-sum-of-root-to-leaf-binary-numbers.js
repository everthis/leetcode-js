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
const sumRootToLeaf = function(root) {
  if(root == null) return 0
  const res = []
  dfs(root, 0, res)
  const mod = Math.pow(10, 9) + 7
  return res.reduce((ac, el) => (ac + el) % mod ,0)  
};

function dfs(node, val, res) {
  const mod = Math.pow(10, 9) + 7
  if(node == null) return
  val = (val * 2 + node.val) % mod
  if(node.left === null && node.right === null) {
    res.push(val)
  }
  dfs(node.left, val, res)
  dfs(node.right, val, res)
}
