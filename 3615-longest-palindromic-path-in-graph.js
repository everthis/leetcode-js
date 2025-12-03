/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} label
 * @return {number}
 */
var maxLen = function (n, edges, label) {
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }

  const dp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => new Array(1 << n).fill(-1)),
  )

  const dfs = (a, b, mask) => {
    if (dp[a][b][mask] !== -1) return dp[a][b][mask]

    if (a === b) return 1

    let ans = -1000
    for (const it of adj[a]) {
      if (it === b) ans = 2
    }

    for (const it1 of adj[a]) {
      if ((mask & (1 << it1)) !== 0) continue
      for (const it2 of adj[b]) {
        if ((mask & (1 << it2)) !== 0) continue
        if (label[it1] !== label[it2]) continue
        ans = Math.max(ans, 2 + dfs(it1, it2, mask | (1 << it1) | (1 << it2)))
      }
    }

    dp[a][b][mask] = ans
    return ans
  }

  let ans = 1

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (label[i] === label[j]) {
        ans = Math.max(ans, dfs(i, j, (1 << i) | (1 << j)))
      }
    }
  }

  return ans
}
