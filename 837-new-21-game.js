/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
const new21Game = function(N, K, W) {
  if (K === 0 || N >= K + W) {
    return 1;
  }
  const dp = [];
  let Wsum = 1;
  let res = 0;
  dp[0] = 1;
  for (let i = 1; i <= N; i++) {
    dp[i] = Wsum / W;
    if (i < K) {
      Wsum += dp[i];
    } else {
      res += dp[i];
    }
    if (i - W >= 0) {
      Wsum -= dp[i - W];
    }
  }
  return res;
};

console.log(new21Game(6, 1, 10));
console.log(new21Game(10, 1, 10));
console.log(new21Game(21, 17, 10));
