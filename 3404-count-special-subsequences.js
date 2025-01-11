/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfSubsequences = function(nums) {
        let n = nums.length;
        let res = 0;
        const cnt = new Map();
        for (let r = 4; r < n - 2; ++r) {
            let q = r - 2;
            for (let p = 0; p < q - 1; ++p) {
                let key = 1.0 * nums[p] / nums[q];
                cnt.set(key, (cnt.get(key) || 0) + 1);
            }
            for (let s = r + 2; s < n; ++s) {
                let key = 1.0 * nums[s] / nums[r];
                res += cnt.get(key) || 0;
            }
        }
        return res;
};
