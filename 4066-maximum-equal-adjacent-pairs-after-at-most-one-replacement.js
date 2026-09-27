/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualAdjacentPairs = function(nums) {
    const n = nums.length
    let base = 0
    const map = new Map()

    for(let i = 0; i < n - 1; i++) {
        if(nums[i] === nums[i + 1]) {
            base++
        } else {
            const a = Math.min(nums[i], nums[i + 1])
            const b = Math.max(nums[i], nums[i + 1])
            const key = a + '#' + b
            map.set(key, (map.get(key) || 0) + 1)
        }
    }


    
    let max = 0

    for(const c of map.values()) {
        max = Math.max(max, c)
    }


    return base + max
};
