/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
  const nums = []
  let i = 0
  while (i < n) {
    nums[i] = start + 2 * i
    i++
  }
  // console.log(nums)
  let res = nums[0]
  for(let i = 1; i < n; i++) res ^= nums[i]
  return res
};
