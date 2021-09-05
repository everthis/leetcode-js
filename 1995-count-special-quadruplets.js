/**
 * @param {number[]} nums
 * @return {number}
 */
const countQuadruplets = function(nums) {
  let res = 0
  for(let a = 0, n = nums.length; a < n - 3; a++) {
    for(let b = a + 1; b < n - 2; b++) {
      for(let c = b + 1; c < n - 1; c++) {
        for(let d = c + 1; d < n; d++) {
          if(nums[a] + nums[b] + nums[c] === nums[d]) res++
        }
      }
    }
  }
  
  
  return res
  
};
