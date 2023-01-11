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
const subtreeWithAllDeepest = function(root) {
  return dfs(root).node;
};

function dfs(node) {
  if (node == null) return new result(null, 0);
  const l = dfs(node.left);
  const r = dfs(node.right);
  if (l.dist > r.dist) return new result(l.node, l.dist + 1);
  if (l.dist < r.dist) return new result(r.node, r.dist + 1);
  return new result(node, l.dist + 1);
}

function result(node, dist) {
  this.node = node;
  this.dist = dist;
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
 * @return {TreeNode}
 */
const subtreeWithAllDeepest = function(root) {
  let res = null, maxDepth = 0
  dfs(root, 0)
  
  return res
  
  function dfs(node, depth) {
    if(node == null) return depth - 1
    
    const left = dfs(node.left, depth + 1)
    const right = dfs(node.right, depth + 1)
    maxDepth = Math.max(maxDepth, left, right)
    
    if(left === maxDepth && right === maxDepth) {
      res = node
    }
    return Math.max(left, right)
  }
};
