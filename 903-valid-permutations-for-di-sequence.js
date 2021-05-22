/**
 * @param {string} s
 * @return {number}
 */
const numPermsDISequence = function(s) {
  const n = s.length, mod = 1e9 + 7
  const dp = Array.from({ length: n + 1}, () => Array(n + 1).fill(0))
  dp[0][0] = 1
  for(let i = 1; i <= n; i++) {
    for(let j = 0; j <= i; j++) {
      if(s[i - 1] === 'D') {
        for(let k = j; k <= i - 1; k++) {
          dp[i][j] = (dp[i][j] + dp[i - 1][k]) % mod
        }
      } else {
        for(let k = 0; k < j; k++) {
          dp[i][j] = (dp[i][j] + dp[i - 1][k]) % mod
        }
      }
    }
  }
  let res = 0
  for(let i = 0; i <= n; i++) {
    res = (res + dp[n][i]) % mod
  }
  
  return res
};

// another

/**
 * @param {string} S
 * @return {number}
 */
const numPermsDISequence = function(S) {
  let n = S.length,
    mod = 10 ** 9 + 7
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0))
  for (let j = 0; j <= n; j++) dp[0][j] = 1
  for (let i = 0; i < n; i++)
    if (S.charAt(i) === 'I')
      for (let j = 0, cur = 0; j < n - i; j++)
        dp[i + 1][j] = cur = (cur + dp[i][j]) % mod
    else
      for (let j = n - i - 1, cur = 0; j >= 0; j--)
        dp[i + 1][j] = cur = (cur + dp[i][j + 1]) % mod
  return dp[n][0]
}
