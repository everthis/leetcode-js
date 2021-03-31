/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function(s) {
  if(s == null || s.length === 0) return 1
  if(s[0] === '0') return 0
  const set = new Set()
  const n = s.length
  for(let i = 1; i <= 26; i++) {
    set.add(`${i}`)
  }
  const dp = Array(n + 1).fill(0)
  dp[0] = dp[1] = 1
  for(let i = 2; i <= n; i++) {
    if(set.has(s[i - 2] + s[i - 1])) dp[i] += dp[i - 2]
    if(set.has(s[i - 1])) dp[i] += dp[i - 1]
  }
  return dp[n]
};


// another

/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function(s) {
  if (s.length === 0) return 0
  const N = s.length
  const dp = Array(N + 1).fill(0)
  dp[0] = 1
  dp[1] = s[0] === "0" ? 0 : 1
  for (let i = 2; i <= N; i++) {
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1]
    }
    if (s[i - 2] === "1" || (s[i - 2] === "2" && s[i - 1] <= "6")) {
      dp[i] += dp[i - 2]
    }
  }
  return dp[N]
}
