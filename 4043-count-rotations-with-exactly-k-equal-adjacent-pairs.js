/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countRotations = function(s, k) {
    let res = 0
    const n = s.length

    for(let i = 0; i < n; i++) {
        const pre = s.slice(0, i)
        const suf = s.slice(i)
        const tmp = suf + pre
        // console.log(tmp)
        const score = cal(tmp)
        if(score === k) res++
    }

    return res

    function cal(s) {
        const n = s.length
        let tmp = 0

        for(let i = 0; i < n - 1; i++) {
            if(s[i] === s[i + 1]) tmp++
        }

        return tmp
    }
};
