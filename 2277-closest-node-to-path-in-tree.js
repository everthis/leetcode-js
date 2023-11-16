/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
const closestNode = function(n, edges, query) {
  const g = new Map()
  for(const [p, q] of edges) {
    if(!g.has(p)) g.set(p, new Set())
    if(!g.has(q)) g.set(q, new Set())
    g.get(p).add(q)
    g.get(q).add(p)
  }
  const dist = Array.from({ length: n }, () => Array(n).fill(null))
  for(let i = 0; i < n; i++) dfs(i, i, 0)
  const res = []
  // console.log(dist)
  for(const [s, e, t] of query) {
    let tmp = Infinity, cur = s, el
    while(true) {
      if(dist[cur][t] < tmp) {
          tmp = dist[cur][t]
          el = cur
      }
      if(cur === e) break
      for(const nxt of (g.get(cur) || [])) {
        if(dist[cur][e] === dist[nxt][e] + 1) {
          cur = nxt
          break
        }
      }
    }
    res.push(el)
  }
    
  return res
  
  function dfs(root, node, d) {
    dist[root][node] = d
    for(const nxt of (g.get(node) || [])) {
      if(nxt !== root && dist[root][nxt] == null) {
          dfs(root, nxt, d + 1)
      }
    }
  }
};

// another


/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
const closestNode = function (n, edges, query) {
  const graph = {}
  for (const [a, b] of edges) {
    if (graph[a] == null) graph[a] = []
    if (graph[b] == null) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }

  const dis = Array.from({ length: n }, () => Array(n).fill(Infinity))
  for (let i = 0; i < n; i++) {
    let que = [i]
    dis[i][i] = 0
    while (que.length) {
      const tmp = []
      for (const q of que) {
        for (const nxt of graph[q] || []) {
          if (dis[i][nxt] === Infinity) {
            dis[i][nxt] = dis[i][q] + 1
            tmp.push(nxt)
          }
        }
      }
      que = tmp
    }
  }

  const arr = []

  for (const [a, b, q] of query) {
    let tmp = Infinity, res = -1
    for (let idx = 0; idx < n; idx++) {
      const d= dis[idx][a] + dis[idx][b] + dis[idx][q]
      if(d < tmp) {
          tmp = d
          res = idx
      }
    }
    arr.push(res)
  }
  return arr
}
