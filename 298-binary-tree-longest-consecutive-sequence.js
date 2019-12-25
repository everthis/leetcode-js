/**

Given a binary tree, find the length of the longest consecutive sequence path.

The path refers to any sequence of nodes from some starting node to any node
in the tree along the parent-child connections.
The longest consecutive path need to be from parent to child (cannot be the reverse).

Example 1:

Input:

   1
    \
     3
    / \
   2   4
        \
         5

Output: 3

Explanation: Longest consecutive sequence path is 3-4-5, so return 3.

Example 2:

Input:

   2
    \
     3
    / 
   2    
  / 
 1

Output: 2 

Explanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.

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
 * @return {number}
 */
const longestConsecutive = function(root) {
  const res = { max: 0 }
  dfs(root, null, 0, res)
  return res.max
};

function dfs(node, p, cur, res) {
  if(node === null) {
    return
  }
  let s = 0
  if(p === null) s = 1
  else if(node.val - p.val === 1) s = cur + 1
  else s = 1
  if(s > res.max) res.max = s
  dfs(node.left, node, s, res)
  dfs(node.right, node, s, res)
}
