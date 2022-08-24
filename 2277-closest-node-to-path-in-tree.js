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
