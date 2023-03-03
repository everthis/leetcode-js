/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumReplacement = function(nums) {
  const n = nums.length
  let prev = nums[n - 1];;
  let ans = 0;
  for(let i = n - 2; i >= 0; i--){
      let noOfTime = ~~(nums[i] / prev); 
      if((nums[i]) % prev != 0){
        noOfTime++;
        prev = ~~(nums[i] / noOfTime);
      }   
      ans += noOfTime - 1;
  }
  return ans;
};
