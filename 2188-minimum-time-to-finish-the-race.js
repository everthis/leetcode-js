/**
 * @param {number[][]} tires
 * @param {number} changeTime
 * @param {number} numLaps
 * @return {number}
 */
 const minimumFinishTime = function (tires, changeTime, numLaps) {
  tires = preprocess(tires)
  let n = tires.length
  const { max, min } = Math
  // to handle the cases where numLaps is small
  // pre[i][j]: the total time to run j laps consecutively with tire i
  const pre = Array.from({ length: n }, () =>
    Array(20).fill(Infinity)
  )
  for (let i = 0; i < n; i++) {
    pre[i][1] = tires[i][0]
    for (let j = 2; j < 20; j++) {
      if (pre[i][j - 1] * tires[i][1] >= 2e9) break
      pre[i][j] = pre[i][j - 1] * tires[i][1]
    }
    // since we define it as the total time, rather than just the time for the j-th lap
    // we have to make it prefix sum
    for (let j = 2; j < 20; j++) {
      if (pre[i][j - 1] + pre[i][j] >= 2e9) break
      pre[i][j] += pre[i][j - 1]
    }
  }

  // dp[x]: the minimum time to finish x laps
  const dp = Array(numLaps + 1).fill(Infinity)
  for (let i = 0; i < n; i++) {
    dp[1] = min(dp[1], tires[i][0])
  }
  for (let x = 1; x <= numLaps; x++) {
    if (x < 20) {
      // x is small enough, so an optimal solution might never changes tires!
      for (let i = 0; i < n; i++) {
        dp[x] = min(dp[x], pre[i][x])
      }
    }
    for (let j = x - 1; j > 0 && j >= x - 18; j--) {
      dp[x] = min(dp[x], dp[j] + changeTime + dp[x - j])
    }
  }

  return dp[numLaps]
}

function preprocess(tires) {
  tires.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
  const res = []
  for (let t of tires) {
    if (res.length === 0 || res[res.length - 1][1] > t[1]) {
      res.push(t)
    }
  }
  return res
}
