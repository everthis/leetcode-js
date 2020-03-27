/**
 * @param {number[][]} flights
 * @param {number[][]} days
 * @return {number}
 */
const maxVacationDays = function (flights, days) {
  const N = flights.length
  let dp = new Array(N).fill(0)
  for (let k = days[0].length - 1; k >= 0; k--) {
    const tmp = new Array(N)
    for (let i = 0; i < N; i++) {
      tmp[i] = days[i][k] + dp[i]
      for (let j = 0; j < N; j++) {
        if (flights[i][j] === 0) continue
        tmp[i] = Math.max(tmp[i], days[j][k] + dp[j])
      }
    }
    dp = tmp
  }
  return dp[0]
}
