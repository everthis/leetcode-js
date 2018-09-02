/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = function(nums) {
  const left = {};
  const right = {};
  const count = {};

  for (let i = 0; i < nums.length; i++) {
    if (!left.hasOwnProperty(nums[i])) {
      left[nums[i]] = i;
    }
    right[nums[i]] = i;
    count[nums[i]] = count[nums[i]] ? count[nums[i]] + 1 : 1;
  }
  const degree = Math.max(...Object.keys(count).map(el => count[el]));
  let res = nums.length;
  for (let el in count) {
    if (count.hasOwnProperty(el) && count[el] === degree) {
      res = Math.min(res, right[el] - left[el] + 1);
    }
  }

  return res;
};
