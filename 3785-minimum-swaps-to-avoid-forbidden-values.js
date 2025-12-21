/**
 * @param {number[]} nums
 * @param {number[]} forbidden
 * @return {number}
 */
var minSwaps = function(nums, forbidden) {
  const n = nums.length
    const freq = new Map()
    const restrict = new Map()
    for(const x of nums) {
        freq.set(x, (freq.get(x) || 0) + 1)
    }

    for(const x of forbidden) {
        restrict.set(x, (restrict.get(x) || 0) + 1)
    }

    for(const [key, val] of freq.entries()) {
        if(val > n - (restrict.get(key) || 0)) return -1
    }
    let col = 0, maxColF = 0
    let colCnt = new Map()

    for(let i = 0; i < n; i++) {
        if(nums[i] === forbidden[i]) {
            col++
            const c = (colCnt.get(nums[i]) || 0) + 1
            colCnt.set(nums[i], c)
            maxColF = Math.max(maxColF, c)
        }
    } 
    if(col === 0) return 0
    const halfCeil = (col + 1) >> 1
    return Math.max(maxColF, halfCeil)
    
};
