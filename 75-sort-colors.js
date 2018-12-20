/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const sortColors = function(nums) {
    const counts = {};
    for (const n of nums) {
        if (!counts[n]) counts[n] = 0;
        counts[n]++;
    }
    
    let val = 0;
    for (let i = 0; i < nums.length;) {
        let count = counts[val];
        while (count > 0) {
            nums[i] = val;
            count--;
            i++;
        }
        val+=1;
    }
    
    return nums;
};
