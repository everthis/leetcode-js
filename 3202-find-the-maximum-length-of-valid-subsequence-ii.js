/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumLength = function(nums, k) {
  const n = nums.length;
  const dp = Array.from({ length: k + 1 }, () => Array(k + 1).fill(0));
  let res = 0
  for(const e of nums) {
    const cur = e % k;
    for(let remain = 0; remain < k; remain++) {
      const prev = (k + remain - cur) % k;
      dp[cur][remain] = Math.max(dp[cur][remain], dp[prev][remain] + 1)
      res = Math.max(res, dp[cur][remain])
    }
  }

  return res
};

// another


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums, k) {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => Array(k).fill(1));
  table(nums, k, dp);

  let maxLength = 0;
  for (const row of dp) {
    for (const length of row) {
      maxLength = Math.max(maxLength, length);
    }
  }
  return maxLength;
}
function table(nums, k, dp) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const remainder = (nums[i] + nums[j]) % k;
      dp[i][remainder] = Math.max(dp[i][remainder], dp[j][remainder] + 1);
    }
  }
}



