/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = function(nums, k) {
    const sum = nums.reduce((ac, el) => ac + el, 0)
    return k !== 0 && sum % k === 0 && canPartition(0, nums, [], k, 0, sum / k)
    
};

function canPartition(start, nums, seen, k, sum, target) {
    if(k === 1) return true
    if (sum === target) {
        return canPartition(0, nums, seen, k - 1, 0, target)
    }
    for(let i = start; i < nums.length; i++) {
        if (!seen[i]) {
            seen[i] = true
            if(canPartition(i + 1, nums, seen, k, sum + nums[i], target)) {
                return true
            }
            seen[i] = false
        }
    }
    return false
}
