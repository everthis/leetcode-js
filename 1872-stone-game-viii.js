/**
 * @param {number[]} stones
 * @return {number}
 */
const stoneGameVIII = function (A) {
  let N = A.length,
    ans = -Infinity
  for (let i = 1; i < N; ++i) A[i] += A[i - 1] // now A[i] becomes prefix[i]
  let mx = A[N - 1] // dp[N - 1] = prefix[N - 1]
  for (let i = N - 2; i >= 0; --i) {
    ans = Math.max(ans, mx) // since dp[i] = mx, we try to use dp[i] to update ans.
    mx = Math.max(mx, A[i] - mx) // try to update mx using prefix[i] - dp[i]
  }
  return ans
}
