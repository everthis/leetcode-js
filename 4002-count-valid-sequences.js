/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var countValidSequences = function(n, k) {
    
    const big = BigInt
    const M = big(1e9 + 7)

    
    if( k > n) return 0
    const f = Array(n + 1).fill(0n), iv = Array(n + 1).fill(0n)
    f[0] = 1n

    for(let i = 1; i <= n; i++) {
        f[i] = (f[i - 1] * big(i)) % M
    }
// console.log(f)
    iv[n] = pw(f[n], M - 2n)

    for(let i = n; i > 0; i--) {
        iv[i - 1] = (iv[i] * big(i)) % M
    }

    const all = c(n - 1, k - 1, f, iv)

    let odd = 0n
    if(((n - k) & 1) === 0) {
        const s = (n - k) /2
        odd = c(s + k - 1, k - 1, f, iv)
    }
    let res = (all - odd) % M

    // console.log(res)
    if(res < 0n) res += M
    return Number(res) 

function c(n, r, f, iv) {
    if (r < 0 || r > n) return 0;
    return (((f[n] * iv[r]) % M) * iv[n - r]) % M;
}

function pw(a, b) {
    let r = 1n;
    let aa = BigInt(a)
    let MM = BigInt(M)
    while (b > 0n) {
        if ((b & 1n) === 1n) r = (r * aa) % MM;
        aa = (aa * aa) % MM;
        b >>= 1n;
    }
    return r;
}
};
