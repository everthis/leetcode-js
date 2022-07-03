/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
const peopleAwareOfSecret = function(n, delay, forget) {
    let cnt = new Array(n+1).fill(0);
    cnt[1] = 1;
    let i = 1;
    let MOD = 1_000_000_007;
    while (i+delay <= n) {
        for (let j = i+delay; j <= Math.min(n, i+forget-1); j++) {
            cnt[j] = (cnt[j]+cnt[i])%MOD;
        }
        i++;
    }
    let res = 0;
    for (let j = n; j > n-forget; j--) {
        res = (res + cnt[j])%MOD;
    }
    return res;
};
