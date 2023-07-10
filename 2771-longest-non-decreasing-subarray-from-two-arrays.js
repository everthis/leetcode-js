/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxNonDecreasingLength = function(nums1, nums2) {
    const n = nums1.length
    let dp = Array(3).fill(1)
    let ans = 1
    const { max } = Math
    for(let i = 1; i < n; i++) {
      const nextDp = Array(3).fill(1)
      if (nums1[i] >= nums1[i - 1]) {
          nextDp[1] = max(nextDp[1], dp[1] + 1)
      }
      if (nums1[i] >= nums2[i - 1]) {
          nextDp[1] = max(nextDp[1], dp[2] + 1)
      }
      if (nums2[i] >= nums1[i - 1]) {
          nextDp[2] = max(nextDp[2], dp[1] + 1)
      }
      if (nums2[i] >= nums2[i - 1]) {
          nextDp[2] = max(nextDp[2], dp[2] + 1)
      }
      dp = nextDp
      // console.log(dp, nextDp)
      ans = max(ans, max(...dp))
    }
    return ans
};

