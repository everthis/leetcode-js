/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} m
 * @return {number}
 */
var countSubarrays = function(nums, k, m) {
    let res = 0;
    let leftd = 0, leftv = 0, vcount = 0;
    let countd = new Map();
    let countv = new Map();

    for (let right = 0; right < nums.length; right++) {
        let curr = nums[right];
        
        countd.set(curr, (countd.get(curr) || 0) + 1);
        while (countd.size > k) {
            let val = countd.get(nums[leftd]);
            if (val === 1) countd.delete(nums[leftd]);
            else countd.set(nums[leftd], val - 1);
            leftd++;
        }

        let freq = (countv.get(curr) || 0) + 1;
        countv.set(curr, freq);
        if (freq === m) vcount++;

        while (vcount >= k) {
            let y = nums[leftv];
            let cy = countv.get(y);
            if (cy === m) vcount--;
            if (cy === 1) countv.delete(y);
            else countv.set(y, cy - 1);
            leftv++;
        }
        if (leftv > leftd) res += (leftv - leftd);
    }
    return res;
};
