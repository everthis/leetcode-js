/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */

const leastOpsExpressTarget = function(x, target) {
  let pows = [1]
  while (pows[pows.length - 1] < target) {
    pows.push(pows[pows.length - 1] * x)
  }
  let dp = {}
  for (let i = 0; i < pows.length; i++) {
    dp[pows[i]] = Math.abs(i - 1) + 1
  }
  let dpFunc = (t, unit) => {
    if (t <= 0) return 0
    if (dp[t]) return dp[t]
    let cur = t % (unit * x)
    let count = dp[unit]
    let pos = dpFunc(t - cur, unit * x) + (cur / unit) * count
    let neg = dpFunc(t + x * unit - cur, unit * x) + (x - cur / unit) * count
    dp[t] = Math.min(pos, neg)
    return dp[t]
  }
  return dpFunc(target, 1) - 1
}


// another

const leastOpsExpressTarget = function(x, y) {
  let pos = 0,
    neg = 0,
    k = 0,
    pos2,
    neg2,
    cur
  while (y > 0) {
    cur = y % x
    y = (y / x) >> 0
    if (k > 0) {
      pos2 = Math.min(cur * k + pos, (cur + 1) * k + neg)
      neg2 = Math.min((x - cur) * k + pos, (x - cur - 1) * k + neg)
      pos = pos2
      neg = neg2
    } else {
      pos = cur * 2
      neg = (x - cur) * 2
    }
    k++
  }
  return Math.min(pos, k + neg) - 1
}
