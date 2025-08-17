/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function (nums, queries) {
  const mod = 10 ** 9 + 7
  for (const q of queries) {
    let idx = q[0]
    while (idx <= q[1]) {
      nums[idx] = (nums[idx] * q[q.length - 1]) % mod
      idx += q[2]
    }
  }
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    res ^= nums[i]
  }
  return res
}
