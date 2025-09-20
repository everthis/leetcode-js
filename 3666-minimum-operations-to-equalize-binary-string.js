/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minOperations = function(s, k) {
    const N = s.length;
    const Z = [...s].filter(c => c === '0').length;
    const inf = Infinity;

    if (N === k) {
        if (Z === 0) return 0;
        else if (Z === N) return 1;
        else return -1;
    }

    let res = inf;
    if (Z % 2 === 0) {
        let M = Math.max(ceil(Z, k), ceil(Z, N - k));
        M += M & 1;
        res = Math.min(res, M);
    }
    if (Z % 2 === k % 2) {
        let M = Math.max(ceil(Z, k), ceil(N - Z, N - k));
        M += (M & 1) === 0 ? 1 : 0;
        res = Math.min(res, M);
    }

    return res < inf ? res : -1;    
};
function ceil(x, y) {
    return Math.floor((x + y - 1) / y);
}
