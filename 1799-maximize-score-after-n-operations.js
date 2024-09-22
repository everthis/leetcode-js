/**
 * @param {number[]} nums
 * @return {number}
 */
const maxScore = function (nums) {
  const len = nums.length
  const n = len / 2
  const allMask = 2 ** 14 - 1
  const memo = Array.from({ length: n + 1 }, () => Array())
  
  return helper(1, 0)
  
  function helper(op, mask) {
    if(op > n) return 0
    if(memo[op][mask]) return memo[op][mask]

    let res = 0
    for(let i = 0; i < len; i++) {
      const a = nums[i]
      for(let j = i + 1; j < len; j++) {
        const b = nums[j]
        const newMask = (1 << i) + (1 << j)
        if((mask & newMask) === 0) {
          res = Math.max(res, op * gcd(a, b) + helper(op + 1, mask | newMask))
        }
      }
    }
    // console.log(res)
    memo[op][mask] = res
    
    return memo[op][mask]
  }
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

// another

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
