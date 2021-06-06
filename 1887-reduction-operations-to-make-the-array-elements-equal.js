/**
 * @param {number[]} nums
 * @return {number}
 */
const reductionOperations = function(nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const arr = Array(n).fill(0)
  for(let i = 1; i < n; i++) {
    if(nums[i] > nums[i - 1]) arr[i] = 1
  }
  let res = 0, pre = 0
  
  for(let i = 1; i < n; i++) {
    if(arr[i] === 0) arr[i] = arr[i - 1]
    else arr[i] += arr[i - 1]
  }

  for(let e of arr) {
    res += e
  }
  return res
};
