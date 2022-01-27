/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = function(graph) {
  const n = graph.length, memo = {}, visited = new Set(), res = []
  for(let i = 0; i < n; i++) {
    if(!dfs(graph, i, memo, visited)) res.push(i)
  }
  return res
};

function dfs(graph, node, memo, visited) {
  if(memo[node] != null) return memo[node]
  let hasCycle = false
  visited.add(node)
  for(let e of graph[node]) {
    if(visited.has(e) || dfs(graph, e, memo, visited)) {
      hasCycle = true
      break
    }
  }
  visited.delete(node)
  memo[node] = hasCycle
  return hasCycle
}

// another

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = function(graph) {
  const res = []
  if(graph == null || graph.length === 0) return res
  const n = graph.length
  const color = Array(n).fill(0)
  for(let i = 0; i < n; i++) {
    if(bt(graph, i, color)) res.push(i)
  }
  return res

  function bt(graph, start, color) {
    if(color[start] !== 0) return color[start] === 1
    color[start] = 2
    for(let next of graph[start]) {
      if(!bt(graph, next, color)) return false
    }
    color[start] = 1
    return true
  }
};
