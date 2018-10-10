/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  const res = [];
  traverse(root, res, []);
  return res;
};

function traverse(node, res, p) {
  if (node === null) return;
  p.push(node.val);
  if (node.left === null && node.right === null) {
    res.push(p.join("->"));
  }
  if (node.left) {
    traverse(node.left, res, p.slice(0));
  }
  if (node.right) {
    traverse(node.right, res, p.slice(0));
  }
}
