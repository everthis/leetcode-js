/**
 * @param {number[]} nums
 * @return {number}
 */
var countGoodSubarrays = function(nums) {
    const n = nums.length

    const right_bound = Array(n).fill(n)
    const left_bound = Array(n).fill(-1)

    const next_pos = Array(32).fill(n)
    const last_pos = Array(32).fill(-1)

    const lastSeen = new Map(), {max, min} = Math

    for(let i = n - 1; i >= 0; i--) {
        const num = nums[i]
        for(let bit = 0; bit < 32; bit++) {
            if((num & (1 << bit)) === 0) {
                right_bound[i] = Math.min(right_bound[i], next_pos[bit])
            }
        }

        for(let bit = 0; bit < 32; bit++) {
            if((num & (1 << bit)) !== 0) next_pos[bit] = i
        }
    }

    //
    for(let i = 0; i < n; i++) {
        const num = nums[i]
        let lb = -1

        for(let bit = 0; bit < 32; bit++) {
            if((num & (1 << bit)) === 0) {
                lb = max(lb, last_pos[bit])
            }
        }

        if(lastSeen.has(num)) lb = max(lb, lastSeen.get(num))

        left_bound[i] = lb

        for(let bit = 0; bit < 32; bit++) {
            if((num & (1 << bit)) !== 0) last_pos[bit] = i
        }
        

        lastSeen.set(num, i)
    }

    
    let res = 0

    for(let i = 0; i < n; i++) {
        const l = i - left_bound[i]
        const r = right_bound[i] - i
        res += l * r
    }
    


    return res
};
