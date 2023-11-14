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
 * @param {number[]} queries
 * @return {number[]}
 */
const treeQueries = function(root, queries) {
  const depth = [], height = [], depthHash = []
  dfs(root, 0)
  const res = []
  for(const e of queries) {
    const d = depth[e], h = height[e], row = depthHash[d]
    if(row.length === 1) {
       res.push(d - 1)
    } else if(h === row[0]) {
        res.push(d + row[1])
    } else {
        res.push(d + row[0])
    }
  }
  return res

  function dfs(node, d) {
    if(node == null) return 0
    const {val} = node
    const h = Math.max(dfs(node.left, d + 1), dfs(node.right, d + 1))
    depth[val] = d
    height[val] = h
    if(depthHash[d] == null) depthHash[d] = []
    depthHash[d].push(h)
    keepLargestTwo(depthHash[d])
    return h + 1
  }
  function keepLargestTwo(arr) {
      arr.sort((a,b) => b - a)
      if(arr.length > 2) {
         arr.splice(2, arr.length - 2)
      }
  }
};

// another


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
 * @param {number[]} queries
 * @return {number[]}
 */
const treeQueries = function(root, queries) {
  const height = [], depth = [], { max } = Math
  dfs(root, 0)
  
  function dfs(node, dep) {
    if(node == null) return 0
    depth[node.val] = dep
    const h = max(dfs(node.left, dep + 1), dfs(node.right, dep + 1))
    height[node.val] = h
    return h + 1
  }
  // console.log(height, depth)
  
  const neighbors = []
  for(let i = 1; i < height.length; i++) {
     if(height[i] == null) continue
     const d = depth[i]
     if(neighbors[d] == null) neighbors[d] = []
     neighbors[d].push([height[i], i])
     neighbors[d].sort((a, b) => b[0] - a[0])
     if(neighbors[d].length > 2) neighbors[d].pop()
  }
  // console.log(neighbors)
  const res = []
  for(const q of queries) {
     const d = depth[q]
     if(neighbors[d].length === 1) res.push(d - 1)
     else if(q === neighbors[d][0][1]) {
        // console.log('in', d)
       res.push(d + neighbors[d][1][0])
     } else {
       res.push(d + neighbors[d][0][0])
     }
  }
  
  return res
};
