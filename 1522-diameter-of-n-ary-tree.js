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
    const arr = []
    for(const child of node.children) {
      const tmp = dfs(child)
      arr.push(tmp)
    }
    let max1 = 0, max2 = 0
    for(const e of arr) {
      if(e > max1) {
        max2 = max1
        max1 = e
      } else if(e > max2) {
        max2 = e
      }
    }
    res = Math.max(res, max1 + max2)
    return max1 + 1
  }
};
