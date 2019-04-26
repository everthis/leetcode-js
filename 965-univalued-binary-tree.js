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
const isUnivalTree = function(root) {
  const arr = []
  dfs(root, arr)
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] !== arr[i- 1]) return false
  }
  return true
};

function dfs(node, arr) {
  if(node === null) return
  arr.push(node.val)
  dfs(node.left, arr)
  dfs(node.right, arr)
}
