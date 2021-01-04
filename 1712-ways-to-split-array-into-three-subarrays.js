/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToSplit = function (nums) {
  const N = nums.length
  let ret = 0
  const presum = Array(N + 1).fill(0), MOD = 10 ** 9 + 7
  for (let i = 0; i < N; i++) presum[i + 1] = presum[i] + nums[i]
  let avg = (presum[N] / 3 + 1) >> 0
  for (let l = 1, m = 2, r = 2; l < N - 1; l++) {
    if (presum[l] > avg) break
    while (m < N && presum[l] > presum[m] - presum[l]) m++
    m = Math.max(m, l + 1)
    if (m > r) r = m
    while (r < N && presum[N] - presum[r] >= presum[r] - presum[l]) r++
    ret += r - m
    if (ret >= MOD) ret -= MOD
  }
  return ret
}
