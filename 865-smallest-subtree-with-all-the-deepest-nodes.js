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
