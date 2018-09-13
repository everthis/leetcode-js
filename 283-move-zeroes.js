/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  const len = nums.length;
  let l = len;
  for (let i = 0; i < l; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      l -= 1;
    } else {
      i += 1;
    }
  }
};
