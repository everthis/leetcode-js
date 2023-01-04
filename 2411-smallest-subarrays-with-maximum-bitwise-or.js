/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallestSubarrays = function (nums) {
  const n = nums.length,
    last = Array(30).fill(0),
    res = []
  for (let i = n - 1; i >= 0; i--) {
    res[i] = 1
    for (let j = 0; j < 30; j++) {
      if ((nums[i] & (1 << j)) > 0) last[j] = i
      res[i] = Math.max(res[i], last[j] - i + 1)
    }
  }
  return res
}
