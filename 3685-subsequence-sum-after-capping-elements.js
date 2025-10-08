/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean[]}
 */
var subsequenceSumAfterCapping = function(nums, k) {
  const n = nums.length
  nums.sort((a, b) => a - b)

  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(false))

  // Base cases
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true
  }

  // Classic subset-sum started
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      if (nums[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j - nums[i - 1]] || dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  // Classic subset-sum finished

  const ans = []

  // Helper function for upper_bound equivalent in JS
  function upperBound(arr, target) {
    let left = 0,
      right = arr.length
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (arr[mid] <= target) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    return left
  }

  for (let x = 1; x <= n; x++) {
    const it = upperBound(nums, x)

    if (it === nums.length) {
      // if no element in nums is greater than x
      ans.push(dp[n][k])
    } else {
      const ind = it
      const sz = n - ind
      let flg = false

      for (let j = 0; j <= k; j++) {
        if (dp[ind][j]) {
          const reman = k - j
          if (reman % x === 0) {
            const multiple = reman / x
            if (multiple <= sz) {
              flg = true
              break
            }
          }
        }
      }
      ans.push(flg)
    }
  }

  return ans
};
