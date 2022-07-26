/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = function(nums, limit) {
    let maxd = [], mind = [];
    let i = 0, j;
    for (j = 0; j < nums.length; ++j) {
        // non-increase
        while (maxd.length && nums[j] > maxd[maxd.length - 1]) maxd.pop();
        // non-decrease
        while (mind.length && nums[j] < mind[mind.length - 1]) mind.pop();

        maxd.push(nums[j]);
        mind.push(nums[j]);

        if (maxd[0] - mind[0] > limit) {
            if (maxd[0] == nums[i]) maxd.shift();
            if (mind[0] == nums[i]) mind.shift();
            ++i;
        }
    }
    return j - i; 
};
