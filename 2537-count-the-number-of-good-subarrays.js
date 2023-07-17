/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countGood = function(nums, k) {
  let res = 0;
  const count = new Map()
  for(let i = 0, j = 0; j < nums.length; ++j){
    k -= count.get(nums[j]) || 0;
    count.set(nums[j], (count.get(nums[j]) || 0) + 1);
    while(k <= 0) {
      count.set(nums[i],count.get(nums[i]) - 1);
      k += count.get(nums[i]);
      i++
    }
    res += i;
  }
  return res;
};
