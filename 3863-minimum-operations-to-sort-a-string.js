/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    const ss = s
    const t = s.split('').sort().join('')

    if(s === t) return 0
    const n = s.length
    if(n === 2) return -1
    if(s[0] === t[0] || s[s.length - 1] === t[t.length - 1]) return 1
    let res = 0

    // for(let i = 0; i < n - 1; i++) {
    //     if(s[i] > s[i + 1]) res++
    // }

    for(let i = 0; i < n - 1; i++) {
        if(s[i] === t[0]) return 2
    }

    for(let i = 1; i < n; i++) {
        if(s[i] === t[t.length - 1]) return 2
    }

    return 3
};
