/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
   const less = [], greater = [], mid = []
   for(const e of nums) {
     if(e < pivot) less.push(e)
     else if(e === pivot) mid.push(e)
     else greater.push(e)
   }
  
  return less.concat(mid, greater)
};
