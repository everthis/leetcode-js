/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
   let res = 0
   const n = nums.length
   for(let i = 0;i < n - 2; i++) {
     for(let j = i + 1; j < n - 1; j++) {
       for(let k = j + 1; k < n; k++) {
         if(nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
           res++
         }
       }
     }
   }
  return res
};
