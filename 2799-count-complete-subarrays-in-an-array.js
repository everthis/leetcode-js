/**
 * @param {number[]} nums
 * @return {number}
 */
const countCompleteSubarrays = function(nums) {
  const set = new Set(nums)
  const size = set.size

  let res = 0
  const n = nums.length

  for(let i = 0; i < n; i++) {
    const s = new Set()
    s.add(nums[i])
    for(let j = i; j < n; j++) {
      s.add(nums[j])
      if(s.size === size) res++
    }
  }
  
  return res
  
};
