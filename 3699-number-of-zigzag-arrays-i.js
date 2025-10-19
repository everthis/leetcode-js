/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function(n, l, r) {
    r -= l;
    let dp = new Array(r + 1).fill(1);
    const mod = 10 ** 9 + 7;
    for (let i = 1; i < n; i++) {
        let pre = 0;
        if (i & 1) {
            for (let v = 0; v <= r; v++) {
                let pre2 = pre + dp[v];
                dp[v] = pre;
                pre = pre2 % mod;
            }
        } else {
            for (let v = r; v >= 0; v--) {
                let pre2 = pre + dp[v];
                dp[v] = pre;
                pre = pre2 % mod;
            }
        }
    }
    return (dp.reduce((a, b) => a + b, 0) * 2) % mod;
};
