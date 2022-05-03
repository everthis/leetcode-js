/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var diameter = function(root) {
  let res = 0
  dfs(root)
  return res

  function dfs(node) {
    if(node == null) return 0
    let max1 = 0, max2 = 0
    for(const child of node.children) {
      const tmp = dfs(child)
      if(tmp > max1) {
        max2 = max1
        max1 = tmp
      } else if(tmp > max2) {
        max2 = tmp
      }
    }

    res = Math.max(res, max1 + max2)
    return max1 + 1
  }
};
