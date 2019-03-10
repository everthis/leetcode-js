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
  return bstFromPreorder(preorder, Number.MAX_VALUE);
  function bstFromPreorder(A, bound) {
    if (i === A.length || A[i] > bound) return null;
    let root = new TreeNode(A[i++]);
    root.left = bstFromPreorder(A, root.val);
    root.right = bstFromPreorder(A, bound);
    return root;
  }
};
