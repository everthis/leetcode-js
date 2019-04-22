/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
   if(nums.length === 0) return 1
   const arr = []
   let max = Number.MIN_SAFE_INTEGER
   for(let i = 0, len = nums.length; i < len; i++) {
     if(nums[i] > 0) arr[nums[i]] = nums[i]
     if(nums[i] > max) max = nums[i]
   }
   for(let i = 1; i < max; i++) {
     if(arr[i] == null) return i
   }
   return max < 0 ? 1 : max + 1
};
