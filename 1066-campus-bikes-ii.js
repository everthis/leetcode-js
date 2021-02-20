/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
const assignBikes = function (workers, bikes) {
  const n = workers.length
  const m = bikes.length
  const dp = Array.from({ length: n + 1 }, () =>
    Array(1 << m).fill(Number.MAX_VALUE / 2)
  )

  dp[0][0] = 0
  let min = Number.MAX_VALUE
  for (let i = 1; i <= n; i++) {
    for (let s = 1; s < 1 << m; s++) {
      for (let j = 0; j < m; j++) {
        if ((s & (1 << j)) === 0) continue
        let prev = s ^ (1 << j)
        dp[i][s] = Math.min(
          dp[i - 1][prev] + dis(workers[i - 1], bikes[j]),
          dp[i][s]
        )
        if (i === n) min = Math.min(min, dp[i][s])
      }
    }
  }
  return min
}

function dis(p1, p2) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])
}
