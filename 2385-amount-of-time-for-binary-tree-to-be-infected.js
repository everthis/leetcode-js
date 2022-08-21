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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
  const graph = new Map()
  dfs(root)
  
  // console.log(graph)
  const visited = new Set([start])
  let q = [start]
  let res = 0
  while(q.length) {
    const tmp = []
    const size = q.length
    // console.log(q)
    for(let i = 0; i < size; i++) {
      const cur = q[i]
      for(const nxt of (graph.get(cur) || [])) {
        if(visited.has(nxt)) continue
        tmp.push(nxt)
        visited.add(nxt)
      }
    }
    
    q = tmp
    res++
  }
  
  return res - 1
  
  function dfs(node) {
    if(node == null) return
    if(node.left) {
      if(!graph.has(node.left.val)) graph.set(node.left.val, new Set())
      if(!graph.has(node.val)) graph.set(node.val, new Set())
      graph.get(node.val).add(node.left.val)
      graph.get(node.left.val).add(node.val)
      dfs(node.left)
    }
    if(node.right) {
      if(!graph.has(node.right.val)) graph.set(node.right.val, new Set())
      if(!graph.has(node.val)) graph.set(node.val, new Set())
      graph.get(node.val).add(node.right.val)
      graph.get(node.right.val).add(node.val)
      dfs(node.right)
    }
  }
};
