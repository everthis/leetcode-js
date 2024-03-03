/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
  const n = nums.length
  const a1 = [], a2 = []
  a1.push(nums[0])
  a2.push(nums[1])
  for(let i = 2; i < n; i++) {
    const e = nums[i]
    const l1 = a1[a1.length - 1], l2 = a2[a2.length - 1]
    if(l1 > l2) {
      a1.push(e)
    } else {
      a2.push(e)
    }
  }
  
  return a1.concat(a2)
};
