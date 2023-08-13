/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
   let res = -1
   const n = nums.length
   
   for(let i = 0; i < n - 1; i++) {
     const arr = `${nums[i]}`.split('')
     arr.sort((a, b) => b - a)
     for(let j = 1; j < n; j++) {
          if(i === j) continue
          const ar = `${nums[j]}`.split('')
           ar.sort((a, b) => b - a)
       if(arr[0] === ar[0]) {
         res = Math.max(res, nums[i] + nums[j])
       }
     }
   }
   
   return res
};
