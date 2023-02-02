/**
 * @param {number[]} nums
 * @return {number}
 */
const xorBeauty = function(nums) {
  let res = 0
  for(const e of nums) res ^= e
  return res
};
