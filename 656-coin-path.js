/**
 * @param {number[]} A
 * @param {number} B
 * @return {number[]}
 */
const cheapestJump = function (A, B) {
  if (A[A.length - 1] < 0) return []
  let dp = []
  let nextTo = []
  dp[A.length - 1] = A[A.length - 1]
  nextTo[A.length - 1] = -1
  for (let i = A.length - 2; i >= 0; i--) {
    dp[i] = -1
    if (A[i] === -1) continue
    let cost = Infinity
    for (let j = i + 1; j <= Math.min(i + B, A.length - 1); j++) {
      if (dp[j] !== -1 && dp[j] < cost) {
        cost = dp[j]
        nextTo[i] = j
      }
    }
    if (cost < Infinity) dp[i] = cost + A[i]
  }
  let ans = []
  if (dp[0] >= 0) {
    let p = 0
    while (p >= 0) {
      ans.push(p + 1)
      p = nextTo[p]
    }
  }
  return ans
}
