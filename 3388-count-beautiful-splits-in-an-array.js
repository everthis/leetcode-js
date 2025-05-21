/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSplits = function (nums) {
  const n = nums.length
  // lcps[i][j] = length of the longest common prefix between nums[i:] and nums[j:]
  const lcps = Array.from({ length: n }, () => Array(n).fill(0))

  // Calculate longest common prefixes
  for (let x = 0; x < n; ++x) {
    const lcp = lcps[x]
    let max_i = x,
      max_r = x
    for (let i = x + 1; i < n; ++i) {
      if (max_r >= i) {
        lcp[i] = Math.min(max_r - i + 1, lcp[i - max_i + x])
      }
      while (i + lcp[i] < n && nums[i + lcp[i]] === nums[lcp[i] + x]) {
        lcp[i]++
      }
      if (i + lcp[i] - 1 > max_r) {
        max_i = i
        max_r = i + lcp[i] - 1
      }
    }
  }

  let res = 0
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n - 1; ++j) {
      // Check if prefix conditions are satisfied
      if (lcps[0][i + 1] >= i + 1 && j - i >= i + 1) {
        res++
        continue
      }
      if (lcps[i + 1][j + 1] >= j - i) {
        res++
        continue
      }
    }
  }

  return res
}
