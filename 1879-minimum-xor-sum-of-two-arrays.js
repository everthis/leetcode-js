/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minimumXORSum = function(nums1, nums2) {
  const dp = Array(1 << nums2.length).fill(Infinity)
  return dfs(dp, nums1, nums2, 0, 0)
};

function dfs(dp, a, b, i, mask) {
  if(i >= a.length) return 0
  if(dp[mask] === Infinity) {
    for(let j = 0; j < b.length; j++) {
      if((mask & (1 << j)) === 0) {
        dp[mask] = Math.min(dp[mask], (a[i] ^ b[j]) + dfs(dp, a, b, i + 1, mask + (1 << j)))
      }
    }
  }
  return dp[mask]
}
