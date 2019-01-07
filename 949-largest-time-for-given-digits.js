/**
 * @param {number[]} A
 * @return {string}
 */

const largestTimeFromDigits = function(A) {
    let ans = "";
    for (let i = 0; i < 4; ++i) {
        for (let j = 0; j < 4; ++j) {
            for (let k = 0; k < 4; ++k) {
                // avoid duplicate among i, j & k.
                if (i == j || i == k || j == k) continue; 
                // hour, minutes, & time.
                let h = "" + A[i] + A[j], m = "" + A[k] + A[6 - i - j - k], t = h + ":" + m; 
                // hour < 24; minute < 60; update result.
                if (h < "24" && m < "60" && ans < t) ans = t; 
            }
        }
    }
    return ans;
};
