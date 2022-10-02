/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
const buildMatrix = function (k, rowConditions, colConditions) {
  const res = Array.from({ length: k }, () => Array(k).fill(0))

  const row = khansAlgo(rowConditions, k)
  if (row.length != k) return []

  const col = khansAlgo(colConditions, k)
  if (col.length != k) return []

  const idx = Array(k + 1).fill(0)
  for (let j = 0; j < col.length; j++) {
    idx[col[j]] = j
  }
  for (let i = 0; i < k; i++) {
    res[i][idx[row[i]]] = row[i]
  }
  return res

  function khansAlgo(r, k) {
    const indegree = Array(k + 1).fill(0)
    const adj = Array.from({ length: k + 1 }, () => Array())

    for (let x of r) {
      indegree[x[1]]++
      adj[x[0]].push(x[1])
    }
    const row = []
    const q = []
    for (let i = 1; i <= k; i++) {
      if (indegree[i] == 0) {
        q.push(i)
      }
    }
    while (q.length) {
      let t = q.pop()

      row.push(t)
      for (let x of adj[t] || []) {
        indegree[x]--
        if (indegree[x] == 0) {
          q.push(x)
        }
      }
    }
    return row
  }
}



// another

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
