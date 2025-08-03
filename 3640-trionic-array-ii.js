/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumTrionic = function(nums) {
    let n = nums.length, res = Number.MIN_SAFE_INTEGER, psum = nums[0];
    for (let l = 0, p = 0, q = 0, r = 1; r < nums.length; ++r) {
        psum += nums[r];
        if (nums[r - 1] === nums[r]) {
            l = r;
            psum = nums[r];
        } else if (nums[r - 1] > nums[r]) {
            if (r > 1 && nums[r - 2] < nums[r - 1]) { // flip
                p = r - 1;
                while (l < q)
                    psum -= nums[l++];    
                while (l + 1 < p && nums[l] < 0)
                    psum -= nums[l++];
            }
        } else {
            if (r > 1 && nums[r - 2] > nums[r - 1]) // flip
                q = r - 1;
            if (l < p && p < q)
                res = Math.max(res, psum);
        }
    }
    return res; 
};
