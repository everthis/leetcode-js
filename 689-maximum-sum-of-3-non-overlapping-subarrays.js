/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSumOfThreeSubarrays = (nums, k) => {
  let n = nums.length,
    maxsum = 0
  let sum = new Array(n + 1).fill(0),
    posLeft = new Array(n).fill(0),
    posRight = new Array(n).fill(0),
    ans = new Array(3).fill(0)
  for (let i = 0; i < n; i++) sum[i + 1] = sum[i] + nums[i]
  for (let i = k, tot = sum[k] - sum[0]; i < n; i++) {
    if (sum[i + 1] - sum[i + 1 - k] > tot) {
      posLeft[i] = i + 1 - k
      tot = sum[i + 1] - sum[i + 1 - k]
    } else posLeft[i] = posLeft[i - 1]
  }
  posRight[n - k] = n - k
  for (let i = n - k - 1, tot = sum[n] - sum[n - k]; i >= 0; i--) {
    if (sum[i + k] - sum[i] >= tot) {
      posRight[i] = i
      tot = sum[i + k] - sum[i]
    } else posRight[i] = posRight[i + 1]
  }
  for (let i = k; i <= n - 2 * k; i++) {
    let l = posLeft[i - 1],
      r = posRight[i + k]
    let tot = sum[i + k] - sum[i] + (sum[l + k] - sum[l]) + (sum[r + k] - sum[r])
    if (tot > maxsum) {
      maxsum = tot
      ans[0] = l
      ans[1] = i
      ans[2] = r
    }
  }
  return ans
}
