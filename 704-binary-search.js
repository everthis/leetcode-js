/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end){
        let mid = parseInt((start + end) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] > target) end = mid -1;
        if(nums[mid] < target) start = mid + 1;
    }
    return -1;
};
