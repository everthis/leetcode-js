/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
const destroyTargets = function(nums, space) {
  let maxCount = -Infinity;
  const map = {};

  for (const num of nums) {
    const reminder = num % space;
    map[reminder] = (map[reminder] || 0) + 1;
    maxCount = Math.max(maxCount, map[reminder]);
  }

  let ans = Infinity;
  for (const num of nums) {
    if (map[num % space] === maxCount) {
      ans = Math.min(ans, num);
    }
  }

  return ans;
};
