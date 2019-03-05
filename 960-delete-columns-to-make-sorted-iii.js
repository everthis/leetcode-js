/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = function(A) {
  const dp = new Array(A[0].length).fill(1)
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < i; j++) {
      for (let k = 0; k <= A.length; k++) {
        if (k === A.length) dp[i] = Math.max(dp[i], dp[j] + 1)
        else if (A[k][j] > A[k][i]) break
      }
    }
  }
  return A[0].length - Math.max(...dp)
}

// another

const minDeletionSize = function(A) {
  const rows = A.length
  const cols = A[0].length
  let res = cols - 1
  let k
  const dp = new Array(cols).fill(1)
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < i; j++) {
      for (k = 0; k < rows; k++) {
        if (A[k][j] > A[k][i]) break
      }
      if (k === rows && dp[j] + 1 > dp[i]) dp[i] = dp[j] + 1
    }
    res = Math.min(res, cols - dp[i])
  }
  return res
}
