/**
 * @param {number[]} A
 * @return {number}
 */
const numFactoredBinaryTrees = function(A) {
    const mod = 10 ** 9 + 7
    let res = 0
    A.sort((a, b) => a - b)
    const dp = {}
    for(let i = 0; i < A.length; i++) {
        dp[A[i]] = 1
        for(let j = 0; j < i; j++) {
            if(A[i] % A[j] === 0 && dp.hasOwnProperty(Math.floor( A[i] / A[j]))) {
                dp[A[i]] = (dp[A[i]] + dp[A[j]] * dp[Math.floor(A[i] / A[j])]) % mod
            }
        }
    }
    for(let el of Object.values(dp)) res = (res + el) % mod
    return res
};
