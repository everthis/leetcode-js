/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const n = graph.length
  const g = {},
    rg = {}
  for (let i = 0; i < n; i++) {
    const arr = graph[i]
    g[i] = new Set(arr)
    for (let j of arr) {
      if (!rg[j]) {
        rg[j] = new Set()
      }
      rg[j].add(i)
    }
  }
  let q = []
  for (let i = 0; i < n; i++) {
    if (g[i].size === 0) {
      q.push(i)
    }
  }
  const res = []
  while (q.length) {
    const size = q.length
    const nxt = []
    for (let i = 0; i < size; i++) {
      const node = q[i]
      res.push(node)
      for (let j of rg[node] || []) {
        g[j].delete(node)
        if (g[j].size === 0) {
          nxt.push(j)
        }
      }
    }

    q = nxt
  }

  res.sort((a, b) => a - b)
  return res
}

// another


/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = function (graph) {
  const ing = {},
    n = graph.length
  const outDegree = Array(n).fill(0)
  let q = []
  for (let i = 0; i < n; i++) {
    outDegree[i] = graph[i].length
    if (outDegree[i] === 0) {
      q.push(i)
    }
    for (const e of graph[i]) {
      if (ing[e] == null) ing[e] = []
      ing[e].push(i)
    }
  }

  for (const term of q) {
    for (const come of ing[term] || []) {
      outDegree[come]--
      if (outDegree[come] === 0) q.push(come)
    }
  }
  q.sort((a, b) => a - b)
  return q
}

// another


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
