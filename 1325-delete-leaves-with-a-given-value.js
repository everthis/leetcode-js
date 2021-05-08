/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
const removeLeafNodes = function(root, target) {
  return dfs(root, target)
};

function dfs(node, target) {
  if(node == null) return node
  if(node.left == null && node.right == null) {
    if(node.val === target)  return null
    else return node
  }
  node.right = dfs(node.right, target)
  node.left = dfs(node.left, target)
  if(node.right == null && node.left == null) return dfs(node, target)
  return node
}

// another

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
const removeLeafNodes = function(root, target) {
  if(root.left)  root.left = removeLeafNodes(root.left, target)
  if(root.right) root.right = removeLeafNodes(root.right, target)
  return root.left == root.right && root.val === target ? null : root
};
