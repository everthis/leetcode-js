/**
 * @param {number[][]} mat
 * @return {number}
 */
const maxIncreasingCells = function (mat) {
  let m = mat.length
  let n = mat[0].length

  const p = Array.from({ length: m * n }, () => Array(2).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      p[i * n + j][0] = i
      p[i * n + j][1] = j
    }
  }
  p.sort((a, b) => mat[a[0]][a[1]] - mat[b[0]][b[1]])

  let rmax = new Array(m).fill(0)

  let cmax = new Array(n).fill(0)
  let ans = 0
  let start = 0,
    end = 0
  for (; start < m * n; start = end) {
    let sv = mat[p[start][0]][p[start][1]]

    for (end = start + 1; end < m * n; end++) {
      if (sv != mat[p[end][0]][p[end][1]]) {
        break
      }
    }

    let list = []
    for (let t = start; t < end; t++) {
      let i = p[t][0],
        j = p[t][1]
      let max = Math.max(rmax[i], cmax[j]) + 1
      list.push([i, j, max])
      ans = Math.max(ans, max)
    }
    for (let ints of list) {
      let i = ints[0],
        j = ints[1],
        max = ints[2]
      rmax[i] = Math.max(rmax[i], max)
      cmax[j] = Math.max(cmax[j], max)
    }
  }
  return ans
}
