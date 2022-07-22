const ll = BigInt, mod = ll(1e9 + 7), N = 1e4 + 15;

const hcomb = (p, q) => p == 0 && q == 0 ? 1 : comb(p + q - 1, q);
const comb_init = () => {
    fact[0] = ifact[0] = inv[1] = 1n; // factorial, inverse factorial
    for (let i = 2; i < N; i++) inv[i] = (mod - mod / ll(i)) * inv[mod % ll(i)] % mod;
    for (let i = 1; i < N; i++) {
        fact[i] = fact[i - 1] * ll(i) % mod;
        ifact[i] = ifact[i - 1] * inv[i] % mod;
    }
};

// combination mod pick k from n
const comb = (n, k) => {
    if (n < k || k < 0) return 0;
    return fact[n] * ifact[k] % mod * ifact[n - k] % mod;
};

/*
prerequisite:
(number of factors)
https://www.codechef.com/LTIME01/problems/NUMFACT
*/
const number_factor = (n) => {
    let m = new Map();
    for (let i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            n /= i;
            m.set(i, m.get(i) + 1 || 1);
        }
    }
    if (n > 1) m.set(n, m.get(n) + 1 || 1);
    return m;
};

let fact, ifact, inv;
const idealArrays = (n, maxValue) => {
    fact = Array(N).fill(0), ifact = Array(N).fill(0), inv = Array(N).fill(0);
    comb_init();
    let res = 0n;
    for (let x = 1; x <= maxValue; x++) {
        let perm = 1n, m = number_factor(x);
        for (const [x, occ] of m) {
            perm = perm * hcomb(n, occ) % mod;
        }
        res += perm;
    }
    return res % mod;
};
