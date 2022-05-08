/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function(pressedKeys) {
   const s = pressedKeys
   const mod = 1e9 + 7

    let n = s.length
    let dp = Array(n + 1).fill(0)
    dp[0] = 1
    dp[1] = 1
    let counter = Array(10).fill(3)
    counter[0] = 0
    counter[1] = 0
    counter[7] = 4
    counter[9] = 4
    for(let i = 2; i <= n; i++) {
        let x = +(s[i - 1])
        let j = 0
        while (j < counter[x] && i - 1 >= j && s[i - 1 - j] == s[i - 1]) {
            dp[i] += dp[i - 1 - j]
            j += 1              
        }

        dp[i] %= mod
    }

    return dp[n]
  
};


