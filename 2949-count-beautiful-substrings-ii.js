const set = new Set(['a', 'e', 'i', 'o', 'u']);
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function(s, k) {
    const primes = Eratosthenes(k);
    let m = 1;

    for (const p of primes) {
        let count = 0;
        while (k % p === 0) {
            count++;
            k /= p;
        }
        if (count !== 0 && count % 2 === 1) {
            m *= Math.pow(p, (count + 1) / 2);
        } else if (count !== 0 && count % 2 === 0) {
            m *= Math.pow(p, count / 2);
        }
    }
    m *= 2;

    const n = s.length;
    s = '#' + s; // Prepend a character to ensure 1-based indexing
    let ret = 0;

    const map = new Map();
    map.set(0, new Map());
    map.get(0).set(0, 1);

    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (set.has(s[i])) {
            count++;
        } else {
            count--;
        }

        if (map.has(count) && map.get(count).has(i % m)) {
            ret += map.get(count).get(i % m);
        }

        if (!map.has(count)) {
            map.set(count, new Map());
        }
        map.get(count).set(i % m, (map.get(count).get(i % m) || 0) + 1);
    }

    return ret;
};

function Eratosthenes(n) {
    const q = Array(n + 1).fill(0);
    const primes = [];

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (q[i] === 1) continue;
        for (let j = i * 2; j <= n; j += i) {
            q[j] = 1;
        }
    }

    for (let i = 2; i <= n; i++) {
        if (q[i] === 0) {
            primes.push(i);
        }
    }

    return primes;
}
