/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findValidElements = function(nums) {
    const res = [nums[0]]
    const n = nums.length

    for(let i = 1; i < n - 1; i++) {
        const left = nums.slice(0, i)
        const right = nums.slice(i + 1)

        if(left.length && nums[i] > Math.max(...left) || (right.length && nums[i] > Math.max(...right))) {
            res.push(nums[i])
        }
    }

    if(nums.length > 1) res.push(nums[nums.length - 1])

    return res
};
