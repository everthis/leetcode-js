/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
const maxTaxiEarnings = function(n, rides) {
  const { max } = Math
  const rideStartAt = Array.from({length: n}, () => []);
  for (let ride of rides) {
    let s = ride[0], e = ride[1], t = ride[2];
    rideStartAt[s].push([e, e - s + t]);  // [end, dollar]
  }
  const dp = Array(n+1).fill(0);
  for (let i = n-1; i >= 1; --i) {
    for (let [e, d] of rideStartAt[i]) {
      dp[i] = max(dp[i], dp[e] + d);
    }
    dp[i] = max(dp[i], dp[i + 1]);
  }
  return dp[1];
};
