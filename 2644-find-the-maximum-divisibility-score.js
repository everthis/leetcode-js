/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    divisors.sort((a, b) => a - b)
  nums.sort((a, b) => a - b)
  
  let arr = [], ma = 0
  for(let i = 0; i < divisors.length; i++) {
    const div = divisors[i]
    let cnt = 0
    for(let j = 0; j < nums.length; j++) {
      if(nums[j] % div === 0) cnt++
    }
    arr[i] = cnt
    ma = Math.max(ma, cnt)
  }
  
  for(let i = 0; i < divisors.length; i++) {
    if(arr[i] === ma) return divisors[i]
  }
};
