/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = function (m, n, ops) {
  for (let i = 0, len = ops.length; i < len; i++) {
    if (ops[i][0] < m) m = ops[i][0]
    if (ops[i][1] < n) n = ops[i][1]
  }
  return m * n
}
