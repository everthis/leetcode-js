/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minCuttingCost = function(n, m, k) {
    let res = 0
    if (n > k) {
        res += (n - k) * k
    }
    if (m > k) {
        res += (m - k) * k
    }
    return res
};
