/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const kConcatenationMaxSum = function(arr, k) {
  const MOD = 1e9 + 7,
    INF = 1e4 + 1;
  const kadane = (A, sum = 0, ans = -INF) => {
    for (let x of A) {
      sum = Math.max(0, sum + x);
      ans = Math.max(ans, sum);
    }
    return [sum, ans];
  };
  const [sum1, ans1] = kadane(arr);
  const [sum2, ans2] = kadane(arr, sum1);
  const [sum3, ans3] = kadane(arr, sum2);
  const delta1 = ans2 - ans1,
    delta2 = ans3 - ans2;
  return k == 1 || delta1 == 0
    ? ans1
    : delta2 == 0
    ? ans2
    : ans1 + ((delta1 * (k - 1)) % MOD);
};
