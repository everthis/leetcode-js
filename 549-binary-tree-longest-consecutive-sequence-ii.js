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
const longestConsecutive = function (root, res = { val: 0 }) {
  if (!root) return 0;
  const left1 = dfs(root, -1);
  const right1 = dfs(root);
  const left2 = dfs(root);
  const right2 = dfs(root, -1);
  res.val = Math.max(
    res.val,
    Math.max(
      left1 + right1 - !!(left1 && right1),
      left2 + right2 - !!(left2 && right2)
    )
  );
  longestConsecutive(root.left, res);
  longestConsecutive(root.right, res);
  return res.val;
};

function dfs(root, dir = 1, prev = null) {
  if (!root || (prev !== null && root.val !== prev + dir)) return 0;
  return (
    1 + Math.max(dfs(root.left, dir, root.val), dfs(root.right, dir, root.val))
  );
}
