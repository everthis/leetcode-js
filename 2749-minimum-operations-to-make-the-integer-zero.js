/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const makeTheIntegerZero = (x, y) => {
    for (let cnt = 0; cnt < 40; cnt++) {
        let sum = x - cnt * y;
        if (sum < 0) break;
        let f = SumOfPower2Factorization(sum), min = f.size, max = sum; // max factorization is all 1's (2 ^ 0)
        if (min <= cnt && cnt <= max) return cnt;
    }
    return -1;
};

// min factorization (smallest total cnt)
const SumOfPower2Factorization = (x) => {
    let i = 0, bit = 2 ** i, v = [], res = new Set(), cur = x;
    while (bit <= x) {
        v.push(bit);
        i++;
        bit = 2 ** i;
    }
    while (cur != 0) {
        let idx = v.findIndex((element) => element > cur);
        if (idx === -1) {
            idx = v.length - 1;
        } else {
            idx--;
        }
        res.add(idx);
        cur -= v[idx];
    }
    return res;
};
