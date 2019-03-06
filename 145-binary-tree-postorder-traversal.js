/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function(root) {
    const res = []
    traverse(root, res)
    return res
};

function traverse(node, arr) {
  if(node == null) return
  traverse(node.left, arr)
  traverse(node.right, arr)
  arr.push(node.val)
}
