/**
 * @param {number[][]} grid
 * @return {number}
 */
const numDistinctIslands2 = function (grid) {
  const dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ]
  const rowSize = grid.length
  const colSize = grid[0].length
  const seen = Array.from({ length: rowSize }, () => Array(colSize).fill(false))
  const islands = new Set()
  for (let r = 0; r < rowSize; r++) {
    for (let c = 0; c < colSize; c++) {
      const shape = []
      dfs(r, c, shape)
      if (shape.length > 0) islands.add(canonical(shape))
    }
  }
  return islands.size
  function dfs(r, c, shape = []) {
    if (!inBound(r, c) || grid[r][c] !== 1 || seen[r][c]) return
    seen[r][c] = true
    shape.push(r * colSize + c)
    dirs.forEach(([dr, dc]) => dfs(r + dr, c + dc, shape))
  }
  function canonical(shape) {
    let ans = ''
    const lift = rowSize + colSize
    const n = shape.length
    const out = Array(n).fill(0)
    const xs = Array(n).fill(0)
    const ys = Array(n).fill(0)
    for (let rotate = 0; rotate < 8; rotate++) {
      for (let i = 0; i < n; i++) {
        const x = ~~(shape[i] / colSize)
        const y = shape[i] % colSize
        xs[i] = rotate <= 1 ? x : rotate <= 3 ? -x : rotate <= 5 ? y : -y
        ys[i] =
          rotate <= 3 ? (rotate % 2 === 0 ? y : -y) : rotate % 2 === 0 ? x : -x
      }
      const mx = Math.min(...xs)
      const my = Math.min(...ys)
      for (let i = 0; i < n; i++) {
        out[i] = (xs[i] - mx) * lift + (ys[i] - my)
      }
      const candidate = out.sort((a, b) => a - b).join(',')
      if (ans < candidate) ans = candidate
    }
    return ans
  }
  function inBound(r, c) {
    return r >= 0 && r < rowSize && c >= 0 && c < colSize
  }
}
