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
const minCameraCover = function(root) {
  if (root === null) return 0;
  let max = 0;
  return (helper(root) < 1 ? 1 : 0) + max;
  function helper(root) {
    if (root === null) return 2;
    if (root.left === null && root.right === null) return 0;
    let left = helper(root.left);
    let right = helper(root.right);
    if (left === 0 || right === 0) {
      max++;
      return 1;
    }
    return left === 1 || right === 1 ? 2 : 0;
  }
};

 // another

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minCameraCover = function(root) {
  let ans = 0
  const covered = new Set([null])
  dfs(root, null)
  return ans
  function dfs(node, parent) {
    if (node) {
      dfs(node.left, node)
      dfs(node.right, node)
      if (
        !(
          (parent || covered.has(node)) &&
          covered.has(node.left) &&
          covered.has(node.right)
        )
      ) {
        ans += 1
        covered
          .add(node)
          .add(parent)
          .add(node.left)
          .add(node.right)
      }
    }
  }
};
