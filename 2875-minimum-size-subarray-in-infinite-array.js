/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minSizeSubarray = function(nums, target) {
    let sum = 0, su = 0;
    for (const a of nums) sum += a;
    let n = nums.length, k = Math.floor(target / sum), res = n;
    target %= sum;
    if (target === 0) {
        return k * n;
    }

    let dp = new Map();
    dp.set(0, -1);

    for (let i = 0; i < 2 * n; ++i) {
        su += nums[i % n];
        if (dp.has(su - target)) {
            res = Math.min(res, i - dp.get(su - target));
        }
        dp.set(su, i);
    }

    return res < n ? res + k * n : -1;
};
