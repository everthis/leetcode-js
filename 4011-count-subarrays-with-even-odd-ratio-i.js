/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var countRatioSubarrays = function(nums, a, b) {
    const n = nums.length
    let res = 0

    for(let l = 0; l < n; l++) {
        let even = 0, odd = 0
        for(let r = l; r < n; r++) {
            if(nums[r] % 2 === 0) even++
            else odd++
            if(odd > 0 && even * b <= odd * a) res++
        }
    }


    return res
};
