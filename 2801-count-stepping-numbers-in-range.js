const minus_mod = (x, y, mod) => ((x - y) % mod + mod) % mod;
const mod = 1e9 + 7, ll = BigInt;
let memo;
const go = (s) => {
    memo = new Map();
    return dfs(0, 0, true, false, s);
};

const dfs = (i, mask, isLimit, isNum, s) => {
    let ke = i + " " + mask + " " + isLimit + " " + isNum;
    if (memo.has(ke)) return memo.get(ke);
    if (i == s.length) return isNum - '0';
    let res = 0;
    if (!isNum) res = dfs(i + 1, mask, false, false, s);
    let leading = isNum ? 0 : 1;
    let up = isLimit ? s[i] - '0' : 9;
    for (let digit = leading; digit <= up; digit++) {
        if (!isNum || Math.abs(digit - mask) == 1) {
            res += dfs(i + 1, digit, isLimit && digit == up, true, s);
        }
    }
    res %= mod;
    memo.set(ke, res);
    return res;
};
/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
const countSteppingNumbers = (low, high) => {
    let x = go(high), y = go((ll(low) - 1n).toString());
    return minus_mod(x, y, mod);
};

