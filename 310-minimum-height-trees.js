/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if(n === 1) return [0]
  if(n === 2) return [0, 1]
  const g = {}
  const degree = new Array(n).fill(0)
  for(const [u, v] of edges) {
    degree[u]++
    degree[v]++
    if(g[u] == null) g[u] = []
    if(g[v] == null) g[v] = []
    g[u].push(v)
    g[v].push(u)
  }
  let q = []
  for(let i = 0; i < n; i++) {
    if(degree[i] === 1) q.push(i)
  }
  let cnt = 0 
  while(q.length) {
    const size = q.length
    const tmp = []
    for(let i = 0; i < size; i++) {
        const node = q[i]
        cnt++
        for(const nxt of (g[node] || [])) {
            degree[nxt]--
            if(degree[nxt] === 1) {
                tmp.push(nxt)
            }
        }
    }
    
    q = tmp
    if(n - cnt <= 2) break
  }
  
  const res = []
  while(q.length) {
    res.push(q.pop())
  }
  return res
};

// another

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function (n, edges) {
  const graph = {}

  for(const [u, v] of edges) {
    if(graph[u] == null) graph[u] = new Set()
    if(graph[v] == null) graph[v] = new Set()
    graph[u].add(v)
    graph[v].add(u)
  }

  let q = []
  for(let i = 0; i < n; i++) {
    if(graph[i].size === 1) q.push(i)
  }

  while(n > 2) {
    const size = q.length, nxt = []
    n -= size
    for(let i = 0; i < size; i++) {
      const cur = q[i]
      for(const e of (graph[cur] || [])) {
        graph[e].delete(cur)
        if(graph[e].size === 1) nxt.push(e)
      }
    }

    q = nxt
  }

  return q
}

// another

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 const findMinHeightTrees = function(n, edges) {
  if(n === 1) return [0]
  const res = [], graph = {}
  for(const [u, v] of edges) {
    if(graph[u] == null) graph[u] = new Set()
    if(graph[v] == null) graph[v] = new Set()
    graph[u].add(v)
    graph[v].add(u)
  }

  let leaves = []
  Object.keys(graph).forEach(k => {
    if(graph[k].size === 1) leaves.push(+k)
  })
  while(n > 2) {
    const newLeaves = []
    const size = leaves.length
    for (let i = 0; i < size; i++) {
      const cur = leaves.pop()
      for (const next of graph[cur]) {
        graph[next].delete(cur)
        if(graph[next].size === 1) newLeaves.push(next)
      }
    }
    n -= size
    leaves = newLeaves
  }
  
  return leaves
};

// another

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function(n, edges) {
  if (n === 1) {
    return [0];
  }
  const adj = [];
  for (let i = 0; i < n; i++) {
    adj.push([]);
  }
  for (let edge of edges) {
    adj[edge[0]].push(edge[1]);
    adj[edge[1]].push(edge[0]);
  }
  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (adj[i].length === 1) {
      leaves.push(i);
    }
  }

  while (n > 2) {
    n -= leaves.length;
    let newLeaves = [];
    for (let i of leaves) {
      let j = adj[i].shift();
      let idx = adj[j].indexOf(i);
      adj[j].splice(idx, 1);
      if (adj[j].length === 1) newLeaves.push(j);
    }
    leaves = newLeaves;
  }

  return leaves;
};
