/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
  const n = nums.length
  let res = 0, m1 = 0, m2 = 0
  for(const e of nums) {
    if(e > m1) {
      m2 = m1
      m1 = e
    } else if(e > m2) {
      m2 = e
    }
  }

  return (m1 - 1) * (m2 - 1)
};
