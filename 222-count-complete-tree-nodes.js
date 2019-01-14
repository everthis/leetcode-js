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
const countNodes = function(root) {
  if (root == null) return 0;
  const payload = { depth: 0, numOfLast: 0, total: 0 };
  traverse([root], 0, payload);
  return payload.total;
};

function traverse(row, depth, obj) {
  const next = [];
  for (let i = 0; i < row.length; i++) {
    if (row[i].left) next.push(row[i].left);
    if (row[i].right) next.push(row[i].right);
  }
  if (Math.pow(2, depth + 1) !== next.length) {
    obj.total = Math.pow(2, depth + 1) - 1 + next.length;
    return;
  }
  if (next.length) traverse(next, depth + 1, obj);
}

// another

/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function(root) {
  if (!root) {
    return 0;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};
