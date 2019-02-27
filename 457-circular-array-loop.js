/**
 * @param {number[]} nums
 * @return {boolean}
 */
const circularArrayLoop = function(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) {
      continue;
    }
    let j = i,
      k = getNextIndex(i, nums);
    while (nums[k] * nums[i] > 0 && nums[getNextIndex(k, nums)] * nums[i] > 0) {
      if (j === k) {
        // check for loop with only one element
        if (j === getNextIndex(j, nums)) {
          break;
        }
        return true;
      }
      j = getNextIndex(j, nums);
      k = getNextIndex(getNextIndex(k, nums), nums);
    }
    // loop not found, set all element along the way to 0
    j = i;
    let val = nums[i];
    while (nums[j] * val > 0) {
      let next = getNextIndex(j, nums);
      nums[j] = 0;
      j = next;
    }
  }
  return false;
};

function getNextIndex(i, nums) {
  const n = nums.length;
  return i + nums[i] >= 0 ? (i + nums[i]) % n : n + ((i + nums[i]) % n);
}
