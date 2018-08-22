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
const findBottomLeftValue = function(root) {
  const res = [];
  single(root, 0, res);
  return res[res.length - 1][0].val;
};

function single(node, row, arr) {
  if (node == null) {
    return null;
  }
  if (row < arr.length) {
    arr[row].push(node);
  } else {
    arr[row] = [node];
  }
  single(node.left, row + 1, arr);
  single(node.right, row + 1, arr);
}
