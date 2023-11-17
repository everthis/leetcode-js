/**
 * @param {number[][]} edges
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
const maximumPoints = function (edges, coins, k) {
  const n = coins.length
  const g = Array(n)
    .fill()
    .map(() => [])
  for (const edge of edges) {
    const [u, v] = edge
    g[u].push(v)
    g[v].push(u)
  }
  const dp = Array(n)
    .fill()
    .map(() => Array(15).fill(-1))
  const dfs = (node, parent, reduce) => {
    if (dp[node][reduce] !== -1) {
      return dp[node][reduce]
    }
    if (reduce >= 14) {
      return (dp[node][reduce] = 0)
    }
    let currCoins = coins[node]
    for (let j = 0; j < reduce; j++) {
      currCoins = Math.floor(currCoins / 2)
    }
    let way1 = currCoins - k
    let way2 = Math.floor(currCoins / 2)
    for (const child of g[node]) {
      if (child !== parent) {
        dfs(child, node, reduce + 1)
        dfs(child, node, reduce)
        way1 += dp[child][reduce]
        way2 += dp[child][reduce + 1]
      }
    }
    dp[node][reduce] = Math.max(way1, way2)
    return dp[node][reduce]
  }
  dfs(0, -1, 0)

  return dp[0][0]
}
