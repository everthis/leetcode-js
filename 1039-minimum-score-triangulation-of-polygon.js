/**
 * @param {number[]} A
 * @return {number}
 */
const minScoreTriangulation = function(A) {
  if(A.length <= 2) return 0
  if(A.length === 3) return A[0] * A[1] * A[2]
  return chk(A, A.length)
};

function cost(points, i, j, k) {
  let p1 = points[i],
    p2 = points[j],
    p3 = points[k]
  return p1 * p2 * p3
}

function chk(points, n) {
  if (n < 3) return 0

  const table = Array.from({ length: n }, () => new Array(n).fill(0))

  for (let gap = 0; gap < n; gap++) {
    for (let i = 0, j = gap; j < n; i++, j++) {
      if (j < i + 2) table[i][j] = 0
      else {
        table[i][j] = Number.MAX_VALUE
        for (let k = i + 1; k < j; k++) {
          let val = table[i][k] + table[k][j] + cost(points, i, j, k)
          if (table[i][j] > val) table[i][j] = val
        }
      }
    }
  }
  return table[0][n - 1]
}
