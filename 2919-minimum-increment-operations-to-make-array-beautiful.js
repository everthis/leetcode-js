/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minIncrementOperations = function(nums, k) {
    const dp = new Array(nums.length).fill(-1)
    
    const traverse = (index) => {
        if (index >= nums.length - 2) return 0

        if (dp[index] !== -1) return dp[index]
        
        let res = Infinity;
        for (let i = index; i <= index + 2; i++) {
            const val = Math.max(k - nums[i], 0)
            const next = traverse(i + 1)
            res = Math.min(val + next, res)
        }
        
        dp[index] = res
        return res
    }

    
    return traverse(0)   
};
