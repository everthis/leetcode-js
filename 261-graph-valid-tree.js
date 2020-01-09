/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
const validTree = function(n, edges) {
  const nums = Array(n).fill(-1)
  for(let i = 0; i < edges.length; i++) {
    const x = find(nums, edges[i][0])
    const y = find(nums, edges[i][1])
    if(x === y) return false
    nums[x] = y
  }
  return edges.length === n - 1
  function find(arr, i) {
    if(arr[i] === -1) return i
    return find(arr, arr[i])
  }
};

// another

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
const validTree = function(n, edges) {
  if (edges.length !== n - 1) {
    return false
  }
  const graph = {}
  edges.forEach(edge => {
    if (!graph[edge[0]]) {
      graph[edge[0]] = []
    }
    if (!graph[edge[1]]) {
      graph[edge[1]] = []
    }
    graph[edge[0]].push(edge[1])
    graph[edge[1]].push(edge[0])
  })
  const queue = [0],
    visited = new Set()
  while (queue.length) {
    const currentNode = queue.shift()
    visited.add(currentNode)
    if (graph[currentNode]) {
      graph[currentNode].forEach(node => {
        if (!visited.has(node)) {
          queue.push(node)
        }
      })
    }
  }
  return visited.size === n
}
