/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const upsideDownBinaryTree = function(root) {
  let node = root, parent = null, right = null
  while(node !== null) {
    const left = node.left
    node.left = right
    right = node.right
    node.right = parent
    parent = node
    node = left
  }
  return parent
};

// another

const upsideDownBinaryTree = function(root) {
  if (root == null || root.left == null) {
    return root
  }
  const newRoot = upsideDownBinaryTree(root.left)
  root.left.left = root.right
  root.left.right = root
  root.left = null
  root.right = null
  return newRoot
}
