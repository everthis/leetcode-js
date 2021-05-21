/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const rearrangeSticks = function(n, k) {
  const mod = BigInt(1e9 + 7)
  const g = Array.from({ length: 1001 }, () => Array(1001).fill(0n))
  g[1][1] = 1n
  for(let i = 2; i <= 1000; i++) {
    for(let j = 1; j <= i; j++ ) {
      g[i][j] = (g[i - 1][j - 1] + BigInt(i - 1) * g[i - 1][j] % mod) % mod
    }
  }
  return g[n][k]
};

// another

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const rearrangeSticks = function(n, k) {
    const MOD = 1e9 + 7;
    // first # can be smallest # in which case we recurse for (n - 1, k - 1) 
    // or it can not be and smallest can be in any of n - 1 otehr positions for recursed(n - 1, k)
    const dp = new Array(n + 1).fill().map( _ => new Array(k + 1).fill(0) );
    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= k; ++j) {
            if (j === i) {
                dp[i][j] = 1;
            } else if (j < i) {
                dp[i][j] = (dp[i - 1][j - 1] + (i - 1) * dp[i - 1][j]) % MOD;
            }
        }
    }
    return dp[n][k] % MOD;
    
};
