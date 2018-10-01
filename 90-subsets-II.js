/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  bt(res, nums, [], 0);
  return res;
};

function bt(res, nums, arr, start) {
  res.push(arr.slice(0));
  for (let i = start; i < nums.length; i++) {
    if (i === start || nums[i] !== nums[i - 1]) {
      arr.push(nums[i]);
      bt(res, nums, arr, i + 1);
      arr.pop();
    }
  }
}
