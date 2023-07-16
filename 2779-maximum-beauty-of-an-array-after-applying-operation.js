/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
	nums.sort((a, b)  => a - b)
	let n = nums.length
	let res = 0
	let l = 0, r = 0
	while( r < n) {
		if (nums[l]+k >= nums[r]-k) {
			if (r-l+1 > res) {
				res = r - l + 1
			}
			r++
		} else {
			l++
		}
	}
	if (r-l > res) {
		res = r - l
	}
	return res
};
