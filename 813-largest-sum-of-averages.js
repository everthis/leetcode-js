/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumOfAverages = function(A, K) {
    const len = A.length
    const P = [0]
    for(let i = 0; i < len; i++) {
        P[i+1] = (P[i] || 0) + A[i]
    }
    const dp = []
    for(let j = 0; j < len; j++) {
        dp[j] = (P[len] - P[j]) / (len - j)
    }
    for(let m = 0; m < K - 1; m++) {
        for(let n = 0; n < len; n++) {
            for(let k = n + 1; k < len; k++) {
                dp[n] = Math.max(dp[n], (P[k] - P[n]) / (k - n) + dp[k])
            }
        }
    }
    return dp[0]
}
