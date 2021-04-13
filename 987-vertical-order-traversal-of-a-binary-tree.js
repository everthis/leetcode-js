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
 * @return {number[][]}
 */
const verticalTraversal = function(root) {
  const arr = []
  helper(root, 0, 0, arr)
  arr.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2])
  const res = new Map()

  for(let [x, y, val] of arr) {
    if(!res.has(x)) res.set(x, [])
    res.get(x).push(val)
  }
  return [...res.values()]
};

function helper(node, x, y, arr) {
  if(node) {
    helper(node.left, x - 1, y - 1, arr)
    arr.push([x, y, node.val])
    helper(node.right, x  + 1, y - 1, arr)
  }
}
