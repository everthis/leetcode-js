/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = function (nums, k) {
  const memo = {0: 1}
  let sum = 0, res = 0
  for(const e of nums) {
    sum += e
    const remain = ( sum % k + k) % k
    res += memo[remain] ?? 0
    memo[remain] = (memo[remain] ?? 0) + 1 
  }
  return res
}
