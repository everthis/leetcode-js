/**
 * @param {number[]} nums
 * @return {number}
 */
var minArraySum = function(nums) {
    const maxv = 1e5
    const freq = Array(maxv + 1).fill(0)
    const n = nums.length

    for(let i = 0; i < n; i++) {
        freq[nums[i]]++
    }

    const best = Array(maxv + 1).fill(0)
    for(let d = 1; d <= maxv; d++) {
        if(freq[d] === 0) continue

        for(let multi = d; multi <= maxv; multi += d) {
            if(best[multi] === 0) best[multi] = d
        }
    }

    
    let res = 0n

    for(let i = 0; i < n; i++) {
        res += BigInt(best[nums[i]])
    }

    return Number(res)
};
