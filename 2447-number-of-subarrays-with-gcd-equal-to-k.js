/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarrayGCD = function (nums, k) {
  let res = 0
  const n = nums.length
  for (let i = 0; i < n; i++) {
    let cur = nums[i]
    for (let j = i; j < n; j++) {
      if (nums[j] % k !== 0) break
      cur = gcd(cur, nums[j])
      if (cur === k) res++
    }
  }

  return res

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
  }
}
