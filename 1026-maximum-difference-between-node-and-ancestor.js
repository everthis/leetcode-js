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
const maxAncestorDiff = function(root) {
    const arr = []
    dfs(root, [], arr)
    let res = Number.MIN_VALUE
    for(let i = 0; i < arr.length; i++) {
      let el = arr[i]
      let max = Number.MIN_VALUE
      let min = Number.MAX_VALUE 
      for(let j = 0; j < el.length; j++) {
        if(el[j] < min) min = el[j]
        if(el[j] > max) max = el[j]
      }
      if(Math.abs(max - min) > res) res = Math.abs(max - min)
    }
    return res
};

function dfs(node, arr, res) {
  if(node == null) return
  arr.push(node.val)
  if(node.left === null && node.right === null) {
    res.push(arr.slice(0))
    return
  }
  
  dfs(node.left, arr.slice(0), res)
  dfs(node.right, arr.slice(0), res)
  
  
}
