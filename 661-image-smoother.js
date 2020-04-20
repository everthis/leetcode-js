/**
 * @param {number[][]} M
 * @return {number[][]}
 */
const imageSmoother = function (M) {
  const r = M.length
  if (r === 0) return 0
  const c = M[0].length
  if (c === 0) return 0
  const res = Array.from({ length: r }, () => Array(c).fill(0))
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      res[i][j] = helper(M, i, j, res)
    }
  }
  return res
}

function helper(M, i, j, res) {
  let val = M[i][j]
  let num = 1
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]
  for (let [dr, dc] of dirs) {
    const ii = i + dr
    const jj = j + dc
    if (M[ii] != null && M[ii][jj] != null) {
      val += M[ii][jj]
      num++
    }
  }
  return (val / num) >> 0
}
