/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            res[i] = nums[i];
        } else if (nums[i] > 0) {
            const ind = (i + nums[i]) % n;
            res[i] = nums[ind];
        } else {
            const neg = Math.abs(nums[i]) % n;
            const ind = (i - neg + n) % n;
            // console.log(ind);
            res[i] = nums[ind];
        }
    }
    return res;
};
