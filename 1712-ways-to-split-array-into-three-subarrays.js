/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToSplit = function (nums) {
  const N = nums.length
  let ret = 0
  const presum = Array(N + 1).fill(0)
  for (let i = 0; i < N; i++) presum[i + 1] = presum[i] + nums[i]
  let avg = (presum[N] / 3 + 1) >> 0
  for (let l = 1, r = 2, rr = 2; l < N - 1; l++) {
    if (presum[l] > avg) break
    while (r < N && presum[l] > presum[r] - presum[l]) r++
    r = Math.max(r, l + 1)
    if (r > rr) rr = r
    while (rr < N && presum[N] - presum[rr] >= presum[rr] - presum[l]) rr++
    ret += rr - r
    if (ret >= 1000000007) ret -= 1000000007
  }
  return ret
}
