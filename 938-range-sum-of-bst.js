/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = function(root, L, R) {
  const payload = {sum: 0}  
  traverse(root, payload, L, R)
  return payload.sum
};

function traverse(node, obj, L, R) {
  if(node == null) return
  if(node.val >= L && node.val <= R) obj.sum += node.val
  traverse(node.left, obj, L, R)
  traverse(node.right, obj, L, R)
}
