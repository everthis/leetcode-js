/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumXOR = function(nums) {
  let res = 0
  for(const e of nums)  res |= e
  
  return res
};
