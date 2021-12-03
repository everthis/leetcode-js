/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countKDifference = function(nums, k) {
  const hash = {}
  let res = 0
  for(let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    if(hash[cur + k]) res += hash[cur + k]
    if(hash[cur - k]) res += hash[cur - k]

    if(hash[cur] == null) hash[cur] = 0
    hash[cur]++
  } 
  return res
};
