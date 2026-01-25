/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var rotateElements = function(nums, k) {
    const list = []
    for(const v of nums) {
        if(v >= 0) list.push(v)
    }

    const m = list.length
    if(m <= 1) return nums

    let shift = k % m
    const rotated = []
    for(let i = 0; i < m; i++) {
        rotated.push(list[(i+shift) % m])
    }
    let idx = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= 0) {
            nums[i] = rotated[idx++]
        }
    }

    return nums
};
