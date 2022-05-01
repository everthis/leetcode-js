/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
const countDistinct = function(nums, k, p) {
    let ans = 0;
    const se = new Set();
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let tmp = "";
        let cnt = 0;
        for (let j = i; j < n; j++) {
            if (nums[j] % p == 0)
                cnt++;
            if (cnt <= k) {
                tmp = tmp + (nums[j]) + "-";
                se.add(tmp);
            } else break;
        }
    }
    return se.size;
};
