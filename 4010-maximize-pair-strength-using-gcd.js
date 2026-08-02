/**
 * @param {number[]} nums
 * @return {number}
 */
var maxPairStrength = function(nums) {
    const n = nums.length
    let res = -Infinity
    for(let i = 0; i < n; i++) {
        for(j = i + 1; j < n; j++) {
            const t = gcd(nums[i], nums[j])
            const tmp = (nums[i] * nums[j]) / (t * t)
            res = Math.max(res, tmp)
        }
    }

    return res
};

function gcd(a,b) {
    return b ? gcd(b, a % b) : a
}
