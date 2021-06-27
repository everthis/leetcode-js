/**
 * @param {string} word
 * @return {number}
 */
const asi = (c) => c.charCodeAt();
const wonderfulSubstrings = (s) => {
    let res = 0;
    let f = Array(2 ** 10).fill(0);
    f[0] = 1; // count array
    let cur = res = 0;
    for (const c of s) {
        cur ^= 1 << asi(c) - 97; // get Hash (the set bit for a character.), update prefix parity
        res += f[cur];
        for (let i = 0; i < 10; i++) { // a ~ j
            res += f[cur ^ 1 << i]; // 1 << i get Hash
        }
        f[cur]++;
    }
    return res;
};
