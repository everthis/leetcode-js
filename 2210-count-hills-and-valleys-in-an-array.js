/**
 * @param {number[]} nums
 * @return {number}
 */
const countHillValley = function(nums) {
  const arr = [nums[0]], n = nums.length
  for(let i = 1; i < n; i++) {
    if(nums[i] !== nums[i - 1]) arr.push(nums[i])
  }
  let res = 0
  for(let i = 1; i < arr.length - 1; i++) {
     if(
       arr[i] > arr[i - 1] && arr[i] > arr[i + 1] ||
       arr[i] < arr[i - 1] && arr[i] < arr[i + 1]
     ) res++
  }
  
  return res
};
