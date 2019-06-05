/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const minKBitFlips = function(A, K) {
    let cur = 0, res = 0;
    for (let i = 0; i < A.length; ++i) {
        if (i >= K) cur -= (A[i - K] / 2) >> 0;
        if ((cur & 1 ^ A[i]) === 0) {
            if (i + K > A.length) return -1;
            A[i] += 2;
            cur++;
            res++;
        }
    }
    return res;
};
