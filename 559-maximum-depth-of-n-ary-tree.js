/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
const maxDepth = function(root) {
  let max = 0
  if(root == null) return 0
  function dfs(node, depth) {
    if(node == null || node.children.length === 0) {
      depth++
      if(depth > max) max = depth
      return
    }
    depth++
    for(let n of node.children) {
      dfs(n, depth)
    }
  }
  dfs(root, 0)
  return max
};
