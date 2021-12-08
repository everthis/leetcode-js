/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function(nums) {
  let res = 0
  for(const e of nums) {
    const str = '' + e
    if(str.length % 2 === 0) res++
  }
  return res
};
