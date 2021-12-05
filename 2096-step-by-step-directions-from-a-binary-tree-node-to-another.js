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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
const getDirections = function (root, startValue, destValue) {
  let start = ''
  let end = ''
  const traverse = (node, path) => {
    if (node === null) return
    if (node.val === startValue) start = path
    if (node.val === destValue) end = path
    if (start !== '' && end !== '') return
    if (node.left !== null) traverse(node.left, path + 'L')
    if (node.right !== null) traverse(node.right, path + 'R')
  }
  traverse(root, '')
  let skip = 0
  while (start[skip] && start[skip] === end[skip]) skip++
  return 'U'.repeat(start.length - skip) + end.slice(skip)
}
