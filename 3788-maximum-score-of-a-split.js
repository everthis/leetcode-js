/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumScore = function(nums) {
   const n = nums.length
    const pre = Array(n).fill(0), suf = Array(n).fill(0)
    let cur = 0
    for(let i = 0; i < n; i++) {
        cur += nums[i]
        pre[i] = cur
    }
    cur = Infinity
    for(let i = n - 1; i >= 0; i--) {
        cur = Math.min(cur, nums[i])
        suf[i] = cur
    }
    let res = -Infinity

    for(let i = 0; i < n - 1; i++) {
        res = Math.max(res, pre[i] - suf[i + 1])
    }

    return res
};
