function maxCoins(arr) {
  const len = arr.length
  const nums = Array(len + 2).fill(0);
  let n = 1;
  for (const x of arr) if (x > 0) nums[n++] = x;
  nums[0] = nums[n++] = 1;

  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  for (let k = 2; k < n; k++) {
    for (let left = 0; left < n - k; left++) {
      let right = left + k;
      for (let i = left + 1; i < right; i++) {
        dp[left][right] = Math.max(
          dp[left][right],
          nums[left] * nums[i] * nums[right] + dp[left][i] + dp[i][right],
        );
      }
    }
  }

  return dp[0][n - 1];
}

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxCoins = iNums => {
  const nums = new Array(iNums.length + 2);
  let n = 1;
  for (let x of iNums) if (x > 0) nums[n++] = x;
  nums[0] = nums[n++] = 1;

  const memo = Array.from({ length: n }, () => new Array(n));
  return burst(memo, nums, 0, n - 1);
};

function burst(memo, nums, left, right) {
  if (left + 1 === right) return 0;
  if (memo[left][right] > 0) return memo[left][right];
  let ans = 0;
  for (let i = left + 1; i < right; ++i)
    ans = Math.max(
      ans,
      nums[left] * nums[i] * nums[right] +
        burst(memo, nums, left, i) +
        burst(memo, nums, i, right)
    );
  memo[left][right] = ans;
  return ans;
}
