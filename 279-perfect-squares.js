/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function(n) {
    const dp = new Array(n+1).fill(Number.MAX_VALUE)
    dp[0] = 0
    for(let i = 1; i <= n; i++) {
        let min = Number.MAX_VALUE
        let j = 1
        while(i - j*j >= 0) {
            min = Math.min(min, dp[i-j*j] + 1)
            ++j
        }
        dp[i] = min
    }
    return dp[n]
};
