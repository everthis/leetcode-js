/**
 * @param {number} k
 * @param {number} x
 * @return {number}
 */
var findMaximumNumber = function(k, x) {
    let l = 0n;
    let r = 10n ** 20n;

    while (l + 1n < r) {
        let m = (l + r) >> 1n;

        if (F(Number(m + 1n)) <= k) l = m;
        else r = m;
    }

    return Number(l);

    function F(m) {
        let count = 0;

        for (let i = 1; i < 80; i++) {
            let bit = (i * x) - 1;
            let S = 1n << BigInt(bit);
            let B = BigInt(m) / S;

            count += Number(S) * Math.floor(Number(B) / 2);
            if ((Number(B) & 1) === 1) {
                count += Number(BigInt(m) % S);
            }
        }

        return count;
    }
};
