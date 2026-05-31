/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function(items, budget) {
    const n = items.length
    let mn = 2e18
    const freq = Array(n + 1).fill(0)
    const {max, min} = Math
    
    for(const e of items) {
        freq[e[0]]++
        mn = min(mn, e[1])
    }

    const dp = Array(n + 1).fill(0)

    for(let i = 1; i <= n; i++) {
        if(freq[i] === 0) continue
        let  cnt = 0
        for(let j = i; j <= n; j += i) {
            cnt += freq[j]
        }
        dp[i] = cnt - 1
    }

    const v = []

    for(const [fir, sec] of items) {
        if(dp[fir] > 0 && sec < 2 * mn) {
            v.push([sec, dp[fir]])
        }
    }

    v.sort((a, b) => a[0] - b[0])

    let b = budget

    let res = 0

    for(const [fir, cnt] of v) {
        if(b < fir) break
        const take = min(cnt, Math.floor(b / fir))
        res += 2 * take
        b -= take * fir
    }

    res += Math.floor(b / mn)

    return res
};
