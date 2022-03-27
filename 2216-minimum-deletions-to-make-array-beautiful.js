/**
 * @param {number[]} nums
 * @return {number}
 */
const minDeletion = function(nums) {
  let res = 0, i = 0
  for(i = 0, n = nums.length; i < n - 1;) {
    if(nums[i] === nums[i + 1]) {
      res++
      i++
    }else{
      i += 2
    }
  }
  if((nums.length - res) % 2 === 1) res++
  
  return res
};
