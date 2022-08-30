/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
const getMaximumXor = function(nums, maximumBit) {
  const n = nums.length
  let xor = nums.reduce((ac, e) => ac ^ e, 0)
  let limit = 2 ** maximumBit - 1
  const res = []
  for(let i = n - 1; i >= 0; i--) {
    const tmp = limit ^ xor
    res.push(tmp)
    xor ^= nums[i]
  }
  
  return res
};
