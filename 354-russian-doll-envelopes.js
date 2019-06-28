/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = function(envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] == b[0]) {
      return b[1] - a[1]
    } else {
      return a[0] - b[0]
    }
  })
  const n = envelopes.length
  const dp = []
  for (let i = 0; i < n; i++) {
    let l = 0,
      r = dp.length,
      t = envelopes[i][1]
    while (l < r) {
      let m = l + ~~((r - l) / 2)
      if (dp[m] < t) l = m + 1
      else r = m
    }
    if (r >= dp.length) dp.push(t)
    else dp[r] = t
  }
  return dp.length
}
