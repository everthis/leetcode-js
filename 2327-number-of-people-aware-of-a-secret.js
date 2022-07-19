/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
const peopleAwareOfSecret = function(n, delay, forget) {
    let cnt = new Array(n+1).fill(0);
    cnt[1] = 1;
    let i = 1;
    let MOD = 1_000_000_007;
    while (i+delay <= n) {
        for (let j = i+delay; j <= Math.min(n, i+forget-1); j++) {
            cnt[j] = (cnt[j]+cnt[i])%MOD;
        }
        i++;
    }
    let res = 0;
    for (let j = n; j > n-forget; j--) {
        res = (res + cnt[j])%MOD;
    }
    return res;
};

// another

/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
 const peopleAwareOfSecret = function(n, delay, forget) {
  const mod = 1e9 + 7
  const dp = Array(n + 1).fill(0)
  const { max } = Math
  dp[1] = 1
  let share = 0
  for(let i = 2; i <= n; i++) {
    share = (share + dp[max(0, i - delay)] - dp[max(i - forget, 0)] + mod) % mod
    dp[i] = share
  }
  let res = 0
  for(let i = n - forget + 1; i <= n; i++) {
    res = (res + dp[i]) % mod
  }
  return res
};
