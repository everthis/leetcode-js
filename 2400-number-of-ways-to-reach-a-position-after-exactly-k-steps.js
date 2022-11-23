const dp = Array.from({ length: 1000 + 1 }, () => Array(1000 + 1).fill(0))
const mod = 1e9 + 7
/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
const numberOfWays = function(startPos, endPos, k) {
    const { abs } = Math
    if (dp[1][1] == 0) {
        for (let k = 1; k <= 1000; ++k) {
            dp[k][k] = 1;
            for (let i = 0; i < k; ++i) {
                dp[k][i] = ((i === 0 ? dp[k - 1][1] : dp[k - 1][i - 1]) + dp[k - 1][i + 1]) % mod;                
            }
        }        
    }

    return dp[k][abs(startPos - endPos)];
};

// another

/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function(startPos, endPos, k) {
  const ll = BigInt, mod = ll(1e9 + 7), N = 1005;

  let fact, ifact, inv;
  const comb_init = () => {
      fact = Array(N).fill(0);
      ifact = Array(N).fill(0);
      inv = Array(N).fill(0);
      fact[0] = ifact[0] = inv[1] = 1n;
      for (let i = 2; i < N; i++) inv[i] = (mod - mod / ll(i)) * inv[mod % ll(i)] % mod;
      for (let i = 1; i < N; i++) {
          fact[i] = fact[i - 1] * ll(i) % mod;
          ifact[i] = ifact[i - 1] * inv[i] % mod;
      }
  };

  const comb = (n, k) => {
      if (n < k || k < 0) return 0;
      return fact[n] * ifact[k] % mod * ifact[n - k] % mod;
  };

  comb_init();
  let res = 0n;
  for (let i = 0; i <= k; i++) {
      let moveRight = i, moveLeft = k - i;
      if (startPos + moveRight - moveLeft == endPos) res += comb(k, i);
  }
  return res;
  
};
