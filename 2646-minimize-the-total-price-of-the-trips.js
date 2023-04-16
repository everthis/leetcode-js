/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @param {number[][]} trips
 * @return {number}
 */
var minimumTotalPrice = function (n, edges, price, trips) {
  const graph = []
  const { min, max } = Math
  for (const [u, v] of edges) {
    if (graph[u] == null) graph[u] = []
    if (graph[v] == null) graph[v] = []
    graph[u].push(v)
    graph[v].push(u)
  }

  const cnt = Array(n).fill(0)

  function dfs(p, i, e) {
    if (i == e) {
      ++cnt[i]
      return true
    }
    for (const j of graph[i] || []) {
      if (j != p && dfs(i, j, e)) {
        ++cnt[i]
        return true
      }
    }
    return false
  }

  for (const t of trips) dfs(-1, t[0], t[1])

  const dp = Array.from({ length: n }, () => Array(2).fill(Infinity))

  function minCost(pre, i, status) {
    if (dp[i][status] == Infinity) {
      dp[i][status] = (price[i] >> status) * cnt[i]
      for (const j of graph[i] || []) {
        if (j == pre) continue
        if (status == 1) dp[i][status] += minCost(i, j, 0)
        else dp[i][status] += min(minCost(i, j, 0), minCost(i, j, 1))
      }
    }
    return dp[i][status]
  }

  return min(minCost(-1, 0, 0), minCost(-1, 0, 1))
}
