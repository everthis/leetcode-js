/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
  const n = s.length
    let zeros = 0
    for(const c of s) {
        zeros += (c === '0' ? 1 : 0)
    }
    const ones = n - zeros

    const pref = Array(n + 1).fill(0)

    for(let i = 0; i < n; i++) {
        pref[i + 1] = pref[i] + (s[i] === '1' ? 1 : -1)
    }

    const pos = new Map()
    for(let i = 0; i <= n; i++) {
        if(!pos.has(pref[i])) {
            pos.set(pref[i], [])
        }
        pos.get(pref[i]).push(i)
    }

    let res = 0

    for(const v of pos.values()) {
        if(v.length > 0) {
            res = Math.max(res, v[v.length - 1] - v[0])
        }
    }

    helper(2, 2 * zeros)
    helper(-2, 2 * ones)

    return res

    function helper(target, limit) {
        if(limit <= 0) return
        for(let r = 0; r <= n; r++) {
            const key = pref[r] - target
            if(!pos.has(key)) continue
            const v = pos.get(key)
            const lbIndex = lowerBound(v, r - limit)
            if(lbIndex < v.length && v[lbIndex] < r) {
                res = Math.max(res, r - v[lbIndex])
            }
        }
    }

    function lowerBound(arr, target) {
        let left = 0, right = arr.length
        while(left < right) {
            const mid = (left + right) >> 1
            if(arr[mid] < target) left = mid + 1
            else right = mid
        }
        return left
    }
}; 
