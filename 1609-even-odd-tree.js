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
 * @return {boolean}
 */
const isEvenOddTree = function(root) {
  const q = [root]
  const v = []
  let l = 0
  while(q.length) {
    const size = q.length
    const row = []
    for(let i = 0; i < size; i++) {
      const cur = q.shift()
      row.push(cur.val)
      if(l % 2 === 0 && cur.val % 2 === 0) return false
      if(l % 2 === 1 && cur.val % 2 === 1) return false
      if(row.length > 1) {
        if(l % 2 === 0 && row[row.length - 1] <= row[row.length - 2]) return false
        if(l % 2 === 1 && row[row.length - 1] >= row[row.length - 2]) return false
      }
      if(cur.left) q.push(cur.left)
      if(cur.right) q.push(cur.right)
    }
    l++
  }
  return true
};
