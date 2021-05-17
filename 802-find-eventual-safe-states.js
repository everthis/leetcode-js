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
