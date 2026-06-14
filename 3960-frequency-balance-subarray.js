/**
 * @param {number[]} nums
 * @return {number}
 */
var getLength = function(nums) {
    const n = nums.length
    let res = 1

    for(let i = 0; i < n; i++) {
        const freq = new Map(), cnt = new Map()
        let dis = 0, maxi = 0

        for(let j = i; j < n; j++) {
            const num = nums[j]
            const oldFreq = freq.get(num) || 0
            if(oldFreq > 0) {
                cnt.set(oldFreq, (cnt.get(oldFreq) || 0) - 1)
            }

            const nf = oldFreq + 1
            freq.set(num, nf)

            if(nf === 1) dis++
            cnt.set(nf, (cnt.get(nf) || 0) + 1)
            maxi = Math.max(maxi, nf)

            let flag = false
            if(dis === 1) flag = true
            else if(maxi % 2 === 0) {
                const cntMaxi = cnt.get(maxi) || 0
                const cntHalf = cnt.get(maxi / 2) || 0
                if(cntMaxi + cntHalf === dis && cntMaxi >= 1 && cntHalf >= 1) flag = true
            }
            if(flag) res = Math.max(res, j - i + 1)

        }
    }



    return res
};
