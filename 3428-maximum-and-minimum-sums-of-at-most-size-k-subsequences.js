/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minMaxSums = function(nums, k) {
  nums.sort((a, b) => a - b)
  let res = 0n
  const MOD = 1e9 + 7
  const ncr = Array.from({ length: nums.length + 1 }, () =>
    Array(k + 1).fill(0),
  )

  ncr[0][0] = 1
  for (let n = 1; n <= nums.length; n++) {
    ncr[n][0] = 1
    for (let r = 1; r <= k; r++)
      ncr[n][r] = (ncr[n - 1][r - 1] + ncr[n - 1][r]) % MOD
  }

  for (let n = 0; n < nums.length; n++) {
    let numberOfSubsequences = 0
    for (let r = 0; r <= k - 1; r++)
      if (n >= r)
        numberOfSubsequences = (numberOfSubsequences + ncr[n][r]) % MOD
    res =
      (res +
        ((BigInt(nums[n] + nums[nums.length - n - 1]) *
          BigInt(numberOfSubsequences)) %
          BigInt(MOD))) %
      BigInt(MOD)
  }
  return Number(res)
};
