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
const diameterOfBinaryTree = function (root) {
  if (root === null) return 0
  let longest = 0
  function dfs(node) {
    if (node === null) return 0
    let leftmax = dfs(node.left)
    let rightmax = dfs(node.right)
    longest = Math.max(longest, leftmax + 1 + rightmax)
    return Math.max(leftmax, rightmax) + 1
  }
  dfs(root)
  return longest - 1
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
 * @return {number}
 */
const diameterOfBinaryTree = function(root) {
  let res = 0
  dfs(root)
  return res

  function dfs(node) {
    if(node == null) return 0
    const left = dfs(node.left), right = dfs(node.right)
    res = Math.max(res, left + right)
    return Math.max(left, right) + 1
  }
};

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
 * @return {number}
 */
const diameterOfBinaryTree = function(root) {
  let res = -Infinity
  dfs(root)
  return res
  function dfs(node) {
    if(node == null) return -1
    const left = dfs(node.left)
    const right = dfs(node.right)
    res = Math.max(res, left + right + 2)
    return Math.max(left, right) + 1
  }
};

