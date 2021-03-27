/**
 * @param {number[]} nums
 * @return {number}
 */
const maxScore = function (nums) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  const n = nums.length / 2
  const memo = {}
  const traverse = (op, mask) => {
    if (op > n) {
      return 0
    }
    const idx = op * 100000 + mask
    if (memo[idx] === undefined) {
      let res = 0
      for (let i = 0; i < 2 * n - 1; i++) {
        if (mask & (1 << i)) continue
        for (let j = i + 1; j < 2 * n; j++) {
          if (mask & (1 << j)) continue
          const newMask = mask | (1 << i) | (1 << j)
          res = Math.max(
            res,
            traverse(op + 1, newMask) + op * gcd(nums[i], nums[j])
          )
        }
      }
      memo[idx] = res
    }
    return memo[idx]
  }
  const res = traverse(1, 0)
  return res
}
