/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = function(nums) {
	let previous = nums[0];
	let used = false;
	for (let i = 1; i < nums.length; i++){
		if (nums[i] <= previous) {
      if (used) return false;
      used = true;
      if (i === 1 || nums[i] > nums[i - 2]) previous = nums[i];
		} else previous = nums[i];
	}
	return true;
};
