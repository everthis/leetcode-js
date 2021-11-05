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
const maxPathSum = function(root) {
  let obj = {
    max: Number.MIN_SAFE_INTEGER
  }
  traverse(root, obj)
  
  return obj.max
};

function traverse(node, obj) {
  if(node === null) return 0
  let left = Math.max(0, traverse(node.left, obj))
  let right = Math.max(0, traverse(node.right, obj))
  obj.max = Math.max(obj.max, node.val+left+right)
  return node.val + Math.max(left, right)
}

// another

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
const maxPathSum = function(root) {
  let res = -Infinity
  dfs(root)
  return res

  function dfs(node) {
    if(node == null) return 0
    let left = dfs(node.left), right = dfs(node.right)
    res = Math.max(
      res,
      node.val,
      node.val + left,
      node.val + right,
      node.val + left + right,
    )
    return Math.max(node.val, node.val + left, node.val + right)
  }
};
