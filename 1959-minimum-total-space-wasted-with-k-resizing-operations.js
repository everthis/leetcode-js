/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minSpaceWastedKResizing = function(nums, k) {
  const n = nums.length, INF = 200 * 1e6;
  const memo = Array.from({ length: 200 }, () => Array(200));
  return dp(nums, 0, k);  
  function dp(nums, i, k) {
    if (i === n) return 0;
    if (k === -1) return INF;
    if (memo[i][k] != null) return memo[i][k];
    let ans = INF, maxNum = nums[i], totalSum = 0;
    for (let j = i; j < n; j++) {
      maxNum = Math.max(maxNum, nums[j]);
      totalSum += nums[j];
      const wasted = maxNum * (j - i + 1) - totalSum;
      ans = Math.min(ans, dp(nums, j + 1, k - 1) + wasted);
    }
    return memo[i][k] = ans;
  }
};

