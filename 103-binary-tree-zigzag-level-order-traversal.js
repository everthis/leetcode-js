/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function(root) {
  if(root == null) return []
  const row = [root]
  const res = []
  bfs(row, res)
  for(let i = 0; i < res.length; i++) {
    res[i] = i % 2 === 0 ? res[i] : res[i].reverse()
  }
  return res
};

function bfs(row, res) {
  if(row.length === 0) return
  let tmp = []
  let next = []
  for(let i = 0; i< row.length; i++) {
    tmp.push(row[i].val)
    if(row[i].left) {
       next.push(row[i].left)
    }
    if(row[i].right) {
       next.push(row[i].right)
    }
  }
  if(tmp.length) {
    res.push(tmp)
  }
  bfs(next, res)
}
