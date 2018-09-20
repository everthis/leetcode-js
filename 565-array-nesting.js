/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayNesting = function(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== Number.MAX_SAFE_INTEGER) {
      let start = nums[i],
        count = 0;
      while (nums[start] !== Number.MAX_SAFE_INTEGER) {
        let temp = start;
        start = nums[start];
        count++;
        nums[temp] = Number.MAX_SAFE_INTEGER;
      }
      res = Math.max(res, count);
    }
  }
  return res;
};
