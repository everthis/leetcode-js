/**
 * @param {number[]} nums
 * @return {string}
 */
const optimalDivision = function(nums) {
  const len = nums.length
  if(len <= 2) return len === 2 ? `${nums[0]}/${nums[1]}` : nums.join('')
  let res = `${nums[0]}/(${nums[1]}`
  for(let i = 2; i < len; i++) {
    res += `/${nums[i]}`
  }
  return res + ')'
};
