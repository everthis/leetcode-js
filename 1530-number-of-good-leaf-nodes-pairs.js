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
 * @param {number} distance
 * @return {number}
 */
const countPairs = function(root, distance) {
  let res = 0
  traverse(root)
  return res
  
  
  function traverse(node) {
    if(node == null) return []
    if(node.left == null && node.right == null) return [0]
    
    const left = traverse(node.left)
    const right = traverse(node.right)
    for(let i = 0; i < left.length; i++) {
      for(let j = 0; j < right.length; j++) {
        if(left[i] + right[j] + 2 <= distance) res++
      }
    }
    
    return [...left.map(e => e + 1), ...right.map(e => e + 1)]
  }
};
