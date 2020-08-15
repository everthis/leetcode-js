/**
 * @param {number[][]} arr
 * @return {number}
 */
const minFallingPathSum = function (arr) {
  const n = arr.length
  for (let i = 1; i < n; i++) {
    const [m1, m2] = [...arr[i - 1]].sort((a, b) => a - b).slice(0, 2)
    for (j = 0; j < n; j++) {
      arr[i][j] += arr[i - 1][j] !== m1 ? m1 : m2
    }
  }
  return Math.min(...arr[n - 1])
}
