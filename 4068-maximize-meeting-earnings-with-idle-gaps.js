/**
 * @param {number[][]} meetings
 * @return {number}
 */
var maxEarnings = function(meetings) {
    let m = meetings
    m.sort((a, b) => a[1] - b[1])
    const n = m.length
    const dp = Array(n).fill(0n)
    const best = Array(n).fill(0n)
    const big = BigInt
    
    for(let i = 0; i < n; i++) {
        const start = big(m[i][0])
        const end = big(m[i][1])
        const rev = big(m[i][2])

        dp[i] = rev

        let lo = 0
        let hi = i - 1
        let prev = -1

        while(lo <= hi) {
            const mid = Math.floor((lo + hi) / 2)
            if(m[mid][1] <= m[i][0]) {
                prev = mid
                lo = mid + 1
            } else {
                hi = mid - 1
            }
        }


        if(prev !== -1) {
            const tmp = best[prev] + start + rev
            if(tmp > dp[i]) dp[i] = tmp
        }

        const val = dp[i] - end
        if(i === 0) {
            best[i] = val
        } else {
            best[i] = best[i - 1] > val ? best[ i - 1] : val
        }

        
    }


    


    let res = 0n

    for(const x of dp) {
        if(x > res) res = x
    }


    return Number(res)
    
};
