/**
 * @param {number[]} nums
 * @return {number}
 */
const minDeletion = function(nums) {
  let res = 0, n = nums.length

  for(let i = 0; i < n; i += 2) {
    while(i < n - 1 && nums[i] === nums[i + 1]) {
      i++
      res++
    }
  }
  if((n - res) % 2 === 1) res++
  return res
};

// another

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
