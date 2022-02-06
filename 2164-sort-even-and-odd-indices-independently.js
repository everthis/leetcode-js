/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
        let nums_size = nums.length;
        for (let i = 0; i < nums_size - 2; i++) {
            for (let j = i + 2; j < nums_size; j += 2) {
                if (i % 2 == 1) {
                    if (nums[i] < nums[j]) {
                        let temp = nums[i];
                        nums[i] = nums[j];
                        nums[j] = temp;
                    }
                } else {
                    if (nums[i] > nums[j]) {
                        let temp = nums[i];
                        nums[i] = nums[j];
                        nums[j] = temp;
                    }
                }
            }
        }
        return nums;  
};
