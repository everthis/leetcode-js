/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = function(A) {
    let res = 0, n = A.length, m = A[0].length, i, j;
    let sorted = new Array(n - 1).fill(false);
    for (j = 0; j < m; ++j) {
        for (i = 0; i < n - 1; ++i) {
            if (!sorted[i] && A[i].charAt(j) > A[i + 1].charAt(j)) {
                res++;
                break;
            }
        }
        if (i < n - 1) continue;
        for (i = 0; i < n - 1; ++i)
            if (A[i].charAt(j) < A[i + 1].charAt(j))
                sorted[i] = true;
    }
    return res;
};
