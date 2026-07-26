/**
 * @param {number} n
 * @param {number} s
 * @return {number}
 */
var largestInteger = function(n, s) {
    if(s == 0) return 0
    if(s > 9 * n) return -1
    let a = ''
    for(let i = 0; i < n; i++) {
        let d = Math.min(9, s)
        a += d
        s -= d
    }
    return Number(a)
};
