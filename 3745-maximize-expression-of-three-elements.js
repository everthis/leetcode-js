/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function(nums) {
   const n = nums.length
   let res = -Infinity
   for(let i = 0; i < n - 2; i++) {
     for(let j = i + 1; j < n - 1; j++) {
       for(let k = j + 1; k < n; k++) {
         res = Math.max(res, nums[i] + nums[j] - nums[k])
        res = Math.max(res, nums[i] - nums[j] + nums[k])
                  res = Math.max(res, -nums[i] + nums[j] + nums[k])
       }
     }
   }
  return res
};
