/**
 * @param {number[][]} forest
 * @return {number}
 */
const cutOffTree = function (forest) {
  const n = forest.length
  if (n === 0) return 0
  const m = forest[0].length
  if (m === 0) return 0
  const entries = []
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (forest[i][j] > 0) {
        entries.push([forest[i][j], i, j])
      }
    }
  }
  entries.sort((e1, e2) => e1[0] - e2[0])
  const direct = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  const visited = Array(n)
    .fill(null)
    .map(() => Array(m).fill(0))
  const bfs = function (start, end) {
    for (let i = 0; i < n; i += 1)
      for (let j = 0; j < m; j += 1) visited[i][j] = 0
    let cur = [start],
      next = [],
      step = 0
    visited[start[0]][start[1]] = 1
    while (cur.length > 0) {
      next = []
      for (const [x, y] of cur) {
        if (x === end[0] && y === end[1]) return step
        for (const [dx, dy] of direct) {
          const p = x + dx,
            q = y + dy
          if (
            p < 0 ||
            q < 0 ||
            p >= n ||
            q >= m ||
            visited[p][q] === 1 ||
            forest[p][q] === 0
          )
            continue
          visited[p][q] = 1
          next.push([p, q])
        }
      }
      step += 1
      cur = next
    }
    return -1
  }
  let pre = [0, 0],
    totalCnt = 0
  for (const entry of entries) {
    const step = bfs(pre, entry.slice(1))
    if (step === -1) return -1
    totalCnt += step
    pre = entry.slice(1)
  }
  return totalCnt
}
