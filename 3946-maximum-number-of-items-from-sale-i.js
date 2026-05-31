/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function(items, budget) {
    const n = items.length
    const bonus = Array(n).fill(0)

    for(let i = 0; i < n; i++) {
        const f = items[i][0]
        for(let j = 0; j < n; j++) {
            if(i !== j && items[j][0] % f === 0) bonus[i]++
        }
    }

    let dp = Array(budget + 1).fill(0)

    for(let i = 0; i < n; i++) {
        const price = items[i][1]
        const free = bonus[i]
        const ndp = dp.slice(0)

        for(let r = 0; r < price; r++) {
            let best = Number.MIN_SAFE_INTEGER / 2
            let m = 0
            for(let pos = r; pos <= budget; pos += price, m++) {
                if(best > Number.MIN_SAFE_INTEGER / 4) {
                    ndp[pos] = Math.max(ndp[pos], best + m + free)
                }
                best = Math.max(best, dp[pos] - m)
            }
        }

        dp = ndp
    }
    
    

    let res = 0

    for(const e of dp) res = Math.max(res, e)

    return res
};
