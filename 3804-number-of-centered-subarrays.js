/**
 * @param {number[]} nums
 * @return {number}
 */
var centeredSubarrays = function(nums) {
  const n = nums.length
  let res = 0

  for(let i = 0; i < n; i++) {
    let cur = 0
    const v = new Set()
    for(let j = i; j < n; j++) {
      cur += nums[j]
      v.add(nums[j])
      if(v.has(cur)) {
        res++
      }
    }
  }

  return res
};
