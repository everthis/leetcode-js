/**
 * @param {number[]} nums
 * @return {number}
 */
var countConsistent = function(nums) {
    const {min,max} = Math
    const n = nums.length
    // let mi = nums[0]
    // for(let i = 1; i < n; i++) {
    //     if(nums[i] < mi) mi = nums[i]
    // }
    let res = 0

    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j <= n; j++) {
            const sub = nums.slice(i, j)
            let tmp = sub[0], mi = sub[0]
            const m = sub.length
            for(let k = 1; k < m; k++) {
                if(sub[k] < mi) mi = sub[k]
            }
            // const m = sub.length
            for(let k = 1; k < m; k++) {
                tmp = tmp & sub[k]
            }
            if(tmp === mi) res++
        }
    }

    return res
};
