/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
const getAncestors = function(n, edges) {
  const res = Array.from({ length: n }, () => [])
  const graph = {}
  
  for(const [u, v] of edges) {
    if(graph[u] == null) graph[u] = []
    graph[u].push(v)
  }
  
  for(let i = 0; i < n; i++) {
    dfs(i, i)
  }
  
  return res
  
  function dfs(p, cur) {
    for(const nxt of (graph[cur] || [])) {
      if(res[nxt].length === 0 || res[nxt][res[nxt].length - 1] !== p) {
        res[nxt].push(p)
        dfs(p, nxt)
      }
    }
  }
};

// another

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
const getAncestors = function(n, edges) {
  const res = Array.from({ length: n }, () => new Set())
  const inDegree = Array(n).fill(0)
  const graph = {}
  
  for(const [u, v] of edges) {
    if(graph[v] == null) graph[v] = []
    graph[v].push(u)
    inDegree[v]++
  }
  
  const visited = Array(n).fill(false)
  for (let i = 0; i < n; i++) {
    if (!visited[i]) dfs(i);
  }

  return res.map(set => Array.from(set).sort((a, b) => a - b))
  
  function dfs(i) {
    visited[i] = true
    for(const p of (graph[i] || [])) {
      if(visited[p] === false) dfs(p)
      res[i].add(p)
      for(const e of res[p]) res[i].add(e)
    }
  }
};
