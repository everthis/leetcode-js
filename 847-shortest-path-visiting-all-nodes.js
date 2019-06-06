/**
 * @param {number[][]} graph
 * @return {number}
 */
const shortestPathLength = function(graph) {
  const N = graph.length
  const dist = Array.from({ length: 1 << N }, () => new Array(N).fill(N * N))
  for (let x = 0; x < N; x++) dist[1 << x][x] = 0
  for (let cover = 0; cover < 1 << N; cover++) {
    let repeat = true
    while (repeat) {
      repeat = false
      for (let head = 0; head < N; head++) {
        let d = dist[cover][head]
        for (let next of graph[head]) {
          let cover2 = cover | (1 << next)
          if (d + 1 < dist[cover2][next]) {
            dist[cover2][next] = d + 1
            if (cover == cover2) repeat = true
          }
        }
      }
    }
  }
  let ans = N * N
  for (let cand of dist[(1 << N) - 1]) ans = Math.min(cand, ans)
  return ans
}
