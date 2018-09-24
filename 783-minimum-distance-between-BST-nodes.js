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
const minDiffInBST = function(root) {
  if (root === null) return 0;
  let min = Number.MAX_SAFE_INTEGER,
    res = [];
  const bst = (node, res) => {
    if (!node) return;
    bst(node.left, res);
    res.push(node.val);
    bst(node.right, res);
  };
  bst(root, res);
  for (let i = 1; i < res.length; i++) {
    min = Math.min(min, res[i] - res[i - 1]);
  }
  return min;
};
