/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const maxUncrossedLines = function(A, B) {
  const lenA = A.length
  const lenB = B.length
  const dp = Array.from({length: lenA + 1}, () => new Array(lenB + 1).fill(0))
  for(let i = 1; i <= lenA; i++) {
    for(let j = 1; j <= lenB; j++) {
      if(A[i - 1] === B[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[lenA][lenB]
};


// another

const maxUncrossedLines = function(A, B) {
  const m = A.length,
    n = B.length
  const dp = new Array(n + 1).fill(0)
  let prev

  for (let i = 1; i <= m; i++) {
    prev = dp[0]
    for (let j = 1; j <= n; j++) {
      let backup = dp[j]
      if (A[i - 1] == B[j - 1]) dp[j] = prev + 1
      else dp[j] = Math.max(dp[j], dp[j - 1])
      prev = backup
    }
  }

  return dp[n]
}
