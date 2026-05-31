/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maximumMEX = function(nums) {
    const n = nums.length
    const suf = Array(n)
    const has = Array(n + 2).fill(false)
    let mex = 0

    for(let i = n - 1; i >= 0; i--) {
        if(nums[i] < n + 2) has[nums[i]] = true

        while(has[mex]) mex++
        suf[i] = mex
    }
    


    const res=  []
    const seen = Array(n + 2).fill(0)
    let step = 1

    for(let i = 0; i < n;) {
        const target = suf[i]
        if(target === 0) {
            res.push(0)
            i++
        } else {
            let cnt = 0
            let j = i
            while(j < n) {
                const val = nums[j]
                if(val < target && seen[val] !== step) {
                    seen[val] = step
                    cnt++
                }
                if(cnt === target) break
                j++
            }
            res.push(target)
            i = j + 1
            step++
        }
    }


    

    return res
};
