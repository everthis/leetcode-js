/**

Given a binary tree, collect a tree's nodes as if you were doing this:
Collect and remove all leaves, repeat until the tree is empty. 

Example:

Input: [1,2,3,4,5]
  
          1
         / \
        2   3
       / \     
      4   5    

Output: [[4,5,3],[2],[1]]
 
Explanation:

1. Removing the leaves [4,5,3] would result in this tree:

          1
         / 
        2          
 
2. Now removing the leaf [2] would result in this tree:

          1          
 
3. Now removing the leaf [1] would result in the empty tree:

          []   

*/

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
const findLeaves = function(root) {
  const res = []
  if(root == null) return res
  while(root.left || root.right) {
    const tmp = []
    leaves(root, null, tmp)
    res.push(tmp)
  }
  res.push([root.val])
  return res
};

function leaves(node, p, res) {
  if(node == null) return
  if(node.left === null && node.right === null) {
    res.push(node.val)
    if(p && p.left === node) p.left = null
    if(p && p.right === node) p.right = null
    return
  }
  leaves(node.left, node, res)
  leaves(node.right, node, res)
}

// another

const findLeaves = function(root) {
  const res = []
  dfs(root, res)
  return res
};

function dfs(node, res) {
  if(node == null) return -1
  const i = 1 + Math.max(dfs(node.left, res), dfs(node.right, res))
  if(!res[i]) res[i] = []
  res[i].push(node.val)
  return i
}
