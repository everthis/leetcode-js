/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFixedPoints = function(nums) {


    const n = nums.length
        let res = 0
    const bit = Array(n + 1).fill(0)
    const indices = []
    for(let i = 0; i <n ; i++) {
        if(nums[i] <= i) indices.push(i)
    }

    indices.sort((a, b) => {
        const da = a - nums[a], db = b - nums[b]
        if(da !== db) return da- db
        return a - b
    })

    for(let i of indices) {
        const v = nums[i]
        const cur = query(v) + 1
        update(v + 1, cur, n)
        res = Math.max(res, cur)
    }

    return res


    function update(idx, val, n) {
        while(idx <= n) {
            bit[idx] = Math.max(bit[idx] || 0, val)
            idx += (idx & -idx)
        }
    }

    function query(idx) {
        let res = 0

        while(idx > 0) {
            res = Math.max(res, bit[idx] || 0)
            idx -= (idx & -idx)
        }


        return res
    }
};
