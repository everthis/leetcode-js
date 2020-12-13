/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
        let left = 0
        let right = nums.length - 2
        let begin = 0
        for(let i = 1, len = nums.length; i < len; i++) {
          begin += (nums[i] - nums[0])
        }

        const res = [begin]
        for(let i = 1, len = nums.length; i < len; i++) {
            res.push(res[i - 1] - (nums[i] - nums[i - 1]) * (right - left))
            left += 1
            right -= 1
        }

        return res    
};
