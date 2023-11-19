/**
 * @param {number} a
 * @param {number} b
 * @param {number} n
 * @return {number}
 */
var maximumXorProduct = function(a, b, n) {
    let ans = 0n;
    let big = 0n;
    let found = false;
    a = BigInt(a)
    b = BigInt(b)

    for (let i = 50; i >= 0; i--) {
        let curr = BigInt(1) << BigInt(i);

        if (((a & curr) == 0n) && ((b & curr) == 0n)) {
            if (i < n) ans += curr;
        } else if (((a & curr)) && ((b & curr) == 0n)) {
            if (big == 0) big = -1;
            else if (big == -1 && i < n) ans += curr;
        } else if (((a & curr) == 0n) && ((b & curr))) {
            if (big == 0) big = 1;
            else if (big == 1 && i < n) ans += curr;
        }
    }

    let mod = BigInt(1000000007);
    a ^= ans;
    b ^= ans;
    a %= mod;
    b %= mod;
    ans = (a * b) % mod;

    return Number(ans);
};
