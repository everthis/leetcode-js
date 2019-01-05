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
const minDepth = function(root) {
    if(root == null) return 0
    if(root.left === null && root.right === null) return 1
    const res = {
      min:Number.MAX_VALUE
    }
    dfs(root, res, 1)
    return res.min
};

function dfs(node, res, cur) {
  if(node == null) return
  if(node !== null && node.left === null && node.right === null) {
    if(cur < res.min) {
      res.min = cur   
    }
    return
  }
  dfs(node.left, res, cur + 1)
  dfs(node.right, res, cur + 1)
  
} 
