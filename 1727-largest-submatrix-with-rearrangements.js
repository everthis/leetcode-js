/**
 * @param {number[][]} matrix
 * @return {number}
 */
const largestSubmatrix = function (a) {
  const n = a.length
  const m = a[0].length
  const count = Array(m).fill(0)
  let result = 0
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      count[j] = a[i][j] ? count[j] + 1 : 0
    }
    const b = count.slice()
    b.sort((a, b) => b - a)
    for (let j = 0; j < m; ++j) {
      result = Math.max(result, (j + 1) * b[j])
    }
  }
  return result
}
