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
const getMinimumDifference = function(root) {
  const arr = [];
  traversal(root, arr);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i] - arr[i - 1]);
  }
  return min;
};

function traversal(node, arr) {
  if (node === null) return;
  if (node.left) {
    traversal(node.left, arr);
  }
  arr.push(node.val);
  if (node.right) {
    traversal(node.right, arr);
  }
}
