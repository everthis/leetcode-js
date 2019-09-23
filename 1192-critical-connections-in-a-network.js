/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
const criticalConnections = function(n, connections) {
  const g = [],
    low = Array(n),
    res = []
  low.fill(0)
  for (let con of connections) {
    g[con[0]] = g[con[0]] || []
    g[con[1]] = g[con[1]] || []
    g[con[0]].push(con[1])
    g[con[1]].push(con[0])
  }
  const dfs = function(cur, v, p) {
    let dfn = cur
    low[v] = cur
    for (let i of g[v]) {
      if (i != p) {
        if (low[i] == 0) {
          cur++
          dfs(cur, i, v)
          if (low[i] > dfn) {
            res.push([i, v])
          }
        }
        low[v] = Math.min(low[v], low[i])
      }
    }
  }
  dfs(1, 0, -1)
  return res
}
