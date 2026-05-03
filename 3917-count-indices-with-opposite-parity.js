/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
    const n = nums.length

    const res = []

    for(let i = 0; i < n; i++) {
        const e = nums[i]
        const p = e % 2
        let cur = 0
        for(let j = i + 1; j < n; j++) {
            const tmp = nums[j]
            const pp = tmp % 2
            if(p ^ pp) cur++
        }

        res.push(cur)
    }


    return res
};
