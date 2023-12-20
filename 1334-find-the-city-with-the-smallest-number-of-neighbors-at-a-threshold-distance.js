function floyd_warshall (n, edges, start) {
  let d = [...Array(n)].map(() => Array(n).fill(Number.MAX_SAFE_INTEGER))
  for (const [u, v, cost] of edges) {
    // UG
    let c = cost == undefined ? 1 : cost
    d[u][v] = d[v][u] = c
  }
  // for (const [u, v, cost] of edges) d[u][v] = cost == undefined ? 1 : cost; // DG
  for (let i = start; i < n; i++) d[i][i] = 0
  for (let k = start; k < n; k++) {
    for (let i = start; i < n; i++) {
      for (let j = start; j < n; j++) {
        if (d[i][j] > d[i][k] + d[k][j]) d[i][j] = d[i][k] + d[k][j]
      }
    }
  }
  return d
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
const findTheCity = function(n, edges, distanceThreshold) {
  let dis = floyd_warshall(n, edges, 0),
  res = []
  for (let start = 0; start < n; start++) {
    let canReach = new Set()
    for (let dest = 0; dest < n; dest++) {
      if (start == dest) continue
      if (dis[start][dest] <= distanceThreshold) canReach.add(dest)
    }
    res.push([start, canReach.size])
  }
  res.sort((x, y) => {
    if (x[1] != y[1]) return x[1] - y[1]
    return y[0] - x[0]
  })
  return res[0][0]
}

