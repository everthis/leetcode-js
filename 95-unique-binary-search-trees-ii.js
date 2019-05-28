/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function(n) {
  if (n === 0) return []
  return genTreeList(1, n)
}

function genTreeList(start, end) {
  const list = []
  if (start > end) list.push(null)
  for (let idx = start; idx <= end; idx++) {
    const leftList = genTreeList(start, idx - 1)
    const rightList = genTreeList(idx + 1, end)
    for (let left of leftList) {
      for (let right of rightList) {
        const root = new TreeNode(idx)
        root.left = left
        root.right = right
        list.push(root)
      }
    }
  }
  return list
}
