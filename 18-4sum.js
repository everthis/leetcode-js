/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
  return nSum(nums.sort((a, b) => a - b), target, 4, 0);
};

function nSum(nums, target, k, start) {
  const res = [];
  if (nums.length < k || k < 2 || target < nums[0] * k || target > nums[-1] * k)
    return res;
  if (k == 2) {
    // 2 sum; ( improved to O(n) )
    let r = nums.length - 1;
    let l = start;
    while (l < r) {
      if (nums[l] + nums[r] === target) {
        res.push([nums[l], nums[r]]);
        //skip duplication
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (nums[l] + nums[r] < target) {
        l++;
      } else {
        r--;
      }
    }
  } else {
    for (let i = start; i < nums.length - k + 1; i++) {
      if (i === start || (i > start && nums[i] !== nums[i - 1])) {
        let temp = nSum(nums, target - nums[i], k - 1, i + 1);
        temp.forEach(t => {
          t.push(nums[i]);
          res.push(t);
        });
      }
    }
  }
  return res;
}
