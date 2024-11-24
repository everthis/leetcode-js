/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} op1
 * @param {number} op2
 * @return {number}
 */
var minArraySum = function(nums, k, op1, op2) {
    const n = nums.length;
    const cache = new Map();

    function dp(idx, left1, left2) {
        if (idx === n) {
            return 0;
        }
        const key = `${idx},${left1},${left2}`;
        if (cache.has(key)) {
            return cache.get(key);
        }

        let ret = nums[idx] + dp(idx + 1, left1, left2);
        if (left1 && left2) {
            if (nums[idx] >= k) {
                ret = Math.min(ret, Math.floor((nums[idx] - k + 1) / 2) + dp(idx + 1, left1 - 1, left2 - 1));
            }
            if (Math.floor((nums[idx] + 1) / 2) >= k) {
                ret = Math.min(ret, Math.floor((nums[idx] + 1) / 2) - k + dp(idx + 1, left1 - 1, left2 - 1));
            }
        }
        if (left1) {
            ret = Math.min(ret, Math.floor((nums[idx] + 1) / 2) + dp(idx + 1, left1 - 1, left2));
        }
        if (left2 && nums[idx] >= k) {
            ret = Math.min(ret, nums[idx] - k + dp(idx + 1, left1, left2 - 1));
        }

        cache.set(key, ret);
        return ret;
    }

    return dp(0, op1, op2);
};
