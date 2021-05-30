/**
 * @param {number[]} dist
 * @param {number} speed
 * @param {number} hoursBefore
 * @return {number}
 */
const minSkips = function (dist, speed, hoursBefore) {
  let left = 0
  let right = dist.length

  while (left < right) {
    let mid = ~~(left + (right - left) / 2)
    if (dfs(dist, speed, mid) > 1.0 * hoursBefore) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return dfs(dist, speed, left) <= 1.0 * hoursBefore ? left : -1
  function dfs(dist, speed, skips) {
    const dp = Array.from({ length: dist.length }, () =>
      Array(skips + 1).fill(0)
    )
    let eps = 1e-9
    for (let i = 0; i <= skips; i++) {
      dp[0][i] = (dist[0] * 1.0) / speed - eps
    }

    for (let i = 1; i < dist.length; i++) {
      dp[i][0] = Math.ceil(dp[i - 1][0]) + (dist[i] * 1.0) / speed - eps
      for (let j = 1; j <= skips; j++) {
        let time = dp[i - 1][j - 1] + (dist[i] * 1.0) / speed - eps
        dp[i][j] = Math.min(
          time,
          Math.ceil(dp[i - 1][j]) + (dist[i] * 1.0) / speed - eps
        )
      }
    }
    return dp[dist.length - 1][skips]
  }
}
