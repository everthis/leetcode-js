/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
const initializeGraph = (n) => {
  let g = []
  for (let i = 0; i < n; i++) {
    g.push([])
  }
  return g
}
const packDGInDegree = (g, edges, indegree) => {
  for (const [u, v] of edges) {
    g[u].unshift(v)
    indegree[v]++
  }
}
const initialize2DArray = (n, m) => {
  let d = []
  for (let i = 0; i < n; i++) {
    let t = Array(m).fill(0)
    d.push(t)
  }
  return d
}

const buildMatrix = (k, rowConditions, colConditions) => {
  let gr = make(k, rowConditions),
    gc = make(k, colConditions),
    d = initialize2DArray(k, 2),
    res = initialize2DArray(k, k)
  if (gr.length == 0 || gc.length == 0) return []
  for (let i = 0; i < k; i++) {
    d[gr[i] - 1][0] = i
    d[gc[i] - 1][1] = i
  }
  for (let i = 0; i < k; i++) {
    let [x, y] = d[i]
    res[x][y] = i + 1
  }
  return res
}

const make = (n, edges) => {
  let g = initializeGraph(n + 1),
    deg = Array(n + 1).fill(0)
  packDGInDegree(g, edges, deg)
  return topologicalSort_start_1(g, deg)
}

const topologicalSort_start_1 = (g, indegree) => {
  let res = [],
    q = [],
    n = g.length - 1
  for (let i = 1; i <= n; i++) {
    if (indegree[i] == 0) q.push(i)
  }
  while (q.length) {
    let cur = q.shift()
    res.push(cur)
    for (const child of g[cur]) {
      indegree[child]--
      if (indegree[child] == 0) q.push(child)
    }
  }
  for (let i = 1; i <= n; i++) {
    if (indegree[i] > 0) return []
  }
  return res
}
