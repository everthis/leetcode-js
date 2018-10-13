/**
 * @param {number[]} nums
 * @return {number}
 */
const triangleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let n = nums.length;
  for (let i = n - 1; i >= 2; i--) {
    let lo = 0;
    let mid = i - 1;
    while (lo < mid) {
      if (nums[lo] + nums[mid] > nums[i]) {
        count += mid - lo;
        mid -= 1;
      } else {
        lo += 1;
      }
    }
  }
  return count;
};

console.log(triangleNumber([2, 2, 3, 4]));
