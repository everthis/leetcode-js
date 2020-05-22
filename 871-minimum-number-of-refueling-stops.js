/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
const minRefuelStops = function (target, startFuel, stations) {
  const dp = Array(stations.length + 1).fill(0)
  dp[0] = startFuel
  for (let i = 0; i < stations.length; ++i) {
    for (let t = i; t >= 0 && dp[t] >= stations[i][0]; --t) {
      dp[t + 1] = Math.max(dp[t + 1], dp[t] + stations[i][1])
    }
  }
  for (let t = 0; t <= stations.length; ++t) {
    if (dp[t] >= target) return t
  }
  return -1
}
