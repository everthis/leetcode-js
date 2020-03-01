/**
 * @param {string} s
 * @return {string}
 */
const encode = function(s) {
  let N = s.length
  let dp = Array(N)
    .fill(0)
    .map(() => Array(N))
  for (let len = 1; len <= N; len++) {
    for (let i = 0; i <= N - len; i++) {
      let j = i + len - 1
      dp[i][j] = s.slice(i, j + 1)
      if (len > 4) {
        for (let m = i; m < j; m++) {
          if (dp[i][j].length > dp[i][m].length + dp[m + 1][j].length) {
            dp[i][j] = dp[i][m] + dp[m + 1][j]
          }
        }
        let substr = s.slice(i, j + 1)
        for (let k = 1; k <= Math.floor(len / 2); k++) {
          if (len % k === 0) {
            let first = s.slice(i, i + k)
            if (substr.split(first).join('') === '') {
              let newStr = len / k + '[' + dp[i][i + k - 1] + ']'
              if (newStr.length < dp[i][j].length) {
                dp[i][j] = newStr
              }
            }
          }
        }
      }
    }
  }
  return dp[0][N - 1]
}
