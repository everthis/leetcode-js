/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
const btreeGameWinningMove = function(root, n, x) {
  let tl, tr;
  function dfs(node) {
    if (node == null) return 0;
    let l = dfs(node.left),
      r = dfs(node.right);
    if (node.val == x) (tl = l), (tr = r);
    return l + r + 1;
  }
  dfs(root);
  return Math.max(tl, tr, n - tl - tr - 1) > n / 2;
};
