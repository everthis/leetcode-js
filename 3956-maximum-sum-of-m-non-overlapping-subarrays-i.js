/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var maximumSum = function(nums, m, l, r) {
    const n = nums.length

    const inf = 1e16
    let res = -inf

    const pref = Array(n + 1).fill(0)
    for(let i = 0; i < n; i++) {
        pref[i + 1] = pref[i] + nums[i]
    }

    let prev = Array(n + 1).fill(0)

    for(let j = 1; j <= m; j++) {
        if(j * l > n) break
        const cur = Array(n + 1).fill(-inf)
        const dq = []

        for(let i = 1; i <= n; i++) {
            cur[i] = cur[i - 1]
            const p = i - l
            if(p >= 0 && prev[p] > -inf) {
                const val = prev[p] - pref[p]
                while(dq.length > 0 && (prev[dq[dq.length - 1]] - pref[dq[dq.length - 1]]) <= val) {
                    dq.pop()
                }
                dq.push(p)
            }

            while(dq.length > 0 && dq[0] < i - r) {
                dq.shift()
            }
            if(dq.length > 0) {
                const best = dq[0]
                const val = pref[i] + prev[best] - pref[best]
                cur[i] = Math.max(cur[i], val)
            }
        }

        res = Math.max(res, cur[n])
        prev = cur
        
    }



    return res
};
