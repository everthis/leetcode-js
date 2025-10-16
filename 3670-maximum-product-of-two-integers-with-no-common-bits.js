/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const max_n = Math.max(...nums)
  const msb = Math.floor(Math.log2(max_n))
  const maxMask = (1 << (msb + 1)) - 1
  const dp = new Array(maxMask + 1).fill(0)

  for (const x of nums) {
    dp[x] = x
  }

  for (let b = 0; b <= msb; ++b) {
    for (let mask = 0; mask < maxMask; ++mask) {
      if ((mask & (1 << b)) !== 0) {
        dp[mask] = Math.max(dp[mask], dp[mask ^ (1 << b)])
      }
    }
  }

  let res = 0n
  for (const n of nums) {
    res = BigInt(Math.max(Number(res), n * dp[maxMask ^ n]))
  }

  return Number(res)
};
