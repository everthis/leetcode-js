/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const minTrioDegree = function (n, edges) {
  let ans = 10 ** 8
  const adj = []
  const deg = {}

  function incDeg(u) {
    if (deg[u] == null) deg[u] = 0
    deg[u]++
  }
  for (let i = 0; i < n; i++) {
    adj.push(Array(n).fill(false))
  }

  for (let [u, v] of edges) {
    adj[u - 1][v - 1] = true
    adj[v - 1][u - 1] = true
    incDeg(u - 1)
    incDeg(v - 1)
  }
  for (let u1 = 0; u1 < n; u1++) {
    for (let u2 = u1 + 1; u2 < n; u2++) {
      for (let u3 = u2 + 1; u3 < n; u3++) {
        if (adj[u1][u2] && adj[u2][u3] && adj[u3][u1]) {
          let tmp = deg[u1] + deg[u2] + deg[u3] - 6
          ans = Math.min(ans, tmp)
        }
      }
    }
  }

  if (ans > 10000000) ans = -1
  return ans
}
