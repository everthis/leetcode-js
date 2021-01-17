/**
 * @param {number[]} nums
 * @return {number}
 */
const tupleSameProduct = function(nums) {
  const m = {}
  const len = nums.length
  for(let i = 0; i < len - 1; i++) {
    for(let j = i + 1; j < len; j++) {
      const tmp = nums[i] * nums[j]
      if(m[tmp] == null) m[tmp] = 0
      m[tmp]++
    } 
  }
  let res = 0
  Object.keys(m).forEach(e => {
    if(m[e] > 1) res += m[e] * (m[e] - 1)  * 4
  })
  
  return res
};
