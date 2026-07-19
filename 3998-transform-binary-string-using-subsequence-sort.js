/**
 * @param {string} s
 * @param {string[]} strs
 * @return {boolean[]}
 */
var transformStr = function(s, strs) {
    const n = s.length

    const res = []
    let tot = 0
    const pre = Array(n)
    for(let i = 0; i < n; i++) {
        if(s[i] === '0') tot++
        pre[i] = tot
    }

    for(const t of strs) {
        let z = 0, q = 0
        for(const c of t) {
            if(c === '0') z++
            else if(c === '?') q++
        }

        const k = tot - z
        if(k < 0 || k > q) {
            res.push(false)
            continue
        }

        let ok = true
        let curz = 0, curq = 0

        for(let i = 0; i < n; i++) {
            if(t[i] === '0') curz++
            else if(t[i] === '?') curq++

            const mx = curz + Math.min(curq, k)
            if(mx < pre[i]) {
                ok = false
                break
            }
        }
        res.push(ok)
    }

    return res
};
