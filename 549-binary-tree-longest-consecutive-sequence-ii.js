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
const longestConsecutive = function (root, res = { val: 0 }) {
  if (root === null) return 0;
  let ans = 0;
  function f(node) {
    let inc = 1,
      dec = 1;
    const child = [node.left, node.right];
    for (let c of child) {
      if (c === null) continue;
      let r = f(c);
      if (node.val + 1 === c.val) inc = Math.max(inc, r[0] + 1);
      else if (node.val - 1 === c.val) dec = Math.max(dec, r[1] + 1);
    }
    ans = Math.max(ans, inc + dec - 1);
    return [inc, dec];
  }
  f(root);
  return ans;
};
