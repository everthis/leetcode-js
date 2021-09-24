/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function(nums) {
  const N = nums.length;
  if(N === 1) return 0;
  nums.sort((a, b) => a - b)
  let M = 1;
  for(let i = 1; i < N; i++) {
    if(nums[i] != nums[i-1]) nums[M++] = nums[i];
  }
  
  let j = 0;
  let res = N;
  for(let i = 0; i < M; i++) {
    // let `j` point to the first element that is out of range -- `> nums[i] + N - 1`.
    while(j < M && nums[j] <= N + nums[i] - 1) j++;
    // The length of this subarray is `j - i`. 
    // We need to replace `N - (j - i)` elements to make it continuous.
    res = Math.min(res, N - (j - i));
  }
  
  return res;
};
