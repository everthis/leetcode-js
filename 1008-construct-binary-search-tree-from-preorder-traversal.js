/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function(preorder) {
  let i = 0;
  return bstFromPreorder(preorder, 0, 100);

  function bstFromPreorder(A, lo, hi) {
    if (i === A.length || A[i] < lo || A[i] > hi) return null;
    let root = new TreeNode(A[i++]);
    root.left = bstFromPreorder(A, lo, root.val);
    root.right = bstFromPreorder(A, root.val, hi);
    return root;
  }
};
