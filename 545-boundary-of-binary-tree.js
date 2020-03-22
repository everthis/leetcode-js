/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const boundaryOfBinaryTree = function (root) {
  if (!root) return []
  if (!root.left && !root.right) return [root.val]
  const res = [root.val]
  buildSide(root.left, 'left', res)
  buildBottom(root, res)
  const right = []
  buildSide(root.right, 'right', right)
  return [...res, ...right.reverse()]
}

function buildSide(root, side, res) {
  if (!root) return
  if (root.left || root.right) res.push(root.val)
  if (root[side]) buildSide(root[side], side, res)
  else buildSide(root[side === 'left' ? 'right' : 'left'], side, res)
}

function buildBottom(root, res) {
  if (!root) return
  if (!root.left && !root.right) res.push(root.val)
  buildBottom(root.left, res)
  buildBottom(root.right, res)
}
