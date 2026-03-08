/**
 * @param {string} s
 * @param {number} encCost
 * @param {number} flatCost
 * @return {number}
 */
var minCost = function(s, encCost, flatCost) {
    const n = s.length
    const big = BigInt
    const prefix = Array(n + 1).fill(0)
    for(let i = 0; i < n; i++) {
        prefix[ i+ 1] = prefix[i] + (s[i] === '1' ? 1 : 0)
    }

    return solve(0, n)
    function solve(l, r) {
        const len = r - l
        const ones = prefix[r] - prefix[l]
        if(ones === 0) return flatCost
        let res = big(len) * big(ones) * big(encCost)

        if(len % 2 === 0) {
            const mid = Math.floor(l +  len / 2)
            const left = solve(l, mid)
            const right = solve(mid, r)
            if((big(left + right) < res)) res = big(left + right)
        }

        return Number(res)
    }
};
