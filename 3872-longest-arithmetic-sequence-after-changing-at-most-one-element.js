/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithmetic = function(nums) {
    const n = nums.length
    if(n <= 2) return n

    const left_len = new Array(n).fill(1)
    const left_diff = new Array(n).fill(0)
    left_len[0] = 1

    for(let i = 1; i < n; i++) {
        const d = nums[i] - nums[i - 1]
        left_diff[i] = d
        if(i === 1 || left_diff[i - 1] !== d) left_len[i] = 2
        else left_len[i] = left_len[i - 1] + 1
    }

    const right_len = Array(n).fill(1)
    const right_diff = Array(n).fill(0)
    right_len[n - 1] = 1

    for(let i = n - 2; i >= 0; i--) {
        const d = nums[i + 1] - nums[i]
        right_diff[i] = d
        if(i === n - 2 || right_diff[i + 1] !== d) right_len[i] = 2
        else right_len[i] = right_len[i + 1] + 1
    }

    let res = 0
    for(let i = 0; i < n; i++) res = Math.max(res, left_len[i])
    res = Math.max(res, 1 + right_len[1])
    res = Math.max(res, left_len[n - 2] + 1)

    const big = BigInt, {max} = Math
    for(let i = 1; i <= n - 2; i++) {
        res = Math.max(res, left_len[i - 1] + 1)
        res = Math.max(res, right_len[i + 1] + 1)
        const span = big(nums[i + 1]) - big(nums[i - 1])
        if(span % 2n === 0n) {
            const d = Number(span / 2n)
            let left_count = 1
            if(i - 1 >= 1 && left_diff[i - 1] === d) left_count = left_len[i - 1]
            let right_count = 1
            if(i + 1 <= n - 2 && right_diff[i + 1] === d) right_count = right_len[i + 1]
            res = max(res, left_count + 1 + right_count)
        }
    }


    return res
};
