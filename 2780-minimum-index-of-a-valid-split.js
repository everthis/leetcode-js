/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
	let n = nums.length
	if (n == 1) {
		return -1
	}
	let mp = {}
	let mx = 0
	for (const num of nums) {
    if(mp[num] == null) mp[num] = 0
		mp[num]++
		if (mp[num] > n/2) {
			mx = num
		}
	}
	let c = 0
	for (let i = 0; i < n-1; i++) {
		let num = nums[i]
		if (num == mx) {
			c++
		}
		if (c > (i+1)/2 && mp[mx]-c > (n-i-1)/2) {
			return i
		}
	}
	return -1
};
