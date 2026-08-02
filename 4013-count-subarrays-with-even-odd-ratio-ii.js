/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var countRatioSubarrays = function(nums, a, b) {
    const n = nums.length
    const prefix = Array(n + 1).fill(0n)

    
    
    let res = 0n
    const big = BigInt

    for(let i = 0; i < n; i++) {
        const tmp = (nums[i] % 2 === 0) ? big(b) : -big(a)
        prefix[i + 1] = prefix[i] + tmp
    }
    const sortedValues = [...new Set(prefix)].sort((x, y) => {
        if(x < y) return -1
        if(x > y) return 1
        return 0
    })

    const distinctCnt = sortedValues.length
    const tree = Array(distinctCnt + 1).fill(0)

    let inserted = 0

    for(let j = 0; j<=n; j++) {
        const rank = lowerBound(sortedValues, prefix[j]) + 1
        res += big(inserted - query(rank - 1))
        update(rank)
        inserted++
    }

    

    return Number(res)


    function lowerBound(arr, val) {
        let l = 0, r = arr.length
        while(l < r) {
            const mid = Math.floor((l + r) / 2)
            if(arr[mid] < val) l = mid + 1
            else r = mid
        }

        return l
    }

    function update(pos) {
        for(; pos <= distinctCnt; pos += pos & (-pos)) {
            tree[pos]++
        }
    }

    function query(pos) {
        let tmp = 0
        for(; pos > 0; pos -= pos & (-pos)) {
            tmp += tree[pos]
        }
        return tmp
    }
};
