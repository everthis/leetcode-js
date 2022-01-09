/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let one = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1)
            one++;
    }
    let maxOne = 0;
    for (let i = 0; i < one; i++) {
        if (nums[i] == 1)
            maxOne++;
    }
    let max = maxOne;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] == 1)
            maxOne--;
        if (nums[(i + one - 1) % nums.length] == 1)
            maxOne++;
        if (maxOne > max)
            max = maxOne;
    }
    return one - max;
      
};
