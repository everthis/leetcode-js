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
