/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const minMoves = function(nums, limit) {
    const min = Math.min, max = Math.max
    const n = nums.length;
    const delta = Array(limit * 2 + 2).fill(0);
    for (let i = 0; i < n / 2; ++i) {
        let lo = 1 + min(nums[i], nums[n - i - 1]);
        let hi = limit + max(nums[i], nums[n - i - 1]);
        let sum = nums[i] + nums[n - i - 1];
        delta[lo]--;
        delta[sum]--;
        delta[sum + 1]++;
        delta[hi + 1]++;
    }
    let now = n;
    let ans = n;
    for (let i = 2; i <= limit * 2; ++i) {
        now += delta[i];
        ans = min(ans, now);
    }
    return ans;  
};



